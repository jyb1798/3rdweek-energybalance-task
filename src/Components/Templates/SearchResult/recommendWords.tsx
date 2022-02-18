import React from 'react'
import * as S from "./style.RecommendWords";


const RecommendWords = (): JSX.Element => {
  return (
      <>
        <S.RecommendWord>검색된 결과가 없습니다. 이런 검색어는 어떠세요?</S.RecommendWord>
        <S.ButtonBox>
            <S.RecommendButton>커틀랜드</S.RecommendButton>
            <S.RecommendButton>비슷한거1</S.RecommendButton>
            <S.RecommendButton>비슷한거2</S.RecommendButton>
            <S.RecommendButton>비슷한거3</S.RecommendButton>
        </S.ButtonBox>
    </>
  )
}

export default RecommendWords;