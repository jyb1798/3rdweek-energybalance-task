import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
  box-sizing: border-box;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  overflow-x: hidden;

  &::-webkit-scrollbar {
      border-radius: 6px;
      background: none;
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background-color: #c4c4bd;
    }
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
