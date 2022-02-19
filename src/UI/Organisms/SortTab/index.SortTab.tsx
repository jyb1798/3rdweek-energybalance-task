import React,{memo} from "react";
import * as S from "Organisms/SortTab/style.SortTab";
import * as T from "Types/index"
import * as C from 'Const/index'
import TabList from "Molecules/TabList/index.TabList";

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
    <S.Container>
      <TabList
        tabs={Array.from(Object.values(C.sortMenu))}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        component={C.Category.sort}
      />
    </S.Container>
  );
};

export default memo(SortTab);
