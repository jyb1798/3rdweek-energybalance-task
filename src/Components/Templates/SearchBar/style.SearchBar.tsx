import { SCREEN_MD_MAX } from "Const/index";
import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (max-width: ${SCREEN_MD_MAX}px) {
    padding: 0 28px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 35px;
`;
