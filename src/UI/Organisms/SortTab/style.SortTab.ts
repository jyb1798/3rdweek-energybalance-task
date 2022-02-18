import styled from "styled-components";

export const OrderCategoryLists = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 14px;
`


export const ChangeSortButton = styled.li`
  display: list-item;
  margin-left: 20px;
  cursor: pointer;
  color: #999999;
  font-size: 16px;
  text-decoration: none;
  z-index: 20;
  ${({ active }: any) =>
    active &&
    `
      font-weight: 700;
      opacity: 1;
      color: ${({ theme }:any) => theme.fontColor};
    `}
`;
