import MoreButton from "Atoms/MoreButton/index.MoreButton";
import ProductContainer from "Organisms/ProductContainer/index.ProductContainer";
import RecommendWords from "./recommendWords";
import * as S from "Templates/SearchResult/style.SeacthResult";
import * as T from "Types/index";
import * as C from "Const/index";
import React, { useEffect, useState } from "react";
import CategoryTab from "Organisms/CategoryTab/index.CategoryTab";
import SortTab from "Organisms/SortTab/index.SortTab";

type SearchBarProps = {
  JsonData: T.JsonDataType[];
  searchInput: string;
};

const SearchResult = ({
  JsonData,
  searchInput,
}: SearchBarProps): JSX.Element => {
  const [moreButtonCount, setMoreButtonCount] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    C.Category.all
    );
  const [selectedSort, setSelectedSort] = useState<string>(
    C.sortMenu.highPopularity
  );
  const [filteredData, setFilteredData] = useState<T.JsonDataType[]>([]);

  useEffect(() => {
    selectedCategory === C.Category.all
      ? setFilteredData(JsonData)
      : setFilteredData([
          ...JsonData.filter((el) => el.ingredient === selectedCategory),
        ]);
  }, [selectedCategory, JsonData]);

  useEffect(() => {
    const newState = [...filteredData];
    selectedSort === C.sortMenu.highPopularity
      ? newState.sort((a, b) => b.searchAmount - a.searchAmount)
      : selectedSort === C.sortMenu.highPrice
      ? newState.sort((a, b) => b.price - a.price)
      : newState.sort((a, b) => a.price - b.price);
    setFilteredData(newState);
  }, [selectedSort]);

  useEffect(() => {
    const newState = [
      ...JsonData.filter((el) => el.productName.indexOf(searchInput) !== -1),
    ];
    selectedCategory === C.Category.all
      ? setFilteredData(newState)
      : setFilteredData(newState.filter((el) => el.ingredient === selectedCategory));
  },[searchInput]);

  return (
    <>
      <CategoryTab
        JsonData={JsonData}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SortTab
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {filteredData.length > 0 ? (
        <S.SearchResultDiv>
          <S.ContainerWrapper>
            <>
              <ProductContainer
                filteredData={filteredData}
                moreButtonCount={moreButtonCount}
              />
            </>
          </S.ContainerWrapper>
          <MoreButton
            filteredData={filteredData}
            moreButtonCount={moreButtonCount}
            setMoreButtonCount={setMoreButtonCount}
          />
        </S.SearchResultDiv>
      ) : (
        <RecommendWords />
      )}
    </>
  );
};

export default SearchResult;
