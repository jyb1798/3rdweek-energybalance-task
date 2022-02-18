import React from "react";
import styled from "styled-components";
import TabList from "Molecules/TabList/index.TabList";

const sortMenu = ["인기순","낮은 가격순","높은 가격순"]

const SortTab = () => {
  return (
    <>
      <TabList tabs={sortMenu} />
    </>
  );
};

export default SortTab;
