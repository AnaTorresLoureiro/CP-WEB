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
   p{
    color: #586875;
    margin-top: 30px;
    font-size: large;
    font-weight: 600;
   }

   hr{
    border: none;
    width: 130px;
    height: 2px;
    background-color: #586875;
   }

   .container{
    display: flex;
    margin-top: 65px;
    justify-content: space-evenly;
   }
`
export const MainProduto = styled.main`
    flex-grow: 1;
    width: 100%;
    padding: 20px;
    background-color: #f6eddc;

    .pesquisa{
        display: flex;
        justify-content: center;
        align-content: center;
    }

    input{
        width: 350px;
        height: 40px;
        border-radius: 5px 0px 0px 5px;
        border: 1.5px solid #586875;
        background-color: #e3e5d7;
        }

    button{
        width: 50px;
        height: 40px;
        border-radius: 0px 5px 5px 0px;
        background-color: #586875;
        border-style: none;
        cursor: pointer;
    }
    .container{
    display: flex;
    margin-top: 65px;
    justify-content: space-evenly;
   }

   h1{
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: center;
    color: #586875;
   }

   h2{
    margin-top: 15px;
    margin-bottom: 15px;
    color: #586875;
   }

   hr{
    border: none;
    width: 130px;
    height: 2px;
    background-color: #586875;
   }
`;


