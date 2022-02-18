import React from "react";
import styled from "styled-components";
import HintList from "Molecules/HintList/index.HintList";
import { JsonDataType } from "src/Types/";

const SearchHint = ({dataList}: {dataList: JsonDataType[]}):JSX.Element => {
    return(
        <Warpper>
            <HintList dataList={dataList}/>
        </Warpper>
    )
}


const Warpper = styled.div`
    width: calc(100% - 35px);
    position: absolute;
    transform: translateY(35px);
    background-color: #FFFFFF;
    border-radius: 0px 0px 4px 4px;
    box-shadow: 3px 6px 15px rgba(0, 0, 0, 0.25);
`

export default SearchHint;