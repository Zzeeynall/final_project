import styled from "styled-components";

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        font-weight: 300;
        font-size: 20px;
        color: #000000;
    }
`
const Caption = styled.h1`
    font-weight: 300;
    font-size: 50px;
    margin-bottom: 0px;
`
const Nav = styled.div`
    font-weight: 500;
    font-size: 10px;
    margin-bottom: 15px;
    color: #B1ABAB;
    a{
        color: #B1ABAB;
    }
`

export { Header, Caption, Nav };