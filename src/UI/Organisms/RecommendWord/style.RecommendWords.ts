import styled from "styled-components";
import { SCREEN_LG_MAX, SCREEN_MD_MIN, SCREEN_LG_MIN } from "Const/index";

export const RecommendWord = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  @media all and (min-width: ${SCREEN_LG_MIN}px) {
    justify-content: center;
  }
`;
export const RecommendButton = styled.button`
  margin: 40px 0px;
  max-width: 100px;
  height: 40px;
  background-color: #f39519;
  border-radius: 10px;
  color: #fff;
  @media all and (min-width: ${SCREEN_MD_MIN}px) and (max-width: ${SCREEN_LG_MAX}px) {
    margin: 40px 5px;
  }
  @media all and (min-width: ${SCREEN_LG_MIN}px) {
    margin: 40px;
  }
`;
