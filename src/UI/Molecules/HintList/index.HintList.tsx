import React from "react";
import styled from "styled-components";
import SearchHintUnit from "Atoms/SearchHintUnit/index.SearchHintUnit";
import { JsonDataType } from "src/Types/";

const HintList = ({dataList}: {dataList: JsonDataType[]}):JSX.Element => {
    return(
        <UL>
            {dataList.map((ele, index) => 
                <SearchHintUnit data= {ele} key={index}/>
            )}
        </UL>
    )
}


const UL = styled.ul`
    list-style: none;
`

export default HintList;