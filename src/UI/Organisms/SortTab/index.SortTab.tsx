import React from "react";
import * as S from "./style.SortTab";
import TabList from "Molecules/TabList/index.TabList";

const sortMenu = ["인기순", "낮은 가격순", "높은 가격순"];

interface SortTabProps {
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SortTab = ({
  selectedSort,
  setSelectedSort,
  selectedCategory,
  setSelectedCategory
}: SortTabProps): JSX.Element => {

  return (
    <S.OrderCategoryLists>
      <TabList
        tabs={sortMenu}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        component={"sort"}
      />
    </S.OrderCategoryLists>
  );
};

export default SortTab;
