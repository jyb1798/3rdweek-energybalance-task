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
    
`

export default SearchHint;