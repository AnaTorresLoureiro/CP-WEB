import styled from "styled-components";

export const NavMenu = styled.nav`
    width: 100%;
    min-height: 10vh;
    background-color: #586875;
    display: flex;
    justify-content: space-between;
    align-content: center;

    img{
        width: 100px;
        height: 45px;
        margin: 15px;
    }

    .menu{
        margin-top: 25px;
    }

    a{
        text-decoration: none;
        color: #e3e5d7;
        font-size: 15px;
        font-weight: 800;
        margin-right: 30px;
    }

    a:hover{
        color: #a5c8ca;
    }

`

export const FooterRodape = styled.footer`
    width: 100%;
    min-height: 5vh;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: #586875;

   p{
    color: #e3e5d7;
   }
`

export const MainGeral = styled.main`
    flex-grow: 1;
    width: 100%;
    padding: 20px;
    background-color: #f6eddc;

   img{
    width: 95%;
    margin-left: 30px;
   }
   h1{
    text-align: center;
    margin-top: 50px;
    color: #586875;
   }
`

