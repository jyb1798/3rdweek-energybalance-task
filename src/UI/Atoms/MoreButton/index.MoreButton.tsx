import React, { useState, useEffect } from "react";
import * as S from "Atoms/MoreButton/style.MoreButton";
import { JsonDataType } from "Types/index";

interface MoreButtonProps {
  setMoreButtonCount: React.Dispatch<React.SetStateAction<number>>;
  moreButtonCount: number;
  JsonData: JsonDataType[];
}

const MoreButton = ({
  moreButtonCount,
  setMoreButtonCount,
  JsonData,
}: MoreButtonProps) => {
  useEffect(() => {
    setMoreButtonCount(1);
  }, [JsonData]);
  return (
    <S.MoreButtonContainer
      count={moreButtonCount}
      limit={Math.ceil(JsonData.length / 4)}
      onClick={() =>
        setMoreButtonCount((moreButtonCount) => moreButtonCount + 1)
      }
    >
      제품 더보기( {moreButtonCount} / {Math.ceil(JsonData.length / 4)} ){" "}
    </S.MoreButtonContainer>
  );
};

export default MoreButton;
