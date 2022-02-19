import React from "react";
import * as S from "./style.RecommendWords";
import * as T from "src/Types/";
import { Category } from "Const/index";
const stringSimilarity = require("string-similarity");

interface RecommendWordProps {
  searchInput: string;
  JsonData: T.JsonDataType[];
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const RecommendWords = ({
  searchInput,
  JsonData,
  setSearchInput,
  setSelectedCategory,
}: RecommendWordProps): JSX.Element => {
  const stringSimilarityList: { name: string; similarity: number }[] = [];
  JsonData.forEach((ele) =>
    stringSimilarityList.push({
      name: ele.productName,
      similarity: stringSimilarity.compareTwoStrings(
        ele.productName,
        searchInput
      ),
    })
  );
  stringSimilarityList.sort((a, b) => b.similarity - a.similarity);

  return (
    <>
      <S.RecommendWord>
        검색된 결과가 없습니다. 이런 검색어는 어떠세요?
      </S.RecommendWord>
      <S.ButtonBox>
        {stringSimilarityList.slice(0, 4).map((ele, idx) => (
          <S.RecommendButton
            onClick={() => {
              setSearchInput(ele.name);
              setSelectedCategory(Category.all);
            }}
            key={idx}
          >
            {ele.name.replace(/\n/g, " ").substring(0, 11)}
          </S.RecommendButton>
        ))}
      </S.ButtonBox>
    </>
  );
};

export default RecommendWords;
