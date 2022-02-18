import React, { useState } from "react";
import * as S from "Atoms/MoreButton/style.MoreButton";

interface MoreButtonProps {
  setMoreButtonCount: React.Dispatch<React.SetStateAction<number>>;
  moreButtonCount: number;
  dataLength: number;
}

const MoreButton = ({
  moreButtonCount,
  setMoreButtonCount,
  dataLength,
}: MoreButtonProps) => {
  console.log(moreButtonCount);
  return (
    <S.MoreButtonContainer
      count={moreButtonCount}
      limit={Math.ceil(dataLength / 4)}
      onClick={() =>
        setMoreButtonCount((moreButtonCount) => moreButtonCount + 1)
      }
    >
      제품 더보기( {moreButtonCount} / {Math.ceil(dataLength / 4)} )
    </S.MoreButtonContainer>
  );
};

export default MoreButton;
