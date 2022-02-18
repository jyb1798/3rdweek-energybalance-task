import React, { useState, useEffect } from "react";
import * as S from "Atoms/MoreButton/style.MoreButton";
import { JsonDataType } from "Types/index";

interface MoreButtonProps {
  setMoreButtonCount: React.Dispatch<React.SetStateAction<number>>;
  moreButtonCount: number;
  filterdData: JsonDataType[];
}

const MoreButton = ({
  moreButtonCount,
  setMoreButtonCount,
  filterdData,
}: MoreButtonProps) => {
  useEffect(() => {
    setMoreButtonCount(1);
  }, [filterdData]);
  return (
    <S.MoreButtonContainer
      count={moreButtonCount}
      limit={Math.ceil(filterdData.length / 4)}
      onClick={() =>
        setMoreButtonCount((moreButtonCount) => moreButtonCount + 1)
      }
    >
      제품 더보기( {moreButtonCount} / {Math.ceil(filterdData.length / 4)} ){" "}
    </S.MoreButtonContainer>
  );
};

export default MoreButton;
