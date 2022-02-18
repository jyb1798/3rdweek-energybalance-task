import React from "react";
import styled from "styled-components";
import SearchHintUnit from "Atoms/SearchHintUnit/index.SearchHintUnit";
import { JsonDataType } from "src/Types/";

interface HintListProps {
    dataList: JsonDataType[]
    setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

const HintList = ({dataList, setSearchInput}: HintListProps):JSX.Element => {
    return(
        <UL>
            {dataList.map((ele, index) => 
                <SearchHintUnit data= {ele} setSearchInput={setSearchInput} key={index}/> 
            )}
        </UL>
    )
}


const UL = styled.ul`
    list-style: none;
    box-sizing: border-box;
`

export default HintList;