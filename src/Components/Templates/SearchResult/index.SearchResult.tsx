import MoreButton from "Atoms/MoreButton/index.MoreButton";
import ProductContainer from "Organisms/ProductContainer/index.ProductContainer";
import * as S from "Templates/SearchResult/style.SeacthResult";
import { JsonDataType } from "Types/index";
import React, { useState } from "react";

type SearchBarProps = {
  JsonData: JsonDataType[];
};
const SearchResult = ({ JsonData }: SearchBarProps): JSX.Element => {
  const [moreButtonCount, setMoreButtonCount] = useState<number>(1);
  return (
    <>
      {JsonData.length > 1 ? (
        <S.SearchResultDiv>
          <S.ContainerWrapper>
            <>
              <ProductContainer
                JsonData={JsonData}
                moreButtonCount={moreButtonCount}
              />
            </>
          </S.ContainerWrapper>
          <MoreButton
            dataLength={JsonData.length}
            moreButtonCount={moreButtonCount}
            setMoreButtonCount={setMoreButtonCount}
          />
        </S.SearchResultDiv>
      ) : (
        <div>로딩중</div>
      )}
    </>
  );
};

export default SearchResult;
