import styled from "styled-components";
import { SCREEN_MD_MAX, SCREEN_LG_MIN } from "Const/index";
interface MoreButtonStyleType {
  count: number;
  limit: number;
}

export const MoreButtonContainer = styled.button<MoreButtonStyleType>`
  display: inline-block;
  width: 100%;
  height: 55px;
  background-color: #f39519;
  border: none;
  border-radius: 14px;
  color: #ffffff;
  font-size: 16px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:disabled {
    background-color: #f2c58a;
    cursor: not-allowed;
  }
  @media all and (min-width: ${SCREEN_LG_MIN}px) {
    width: 80%;
    max-width: 540px;
    margin: 30px auto;
  }

  @media all and (max-width: ${SCREEN_MD_MAX}px) {
    width: 95%;
    margin: auto;
    margin-bottom: 20px;
  }
`;
