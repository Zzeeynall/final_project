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
    position: relative;
`
const View = styled.div`
    position: absolute;
    top: -15px;
    left: 95px;
    img{
        width: 20px; 
    }
`

const Picture = styled.img`
    width: 120px;
    margin-right: 30px;
    border-radius: 50%;
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

const Label = styled.label`
    font-weight: 500;
    font-size: 14px;
`
const Input = styled.input`
    width: 375px;
    height: 44px;
    margin-right: 30px;
    font-size: 20px;
    border: 1px solid black;
`

const Button = styled.button`
    width: 120px;
    height: 50px;
    border: none;
    background: #833AE0;
    font-size: 14px;
    color: #FFFFFF;
    cursor: pointer;
    
`

export { MainWrapper, Coins, Caption, Wrapper, Picture, AddWrapper, Plus, Name, Desc, EditButton, DeleteButton, 
    Label, Input, View };

