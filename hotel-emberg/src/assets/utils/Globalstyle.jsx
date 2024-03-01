import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Work Sans';
}
ul{
  list-style: none;
}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  a{
    color: black;
  }
`;

export default GlobalStyle;
