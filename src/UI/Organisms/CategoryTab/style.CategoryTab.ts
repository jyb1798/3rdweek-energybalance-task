import styled from "styled-components";

export const Container = styled.div`
  background: #f5f5f7;
  height: 21px;
  width: 100%;
  padding: 16px 0;
  overflow-x: overlay;
  margin: 20px 0 0 0;

  &::-webkit-scrollbar {
    width: 0;
    padding: 0;
  }

  @media all and (max-width: 768px) {
    background: none;
    padding: 16px 28px;
  }
`;
