import React, { useEffect, useState, useRef, MouseEvent } from "react";
import * as S from "Organisms/CategoryTab/style.CategoryTab";
import TabList from "Molecules/TabList/index.TabList";
import mockData from "./mockData";

const HandleCategoryMenu = () => {
  const set = new Set();

  mockData.results.map((item) => {
    item.ingredient.split(",").map((el) => set.add(el));
  });

  return set;
};

const CategoryTab = () => {

  const [category, setCategory] = useState<string[]>();

  const tabList = useRef<HTMLUListElement>(null);

  const [isDrag, setIsDrag] = useState(false);
  const [X, setX] = useState<number>(0);

  const onDragStart = (e :MouseEvent<HTMLUListElement>) => {
    e.preventDefault();
    setIsDrag(true);
    setX(e.pageX + (tabList.current as HTMLUListElement).scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e :MouseEvent<HTMLUListElement>) => {
    if (isDrag && tabList) {
      (tabList.current as HTMLUListElement).scrollLeft = X - e.pageX;
    }
  };

  useEffect(() => {
    setCategory(Array.from(HandleCategoryMenu()) as string[]);
  }, []);

  return (
    <S.Container>
      <TabList
        onMouseDown={(e :MouseEvent) => 
          onDragStart(e);
        }

        onMouseUp={() => {
          onDragEnd();
        }}

        onMouseMove={(e :MouseEvent) => {
          onDragMove(e);
        }}

        onMouseLeave={() => {
          onDragEnd();
        }}

        ref={tabList}
        tabs={category as string[]}

      />
    </S.Container>
  );
};

export default CategoryTab;
