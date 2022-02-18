import React from "react";
import { JsonDataType } from "src/Types";
import * as S from "Molecules/style.ProductCard";

type ProductCardProps = {
  ProductData: JsonDataType;
};
const ProductCard = (props: ProductCardProps) => {
  return (
    <>
      <S.ProductCardDiv>
        <S.ProductImg
          src={props.ProductData.url}
          alt={props.ProductData.productName}
        />
        <S.ProductInfo>
          <S.ProductName>{props.ProductData.productName}</S.ProductName>
          <S.ProductBrand>{props.ProductData.brand}</S.ProductBrand>
          <S.ProductPrice>
            {(props.ProductData.price * 1000)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            원
          </S.ProductPrice>
        </S.ProductInfo>
      </S.ProductCardDiv>
    </>
  );
};

export default ProductCard;
