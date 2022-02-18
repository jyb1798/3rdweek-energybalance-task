import styled from "styled-components";
import { SCREEN_MD_MAX } from "Const/index";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 14px;

  @media all and (max-width: ${SCREEN_MD_MAX}px) {
    margin-right: 6px;
  }
`;
