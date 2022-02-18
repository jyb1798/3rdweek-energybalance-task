import React from "react";
import TabItem from "Atoms/TabItem/index.TabItem";
import * as S from "Molecules/TabList/style.TabList";

interface TabListProps {
  tabs: string[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const TabList = ({
  tabs,
  selectedCategory,
  setSelectedCategory,
}: TabListProps): JSX.Element => {
  return (
    <S.Ul>
      {tabs?.map((item: string, index: number) => {
        return (
          <TabItem
            item={item}
            index={index}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      })}
    </S.Ul>
  );
};

export default TabList;
