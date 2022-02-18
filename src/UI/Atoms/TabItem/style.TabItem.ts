import styled from "styled-components";

export const Li = styled.li`
  min-width: fit-content;
  margin: 0 20px 0 0;
  padding: 0;
  cursor: pointer;
`;

export const Button = styled.button<{
  itemName: string;
  selectedCategory: string;
  selectedSort: string;
}>`
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
`;
