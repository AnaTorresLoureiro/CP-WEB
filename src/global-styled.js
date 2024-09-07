import { createGlobalStyle } from "styled-components"

const GlobalStyled = createGlobalStyle`

   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow-x: hidden;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   }

   #root{
      width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
   }
`
export default GlobalStyled