import React, { useState } from "react";
import * as S from "./style.SortTab"
import TabList from "Molecules/TabList/index.TabList";

const sortMenu = ["인기순","낮은 가격순","높은 가격순"]

const SortTab = ():JSX.Element => {
  const [currentSort, setCurrentSort] = useState('id');

  
  const checkActive = (sort) => {
    return sort === currentSort;
  };

  const moveToNewSort = event => {
    setCurrentSort();
  };
    
  return (
    <>
          <S.OrderCategoryLists onClick={moveToNewSort}>
            <S.ChangeSortButton>
              <TabList tabs={sortMenu} onClick={checkActive}/>
            </S.ChangeSortButton>
            <S.ChangeSortButton>
               <TabList tabs={sortMenu[1]} onClick={checkActive}/>
            </S.ChangeSortButton>
            <S.ChangeSortButton >
              <TabList tabs={sortMenu[1]} onClick={checkActive} />
            </S.ChangeSortButton>
          </S.OrderCategoryLists>
    </>
  );
};

export default SortTab;
