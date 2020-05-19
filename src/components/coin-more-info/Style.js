import styled from "styled-components";

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const Images = styled.div`
    margin-right: 30px;
    & div:first-child{
        margin-bottom: 24px;
    }
`

const Info = styled.div`
    width: 450px;
    background: rgba(196, 196, 196, 0.5);
    padding: 20px 43px;
    p{
        font-size: 12px;
    }
    a{
        font-size: 10px;
        color: #000000;
    }
    table{
        width: 449px;
        margin-top: 70px;
        border-collapse: collapse;
        font-size: 11px;
        margin-bottom: 145px;
        tr:nth-child(odd) {
            background: rgba(255, 255, 255, 0.9);
          }
        tr{
            border-bottom: 0.5px solid #b1abab;
          }
        tr td:first-child {
        border-right: 0.5px solid #b1abab;
        }
        td {
            padding: 3px;
            width: 50%;
          }
        
    }
`


const Picture = styled.img`
    width: 300px;
`

export { MainWrapper, Info, Picture, Images };

