import { SCREEN_MD_MIN } from "Const/index";
import styled from "styled-components";

export const SearchResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  margin-bottom: 44px;

  @media all and (min-width: ${SCREEN_MD_MIN}px) {
    margin-bottom: 115px;
  }
`;

export const Info = styled.div`
padding: 10px 14px;
text-align: center;
font-weight: 600;
`
