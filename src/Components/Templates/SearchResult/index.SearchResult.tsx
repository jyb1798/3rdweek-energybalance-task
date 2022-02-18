import MoreButton from "Atoms/MoreButton/index.MoreButton";
import ProductContainer from "Organisms/ProductContainer/index.ProductContainer";
import RecommendWords from "./recommendWords";
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
      {JsonData.length > 0 ? (
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
            JsonData={JsonData}
            moreButtonCount={moreButtonCount}
            setMoreButtonCount={setMoreButtonCount}
          />
        </S.SearchResultDiv>
      ) : (
        <RecommendWords />
      )}
    </>
  );
};

export default SearchResult;
