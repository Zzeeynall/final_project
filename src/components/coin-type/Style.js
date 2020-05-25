import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 60px;
    @media(max-width: 960px){
        justify-content: center;
    }
    div{
        width: 33.3333%;
        @media(max-width: 960px){
            width: 100%;
            max-width: 600px;
        }
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
    a{
        text-decoration: none;
        color: #000000;
    }
`

const Picture = styled.img`
    width: 214px;
`

export { Wrapper, Picture, TypeName, ShowAll };

