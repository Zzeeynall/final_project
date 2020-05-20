import styled from "styled-components";

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
    height: 48px;
    border: none;
    background: #833AE0;
    font-size: 14px;
    color: #FFFFFF;
    cursor: pointer;
    
`

const Some = styled.div`
    display: flex;
    
`
const AdvancedFilter = styled.div`
    margin-top: 10px;
    font-weight: 300;
    font-size: 14px;
    cursor: pointer;
`
const Select = styled.select`
    width: 375px;
    height: 44px;
    margin-right: 30px;
    font-size: 20px;
    margin-bottom: 20px;
    border: 1px solid black;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: right;
    align-items: flex-start;
    margin-top: 25px;
    input{
        width: 155px;
        height: 38px;
        font-size: 20px;
        margin: 0 16px 20px 16px;
        border: 1px solid black;
    }
    span{
        font-weight: 300;
        font-size: 14px;
    }
`

export { Label, Input, Button, AdvancedFilter,  Select, Wrapper, Some };