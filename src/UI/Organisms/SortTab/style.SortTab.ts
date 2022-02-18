import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 14px;

  @media all and (max-width: 768px) {
    margin-right: 6px;
  }
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