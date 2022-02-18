import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media all and (min-width: 769px) and (max-width: 1022px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 80px;
    grid-column-gap: 5%;
  }
  @media all and (min-width: 1023px) {
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
`;
