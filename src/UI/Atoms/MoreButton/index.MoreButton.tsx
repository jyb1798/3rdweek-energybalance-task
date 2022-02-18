import React, { useState, useEffect } from "react";
import * as S from "Atoms/MoreButton/style.MoreButton";
import { JsonDataType } from "Types/index";

interface MoreButtonProps {
  setMoreButtonCount: React.Dispatch<React.SetStateAction<number>>;
  moreButtonCount: number;
  filteredData: JsonDataType[];
}

const MoreButton = ({
  moreButtonCount,
  setMoreButtonCount,
  filteredData,
}: MoreButtonProps) => {
  useEffect(() => {
    setMoreButtonCount(1);
  }, [filteredData]);
  return (
    <S.MoreButtonContainer
      disabled={moreButtonCount === Math.ceil(filteredData.length / 4)}
      count={moreButtonCount}
      limit={Math.ceil(filteredData.length / 4)}
      onClick={() =>
        setMoreButtonCount((moreButtonCount) => moreButtonCount + 1)
      }
    >
      제품 더보기( {moreButtonCount} / {Math.ceil(filteredData.length / 4)} ){" "}
    </S.MoreButtonContainer>
  );
};

export default MoreButton;
