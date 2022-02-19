import { SCREEN_MD_MAX } from "Const/index";
import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
`;

export const LogoContainer = styled.div``;

export const IconContainer = styled.div`
  display: none;

  @media all and (max-width: ${SCREEN_MD_MAX}px) {
    display: block;
    margin-left: 10px;
    margin-right: 10px;
    padding: 4px 20px;
  }
`;

export const IconList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: ${SCREEN_MD_MAX}px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
