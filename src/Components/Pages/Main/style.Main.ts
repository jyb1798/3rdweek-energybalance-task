import { SCREEN_MD_MAX } from "Const/index";
import styled from "styled-components";

export const Container = styled.div`
  width: 60vw;
  margin: auto;

  @media all and (max-width: ${SCREEN_MD_MAX}px) {
    width: 100vw;
    margin: auto;
  }
`;
