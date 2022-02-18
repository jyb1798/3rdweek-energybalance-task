import React, { useEffect, useRef, useState } from "react";
import TabItem from "Atoms/TabItem/index.TabItem";
import * as S from "Molecules/TabList/style.TabList";

interface TabListProps {
  tabs: string[];
}

const TabList = ({ tabs }: TabListProps): JSX.Element => {
  // const [isDrag, setIsDrag] = useState(false);
  // const [X, setX] = useState<number>(0);
  // const tabList = useRef(null);

  // const handleDragStart = (
  //   e: React.MouseEvent<HTMLElement, globalThis.MouseEvent>
  // ) => {
  //   e.preventDefault();
  //   setIsDrag(true);
  //   setX(e.pageX + (tabList.current as HTMLUListElement).scrollLeft);
  // };

  // const handleDragEnd = () => {
  //   setIsDrag(false);
  // };

  // const handleDragMove = (
  //   e: React.MouseEvent<HTMLElement, globalThis.MouseEvent>
  // ) => {
  //   if (isDrag) {
  //     (tabList.current as HTMLUListElement).scrollLeft = X - e.pageX;
  //   }
  // };

  // const handleTouchStart = (e: React.TouchEvent<globalThis.TouchEvent>) => {
  //   e.stopPropagation();
  //   setX(e.changedTouches[0].pageX);
  // };

  // const handleTouchEnd = (e: React.TouchEvent<globalThis.TouchEvent>) => {
  //   e.stopPropagation();
  //   setIsDrag(false);
  // };

  // useEffect(() => {
  //   console.log(tabList);
  // });

  return (
    <S.Ul 
    // onMouseDown={(
    //   e: React.MouseEvent<HTMLElement, globalThis.MouseEvent>
    // ) => {
    //   handleDragStart(e);
    // }}
    
    // onMouseUp={() => {
    //   handleDragEnd();
    // }}
    // onMouseMove={(
    //   e: React.MouseEvent<HTMLElement, globalThis.MouseEvent>
    // ) => {
    //   handleDragMove(e);
    // }}
    // onMouseLeave={() => {
    //   handleDragEnd();
    // }}
    // onTouchStart={(e: React.TouchEvent<globalThis.TouchEvent>) => {
    //   handleTouchStart(e);
    // }}
    // onTouchEnd={(e: React.TouchEvent<globalThis.TouchEvent>) => {
    //   handleTouchEnd(e);
    // }}
    // ref={tabList}
    >
      {tabs?.map((item: string, index: number) => {
        return <TabItem item={item} index={index} />;
      })}
    </S.Ul>
  );
};

export default TabList;
