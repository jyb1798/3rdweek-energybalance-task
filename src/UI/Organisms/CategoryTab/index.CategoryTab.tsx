import React, { useEffect, useState, useRef, forwardRef } from "react";
import * as S from "Organisms/CategoryTab/style.CategoryTab";
import * as T from "Types/index";
import TabList from "Molecules/TabList/index.TabList";
import mockData from "./mockData";

interface CategoryTabProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
}

const HandleCategoryMenu = () => {
  const set = new Set();

  set.add("전체");

  mockData.results.map((item) => {
    item.ingredient.split(",").map((el) => set.add(el));
  });

  return set;
};

const CategoryTab = ({
  selectedCategory,
  setSelectedCategory,
  selectedSort,
  setSelectedSort,
}: CategoryTabProps) => {
  const [category, setCategory] = useState<string[]>();

  useEffect(() => {
    setCategory(Array.from(HandleCategoryMenu()) as string[]);
  }, []);

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
        component={"category"}
      />
    </S.Container>
  );
};

export default CategoryTab;
