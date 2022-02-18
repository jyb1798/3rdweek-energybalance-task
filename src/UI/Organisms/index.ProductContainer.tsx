import React from "react";
import { JsonDataType } from "src/Types";
import * as S from "Organisms/style.ProductContainer";
import ProductCard from "Molecules/index.ProductCard";
const ProductDataList: JsonDataType[] = [
  {
    id: 1,
    productName: "6년근고려홍삼정스틱이다다다다",
    ingredient: "홍삼",
    url: "https://media.vlpt.us/images/yeonbee/post/20912547-2398-45fc-979e-d29107458381/noimage.png",
    brand: "고려홍삼",
    price: 40.0,
    searchAmount: 6632780,
    salesAmount: 649,
  },
  {
    id: 2,
    productName: "마그네슘정",
    ingredient: "마그네슘",
    url: "https://media.vlpt.us/images/yeonbee/post/20912547-2398-45fc-979e-d29107458381/noimage.png",
    brand: "SK 케미칼",
    price: 34.0,
    searchAmount: 1032220,
    salesAmount: 101,
  },
  {
    id: 3,
    productName: "비타민D 1000IU",
    ingredient: "비타민D",
    url: "https://media.vlpt.us/images/yeonbee/post/20912547-2398-45fc-979e-d29107458381/noimage.png",
    brand: "SK 케미칼",
    price: 40.3,
    searchAmount: 1062880,
    salesAmount: 104,
  },
  {
    id: 4,
    productName: "비타민D 1000IU",
    ingredient: "비타민D",
    url: "https://media.vlpt.us/images/yeonbee/post/20912547-2398-45fc-979e-d29107458381/noimage.png",
    brand: "SK 케미칼",
    price: 40.3,
    searchAmount: 1062880,
    salesAmount: 104,
  },
  {
    id: 5,
    productName: "비타민D 1000IU",
    ingredient: "비타민D",
    url: "https://media.vlpt.us/images/yeonbee/post/20912547-2398-45fc-979e-d29107458381/noimage.png",
    brand: "SK 케미칼",
    price: 40.3,
    searchAmount: 1062880,
    salesAmount: 104,
  },
];

const ProductContainer = (): JSX.Element => {
  return (
    <>
      <S.ContainerDiv>
        {ProductDataList.map((item, idx) => (
          <S.ProductContainerDiv key={idx}>
            <ProductCard ProductData={item} />
          </S.ProductContainerDiv>
        ))}
      </S.ContainerDiv>
    </>
  );
};
// type ProductContainerProps = {
//   JsonData: JsonDataType[];
// };
// const ProductContainer = ({ JsonData }: ProductContainerProps): JSX.Element => {
//   return (
//     <>
//       <S.ContainerDiv>
//         {JsonData.map((item, idx) => (
//           <S.ProductContainerDiv key={idx}>
//             <ProductContent ProductData={item} />
//           </S.ProductContainerDiv>
//         ))}
//       </S.ContainerDiv>
//     </>
//   );
// };

export default ProductContainer;
