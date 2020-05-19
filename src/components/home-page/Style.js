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
`

export { Header, Caption };