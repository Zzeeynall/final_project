import styled from "styled-components";

const Caption = styled.h1`
    font-weight: 300;
    font-size: 50px;
`
const Label = styled.label`
    font-weight: 500;
    font-size: 14px;
`
const Input = styled.input`
    width: 375px;
    height: 44px;
    margin: 0 30px 20px 0;
    font-size: 20px;
    border: 1px solid black;
`
const WrapperFirstLine = styled.div`
    display: flex;
    width: 100%;
`

const WrapperLastLine = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
`

const Area = styled.textarea`
    width: 375px;
    height: 130px;
    font-size: 20px;
    margin: 0 30px 20px 0;
    border: 1px solid black;
    resize: none;
`

const WrapperForButtons = styled.div`
    text-align: center;
`

const SaveButton = styled.button`
    width: 120px;
    height: 50px;
    border: none;
    background: #833AE0;
    font-size: 14px;
    color: #FFFFFF;
    cursor: pointer;
    margin: 0 30px 20px 86px;
    
`
const CancelButton = styled.button`
    width: 120px;
    height: 50px;
    border: none;
    background: #E1E1E1;
    font-size: 14px;
    color: #000000;
    cursor: pointer;
    
`

export { Caption, Label, Input, WrapperFirstLine, Area, WrapperLastLine, SaveButton, CancelButton, WrapperForButtons };