
function filter() {
    return {
      type: 'FILTER'
    }
};

function clearListOfcoin() {
  return {
    type: 'CLEAR_LIST'
  }
};

function spinner() {
  return {
    type: "LOADING",
  };
}

function searchChange() {
  return function(dispatch) {
        dispatch({ type: 'SEARCH' });
  };
};

function editForm(coin) {
  return {
    type: 'EDIT_FORM',
    payload: coin
  }
};

function getCoinForEdit(id) {
  return function(dispatch) {
    fetch("/coin/" + id)
      .then((res) => res.json())
      .then((coins) => {
        dispatch({ type: 'GET_COIN_FOR_EDIT', payload: coins[0] });
      });
  };
};

function getCoins() {
  return function(dispatch) {
    fetch("/coins")
      .then((res) => res.json())
      .then((coins) => {
        dispatch({ type: 'GET_COINS', payload: coins });
      });
  };
};

function getCoinsByType(type) {
    return function(dispatch) {
      dispatch(spinner());
      fetch("/coins/" + type)
        .then((res) => res.json())
        .then((coins) => {
          dispatch({ type: 'GET_COINS_BY_TYPE', payload: coins });
          dispatch(spinner());
        });
    };
};

function getCoinById(id) {
    return function(dispatch) {
      dispatch(spinner());
      fetch("/coin/" + id)
        .then((res) => res.json())
        .then((coin) => {
          dispatch({ type: 'GET_COIN_BY_ID', payload: coin });
          dispatch(spinner());
        });
    };
};

function deleteCoin(id) {
  return function(dispatch) {
    fetch("/coin/" + id, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((post) => {
        dispatch({ type: 'DELETE_COIN', payload: id });
      });
  };
};

function addCoin(coin) {
  return function(dispatch) {
    fetch("/addCoin", {
      method: 'POST',
      body: JSON.stringify(coin),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((post) => {
        dispatch({ type: 'ADD_COIN'});
      });
  };
};

function updateCoin(id, coin) {
  return function(dispatch) {
    fetch("/updateCoin/" + id, {
      method: 'POST',
      body: JSON.stringify(coin),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((post) => {
        dispatch({ type: 'UPDATE_COIN'});
      });
  };
};

function searchCoin(text) {
  return function(dispatch) {
    dispatch(spinner());
    fetch("/search", {
      method: 'POST',
      body: JSON.stringify(text),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((coins) => {
        dispatch({ type: 'SEARCH_COIN', payload: coins});
        dispatch(spinner());
      });
  };
};


function login(user) {
  return function(dispatch) {
    fetch("/login", {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if(res.status != 200){
          throw Error('Login or password is incorrect');
        }else{
          return res.json();
        }
      })
      .then((user) => {
        dispatch({ type: 'LOGIN' });
      })
      .catch(err => alert(err));
  };
};


export {
    filter,
    clearListOfcoin,
    getCoins,
    getCoinsByType,
    getCoinById,
    deleteCoin,
    addCoin,
    updateCoin,
    searchCoin,
    searchChange,
    login,
    editForm,
    getCoinForEdit,
    spinner
};