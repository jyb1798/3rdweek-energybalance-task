import styled from "styled-components";

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
  pointer-events: ${(props) => (props.count === props.limit ? "none" : "auto")};
  @media all and (min-width: 1023px) {
    width: 80%;
    max-width: 540px;
    margin: auto 0;
  }

  @media all and (max-width: 768px) {
    width: 95%;
    margin: auto;
    margin-bottom: 20px;
  }
`;
