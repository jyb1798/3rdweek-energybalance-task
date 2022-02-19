import React, { useEffect, useState } from "react";
import { JsonDataType } from "src/Types";
import * as S from "Organisms/ProductContainer/style.ProductContainer";
import ProductCard from "Molecules/ProductCard/index.ProductCard";

type ProductContainerProps = {
  filteredData: JsonDataType[];
  moreButtonCount: number;
};
const ProductContainer = ({
  filteredData,
  moreButtonCount,
}: ProductContainerProps): JSX.Element => {
  const [ProductList, setProductList] = useState<JsonDataType[]>();
  const [tmpFilterdData, setTmpFilterdData] = useState<JsonDataType[]>([
    ...filteredData,
  ]);

  useEffect(() => {
    if (moreButtonCount === 1) {
      const newState = [...filteredData.slice(0, 4)];
      setProductList(newState);
      setTmpFilterdData([...tmpFilterdData]);
      return;
    }
    if (ProductList) {
      if (moreButtonCount === 2) {
        tmpFilterdData.splice(0, 4);
      }
      const newState = tmpFilterdData.splice(0, 4);
      setProductList([...ProductList, ...newState]);
      setTmpFilterdData([...tmpFilterdData]);
      return;
    }
  }, [moreButtonCount]);

  useEffect(() => {
    setProductList([...filteredData.slice(0, 4)]);
    setTmpFilterdData([...filteredData]);
  }, [filteredData]);

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
