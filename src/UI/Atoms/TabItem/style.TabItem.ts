import styled from "styled-components";
import * as C from "Const/index";
import {
  SCREEN_MD_MAX,
  SCREEN_LG_MAX,
  SCREEN_MD_MIN,
  SCREEN_LG_MIN,
} from "Const/index";
export const Li = styled.li`
  min-width: fit-content;
  padding: 0;
  cursor: pointer;
`;

export const Button = styled.button<{
  itemName: string;
  selectedCategory: string;
  selectedSort: string;
  component: string;
}>`
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  color: ${(props) =>
    props.itemName === props.selectedCategory ||
    props.itemName === props.selectedSort
      ? "#f39519"
      : "#333"};
  font-weight: ${(props) =>
    props.itemName === props.selectedCategory ||
    props.itemName === props.selectedSort
      ? "600"
      : "400"};
  @media all and (max-width: ${SCREEN_MD_MIN}px) {
    border-bottom: ${(props) =>
      props.component !== C.Category.category
        ? null
        : props.itemName === props.selectedCategory
        ? "2px solid #f39519"
        : "1.5px solid #dae4e6"};
  }
`;
