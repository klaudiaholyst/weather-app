import styled, {createGlobalStyle} from 'styled-components';
import BackgroundImage from "./images/kristopher-roller.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: url(${BackgroundImage});
        background-size: cover;
        color:#c5c5c5;
        font-family: 'Yanone Kaffeesatz', sans-serif;
    }
    .App{
        padding: 40px;
    }
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:100%;
`
export const Details = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid #c5c5c542;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.2);
`
export const Detail = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        margin: 5px 0;
    }
`
export const Date = styled.p`
    font-size:1.5rem;
    span{
        font-size: 5rem;
        margin-right: 3rem;
    }
`

export const Location = styled.div`
    text-align: end;
    p:first-child{
        font-size: 2rem;
        margin:0;
    }
    p:last-child{
        font-size: 1rem;
    }
`