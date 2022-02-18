import styled from "styled-components";

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
  @media all and (max-width: 768px) {
    border-bottom: ${(props) =>
      props.component !== "category" ? null : 
      props.itemName === props.selectedCategory
        ? "2px solid #f39519"
        : "1.5px solid #dae4e6"};
  }
`;
