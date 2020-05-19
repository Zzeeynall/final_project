import styled from "styled-components";

const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
`

const Caption = styled.h1`
    font-weight: 300;
    font-size: 50px;
`
const Coins = styled.div`
    width: 720px;
    height: 380px;
    overflow: scroll;
    overflow-x:hidden;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 375px;
    margin: 40px 0 25px 0;
    margin-right: 30px;
`


const Picture = styled.img`
    width: 120px;
    margin-right: 30px;
`

const AddWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 375px;;
    a{
        font-weight: 300;
        font-size: 14px;
        color: #000000;
    }
`

const Plus = styled.div`
    width: 120px;
    margin-right: 30px;
    height: 120px;
    border: 1px solid black;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    line-height: 120px;
    text-align: center;
`

const Name = styled.div`
    font-weight: bold;
    font-size: 16px;
    color: #833AE0;
`

const Desc = styled.p`
    font-size: 12px;
`

const EditButton = styled.button`
    width: 120px;
    height: 50px;
    border: none;
    background: #E1E1E1;
    font-size: 14px;
    color: #000000;
    cursor: pointer;
    margin-right: 30px;
    
`
const DeleteButton = styled.button`
    width: 120px;
    height: 50px;
    border: none;
    background: #E1E1E1;
    font-size: 14px;
    color: #000000;
    cursor: pointer;
    
`

export { MainWrapper, Coins, Caption, Wrapper, Picture, AddWrapper, Plus, Name, Desc, EditButton, DeleteButton };

