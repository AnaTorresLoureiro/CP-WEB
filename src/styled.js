import styled from "styled-components";

export const NavMenu = styled.nav`
    width: 100%;
    min-height: 8vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-content: center;

    a{
        text-decoration: none;
        color: white;
        font-size: 20px;
    }

    span{
        color: white;
        font-size: 1.5em;
    }
`

export const FooterRodape = styled.footer`
    width: 100%;
    min-height: 5vh;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: grey;

    p{
        color: white;
        text-align: center;
        font-size: 20px;
    }
`

export const MainGeral = styled.main`
    flex-grow: 1;
    width: 100%;
    padding: 30px;

    h1{
        text-align: center;
    }
`