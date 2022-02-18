import React from "react";
import TabItem from "Atoms/TabItem/index.TabItem";
import * as S from "Molecules/TabList/style.TabList";

interface TabListProps {
  tabs: string[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedSort:string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
  component:string;
}


const TabList = ({
  tabs,
  selectedCategory,
  setSelectedCategory,
  selectedSort,
  setSelectedSort,
  component
}: TabListProps): JSX.Element => {

  const handleSelected = (component:string,item:string):void => {
    component === 'category' ? setSelectedCategory(item) : setSelectedSort(item);
  }

  return (
    <S.Ul>
      {tabs?.map((item: string, index: number) => {
        return (
          <TabItem
            item={item}
            selectedCategory={selectedCategory}
            selectedSort={selectedSort}
            key={index}
            handleSelected={handleSelected}
            component={component}
          />
        );
      })}
    </S.Ul>
  );
};

export default TabList;
