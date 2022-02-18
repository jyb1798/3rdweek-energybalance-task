import styled from "styled-components";
import {
  SCREEN_MD_MAX,
  SCREEN_MD_MIN,
  SCREEN_LG_MIN,
  SCREEN_LG_MAX,
} from "Const/index";

export const ContainerDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media all and (min-width: ${SCREEN_MD_MIN}px) and (max-width: ${SCREEN_LG_MAX}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 80px;
    grid-column-gap: 5%;
  }
  @media all and (min-width: ${SCREEN_LG_MIN}px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 80px;
    grid-column-gap: 2%;
    width: 100%;
  }
`;
export const ProductContainerDiv = styled.div`
  display: flex;
  width: inherit;

  @media all and (max-width: ${SCREEN_MD_MAX}px) {
    width: 95%;
    margin: auto;
  }
`;
