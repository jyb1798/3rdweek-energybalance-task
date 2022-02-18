import React from "react";
import * as S from "Atoms/TabItem/style.TabItem";

interface TabItemProps {
  item: string;
  index: number;
  selectedCategory: string;
  selectedSort: string;
  component: string;
  handleSelected: (component: string, item: string) => void;
}

const TabItem = ({
  item,
  index,
  handleSelected,
  component,
  selectedCategory,
  selectedSort
}: TabItemProps): JSX.Element => {
  return (
    <S.Li
      key={index}
      onClick={() => {
        handleSelected(component, item);
      }}
    >
      <S.Button itemName={item} selectedCategory={selectedCategory} selectedSort={selectedSort}>
        {item}
      </S.Button>
    </S.Li>
  );
};

export default TabItem;
