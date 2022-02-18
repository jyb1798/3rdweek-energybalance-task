import React, { useEffect, useState, useRef, memo } from "react";
import * as S from "Organisms/CategoryTab/style.CategoryTab";
import * as T from "Types/index";
import * as C from 'Const/index'
import TabList from "Molecules/TabList/index.TabList";

interface CategoryTabProps {
  JsonData: T.JsonDataType[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryTab = ({
  selectedCategory,
  setSelectedCategory,
  selectedSort,
  setSelectedSort,
  JsonData,
}: CategoryTabProps) => {
  const [category, setCategory] = useState<string[]>();

  const HandleCategoryMenu = () => {
    const set = new Set();

    set.add(C.Category.all);
    JsonData.map((item) => {
      item.ingredient.split(",").map((el) => set.add(el));
    });
    return set;
  };

  useEffect(() => {
    setCategory(Array.from(HandleCategoryMenu()) as string[]);
  }, [JsonData]);

  const tabContainer = useRef<any>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState<number>(0);

  const onDragStart = (e: T.MouseEventType) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + tabContainer.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: T.MouseEventType) => {
    if (isDrag) {
      tabContainer.current.scrollLeft = startX - e.pageX;
    }
  };

  return (
    <S.OverFlowContainer>
      <S.Container
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onMouseMove={onDragMove}
        onMouseLeave={onDragEnd}
        ref={tabContainer}
      >
        <TabList
          tabs={category as string[]}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          component={C.Category.category}
        />
      </S.Container>
    </S.OverFlowContainer>
  );
};

export default memo(CategoryTab);
