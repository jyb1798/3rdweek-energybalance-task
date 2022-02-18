import React, { useEffect, useState } from "react";
import Nav from "Templates/Nav/index.Nav";
import SearchBar from "Templates/SearchBar/index.SearchBar";
import styled from "styled-components";
import { GlobalStyle } from "Style/style";
import { JsonDataType } from "Types/index";

const Main = () => {
  const [JsonData, setJsonData] = useState<JsonDataType[]>([]);
  const [searchInput , setSearchInput] = useState<string>('');
  useEffect(() => {
    (async () => {
      await fetch("http://localhost:4000/results")
        .then((res) => res.json())
        .then((res) => setJsonData(res));
    })();
  }, []);
  return (
    <Container>
      <GlobalStyle />
      <Nav />
      <SearchBar JsonData={JsonData} searchInput = {searchInput} setSearchInput = {setSearchInput} />
    </Container>
  );
};

const Container = styled.div`

  width: 60vw;
  margin:auto;
  
  @media all and (max-width: 768px) {
    width: 100vw;
    margin: auto;
  }
`;

export default Main;