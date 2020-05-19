import styled from "styled-components";

const Caption = styled.h1`
    font-weight: 300;
    font-size: 50px;
`

const Form = styled.form`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    label{
        font-weight: 500;
        font-size: 14px;
    }
    input{
        width: 374px;
        height: 55px;
        border: 1px solid black;
        font-size: 20px;
    }
    button{
        display: block;
        width: 120px;
        height: 50px;
        margin: 0 auto;
        margin-top: 30px;
        cursor: pointer;
        border: none;
        background: #833AE0;
        font-size: 14px;
        color: #FFFFFF;
    }
`

export { Caption, Form };