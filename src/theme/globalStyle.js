import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #283334;
    margin: 0;
    padding: 0;
  
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
