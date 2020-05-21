const mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '72296',
    database: 'final_project'
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/coins', (req, res) => {
    pool.query('SELECT * FROM coins', (err, data) => {
        if(!err){
            res.json(data);
        }else{
            res.sendStatus(500);
        }
    })
})


app.get('/coin/:id', (req, res) => {
    const sql = `SELECT * FROM coins WHERE id = ?`;
    const sqlUpdate = `UPDATE coins SET view = view + 1 WHERE id = ?`;
    pool.query(sql, [req.params.id], (err, data) => {
        pool.query(sqlUpdate, [req.params.id], (err) => {
            if(!err){
                res.json(data);
            }else{
                res.sendStatus(500);
            }
        })
    });
})

app.delete('/coin/:id', (req, res) => {
    pool.query('DELETE FROM coins WHERE id =' + req.params.id, (err, data) => {
        if(!err){
            res.json(data);
        }else{
            res.sendStatus(500);
        }
    })
})

app.get('/coins/:id', (req, res) => {
    pool.query('SELECT * FROM coins WHERE typeId =' + req.params.id, (err, data) => {
        if(!err){
            res.json(data);
        }else{
            res.sendStatus(404);
        }
    })
})

app.post('/addCoin', (req, res) => {
    console.log(req.body)
   const { coinName, faceValue, year, price, country, metal, quality, weight, shortDesc, longDesc, observe,
    reverse, type } = req.body;
    const sql = `INSERT INTO coins
    (name, face_value, year_issue, price, country, metal, quality, weight, short_desc, long_desc, 
        obverse_img, reverse_img, view, typeId)
    VALUES
    ('${coinName}', '${faceValue}', ${+year}, ${+price}, '${country}', 
    '${metal}', '${quality}',
    ${+weight}, '${shortDesc}', '${longDesc}', '${observe}', '${reverse}', 0,  ${+type})`;
    pool.query(sql, (err, data) => {
        if(!err){
            res.json(data);
        }else{
            res.sendStatus(500);
        }
    })
})

app.post('/updateCoin/:id', (req, res) => {
    const { name, face_value, year_issue, price, country, metal, quality, weight, short_desc, long_desc, obverse_img,
        reverse_img, typeId } = req.body;
     const sql = `UPDATE coins SET
     name = '${name}', face_value = '${face_value}', year_issue = ${+year_issue}, price = ${+price}, country = '${country}', 
     metal = '${metal}', quality = '${quality}', weight = ${+weight}, short_desc = '${short_desc}', long_desc = '${long_desc}', 
        obverse_img = '${obverse_img}', reverse_img = '${reverse_img}', typeId = ${+typeId}
        WHERE id = ` + req.params.id;
     pool.query(sql, (err, data) => {
         if(!err){
             res.json(data);
         }else{
             res.sendStatus(500);
         }
     })
 })

function addCoin(coin) {
    const sql = `INSERT INTO coins
    (name, face_value, year_issue, price, country, metal, quality, weight, short_desc, long_desc, 
        obverse_img, reverse_img, view, typeId)
    VALUES
    ('${coin.header}', '${coin.denomination}', ${+coin.year}, ${+coin.price}, '${coin.country}', 
    '${coin.composition}', '${coin.quality}',
    ${+coin.weight}, '${coin.shortDescription}', '${coin.description}', '${coin.avers}', '${coin.revers}', 0,  ${coin.group})`;
    console.log(sql);
    pool.query(sql, (err, data) => {
        if (!err) {
            console.log(data);
        } else {
            console.log(err);
        }
    })
}


function loadTasksFromJson() {
    const rawdata = fs.readFileSync('./server/coins.json');
    let coins = JSON.parse(rawdata);
    coins.forEach(addCoin);
}

//loadTasksFromJson();


app.post('/search', (req, res) => {
    console.log(req.body)
    let { search, country, metal, quality, fromPrice, toPrice, fromYear, toYear } = req.body;
    fromPrice = fromPrice ? fromPrice : 0;
    toPrice = toPrice ? toPrice : 1000;
    fromYear = fromYear ? fromYear : 0;
    toYear = toYear ? toYear : 2020;
     const sql = `SELECT * FROM coins WHERE name LIKE '%${search}%' AND short_desc LIKE '%${search}%' 
     AND long_desc LIKE '%${search}%' AND country LIKE '%${country}%' AND metal LIKE '%${metal}%' 
     AND quality LIKE '%${quality}%' AND price > ${+fromPrice} AND price < ${+toPrice} 
     AND year_issue > ${+fromYear} AND year_issue < ${+toYear}`;
    console.log(search)
     pool.query(sql, (err, data) => {
         if(!err){
             res.json(data);
         }else{
             res.sendStatus(500);
         }
     })
 })



app.post('/register', (req, res) => {
    const { name, pass} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);
    const sql = `INSERT INTO users
    (name, salt, hash)
    VALUES
    ('${name}', '${salt}', '${hash}')`;
    pool.query(sql, (err, data) => {
        if(!err){
            res.json(data);
        }else{
            res.sendStatus(500);
        }
    })
  });

  app.post('/login', (req, res) => {
    const userName = req.body.name;
    const userPass = req.body.pass;
    const sql = `SELECT * FROM users WHERE name = '${userName}'`;
    pool.query(sql, (err, data) => {
        if(!err){
            const salt = data[0].salt;
            const hash = bcrypt.hashSync(userPass, salt);
            if (data[0].hash === hash) {
                res.json(data);
                return true;
            } else {
                res.sendStatus(401);
                return false;
            }   
        }else{
            res.sendStatus(500);
        }
    })
  });
