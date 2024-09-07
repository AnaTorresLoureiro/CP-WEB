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

export const SobreMain = styled.main`
    padding: 20px;
    ackground-color: #f6eddc;
  
  h1 {
    text-align: center;
    color: #586875;
    margin-bottom: 30px;
  }

  h2 {
    color: #586875;
    margin-top: 30px;
    border-bottom: 2px solid #586875;
    padding-bottom: 5px;
  }

  p {
    color: #586875;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: justify;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
  }

  li {
    background-color: #e3e5d7;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
    color: #586875;
    font-size: 16px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .highlight-box {
    background-color: #a5c8ca;
    color: #fff;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .highlight-box h2 {
    margin: 0;
    font-size: 20px;
  }

  .highlight-box p {
    font-size: 14px;
  }


`;