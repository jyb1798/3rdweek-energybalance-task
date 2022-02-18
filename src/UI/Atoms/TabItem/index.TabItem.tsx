import React, { memo } from "react";
import * as S from "Atoms/TabItem/style.TabItem";

interface TabItemProps {
  item: string;
  selectedCategory: string;
  selectedSort: string;
  component: string;
  handleSelected: (component: string, item: string) => void;
}

const TabItem = ({
  item,
  handleSelected,
  component,
  selectedCategory,
  selectedSort,
}: TabItemProps): JSX.Element => {
  return (
    <S.Li
      onClick={() => {
        handleSelected(component, item);
      }}
    >
      <S.Button
        itemName={item}
        selectedCategory={selectedCategory}
        selectedSort={selectedSort}
        component={component}
      >
        {item}
      </S.Button>
    </S.Li>
  );
};

export default memo(TabItem);
