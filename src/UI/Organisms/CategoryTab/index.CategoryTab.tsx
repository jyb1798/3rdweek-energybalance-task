import React, { useEffect, useState } from "react";
import * as S from "Organisms/CategoryTab/style.CategoryTab"
import TabList from "Molecules/TabList/index.TabList";
import mockData from "./mockData"

const HandleCategoryMenu = () =>{
  
  const set = new Set();

  mockData.results.map(item => {
    item.ingredient.split(",").map(el => set.add(el));
  })

  return set;
}

const CategoryTab = () => {

  const [category,setCategory] = useState<string[]>();

  useEffect(()=>{
    setCategory(Array.from(HandleCategoryMenu()) as string[]);
  },[])

  return (
    <S.Container>
      <TabList tabs={category as string[]}/>
    </S.Container>
  );
};

export default CategoryTab;
