import MoreButton from "Atoms/MoreButton/index.MoreButton";
import ProductContainer from "Organisms/ProductContainer/index.ProductContainer";
import RecommendWords from "./recommendWords";
import * as S from "Templates/SearchResult/style.SeacthResult";
import * as T from "Types/index";
import React, { useEffect, useState } from "react";
import CategoryTab from 'Organisms/CategoryTab/index.CategoryTab';
import SortTab from 'Organisms/SortTab/index.SortTab';

type SearchBarProps = {
  JsonData: T.JsonDataType[];
};

enum Category{
  all = "전체"
}

const SearchResult = ({ JsonData }: SearchBarProps): JSX.Element => {
  const [moreButtonCount, setMoreButtonCount] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [selectedSort, setSelectedSort] = useState<string>("인기순");
  const [filteredData, setFilteredData] = useState<T.JsonDataType[]>([]);

  useEffect(() => {
    selectedCategory === Category.all
      ? setFilteredData(JsonData)
      : setFilteredData([
          ...JsonData.filter((el) => el.ingredient === selectedCategory),
        ]);
  }, [selectedCategory, JsonData]);

  useEffect(() => {

    const newState= [...filteredData]
    selectedSort === T.sortMenu.highPopularity
      ? newState.sort((a, b) => b.searchAmount - a.searchAmount)
      : selectedSort === T.sortMenu.highPrice
      ? newState.sort((a, b) => b.price - a.price)
      : newState.sort((a, b) => a.price - b.price)
      setFilteredData(newState)
  }, [selectedSort]);

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
