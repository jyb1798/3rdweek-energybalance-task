import React from 'react';
import * as S from 'Atoms/TabItem/style.TabItem'

interface TabItemProps {
  item:string,
  index:number
}

const TabItem = ({item,index}:TabItemProps) :JSX.Element  => { 
  return <S.Li key={index}>{item}</S.Li>
}

export default TabItem;