import React, { useEffect, useState } from "react";
import { JsonDataType } from "src/Types";
import * as S from "Organisms/ProductContainer/style.ProductContainer";
import ProductCard from "Molecules/ProductCard/index.ProductCard";

type ProductContainerProps = {
  JsonData: JsonDataType[];
  moreButtonCount: number;
};
const ProductContainer = ({
  JsonData,
  moreButtonCount,
}: ProductContainerProps): JSX.Element => {
  const [ProductList, setProductList] = useState<JsonDataType[]>();
  const [tmpJsonData, setTmpJsonData] = useState<JsonDataType[]>([...JsonData]);

  useEffect(() => {
    if (moreButtonCount === 1) {
      const newState = [...JsonData.slice(0, 4)];
      setProductList(newState);
      setTmpJsonData([...tmpJsonData]);
      return;
    }
    if (ProductList) {
      if (moreButtonCount === 2) {
        tmpJsonData.splice(0, 4);
      }
      const newState = tmpJsonData.splice(0, 4);
      setProductList([...ProductList, ...newState]);
      setTmpJsonData([...tmpJsonData]);
      return;
    }
  }, [moreButtonCount]);

  useEffect(() => {
    setProductList([...JsonData.slice(0, 4)]);
    setTmpJsonData([...JsonData]);
  }, [JsonData]);

  return (
    <>
      <S.ContainerDiv>
        {ProductList && (
          <>
            {ProductList.map((item, idx) => (
              <S.ProductContainerDiv key={idx}>
                <ProductCard ProductData={item} />
              </S.ProductContainerDiv>
            ))}
          </>
        )}
      </S.ContainerDiv>
    </>
  );
};

export default ProductContainer;
