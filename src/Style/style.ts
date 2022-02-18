import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
  box-sizing: border-box;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
}

ul{
    list-style: none;
    padding:0; 
    margin:0
}

button{
  background: none;
  cursor: pointer;
  outline: none;
  border: none;
}
`;
