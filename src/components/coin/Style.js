import styled from "styled-components";

const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 40px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 45%;
    margin-bottom: 25px;
    & > a:first-child{
        margin-right: 30px;
    }
`

const TypeName = styled.h2`
    font-weight: 500;
    font-size: 28px;
`

const ShowAll = styled.div`
    font-weight: 300;
    font-size: 14px;
    cursor: pointer;
`

const Picture = styled.img`
    width: 120px;
`
const Name = styled.div`
    font-weight: bold;
    font-size: 16px;
    color: #833AE0;
`

const Desc = styled.p`
    font-size: 12px;
`

const Pagination = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    li{
        padding: 10px;
        background-color: #833AE0;
        margin: 10px;
    }
    a{
        text-decoration: none;
        color: #FFFFFF;
    }
`

export { MainWrapper, Wrapper, Picture, TypeName, ShowAll, Name, Desc, Pagination };

