import styled from "styled-components";

export const ProductCardDiv = styled.div`
  display: flex;
  flex: 0 0 100%;
  max-width: 100%;

  height: 135px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 14px;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
  @media all and (min-width: 768px) {
    height: 411px;
    flex-direction: column;
  }
`;
export const ProductImg = styled.img`
  height: 135px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  @media all and (min-width: 768px) {
    height: 255px;
    max-width: 100%;
    border-bottom-left-radius: 0%;
    border-top-right-radius: 10px;
  }
`;

export const ProductInfo = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 15px 13px 0px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media all and (min-width: 768px) {
    padding: 19px 22px 0px 14px;
    height: 156px;
    max-width: 285px;
  }
`;
export const ProductName = styled.span`
  display: inline-block;
  width: 80%;
  font-size: 15px;
  position: absolute;
  @media all and (min-width: 768px) {
    font-weight: 700;
  }
`;
export const ProductBrand = styled.span`
  font-size: 14px;
  color: #555555;
  position: absolute;
  top: 67px;
  @media all and (min-width: 768px) {
    top: 73px;
  }
`;
export const ProductPrice = styled.span`
  font-weight: bold;
  color: #555555;
  position: absolute;
  top: 100px;
  @media all and (min-width: 768px) {
    top: 108px;
  }
`;
