import React from 'react';
import TabItem from "Atoms/TabItem/index.TabItem";
import * as S from 'Molecules/TabList/style.TabList'

interface TabListProps {
  tabs: string[]
}

const TabList = ({ tabs }:TabListProps) :JSX.Element => {
  return (
    <S.Ul>
      { tabs?.map((item: string, index: number) => {
        return <TabItem item={item} index={index}/>;
      })}
    </S.Ul>
  );
};

export default TabList;
