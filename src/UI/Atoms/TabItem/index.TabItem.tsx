import React from 'react';
import * as S from 'Atoms/TabItem/style.TabItem'

interface TabItemProps {
  item:string,
  index:number,
  selectedCategory:string
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const TabItem = ({item,index,selectedCategory,setSelectedCategory}:TabItemProps) :JSX.Element  => { 
  return <S.Li key={index} categoryName={item} onClick={()=>{setSelectedCategory(item)}}  selectedCategory={selectedCategory}>{item}</S.Li>
}

export default TabItem;