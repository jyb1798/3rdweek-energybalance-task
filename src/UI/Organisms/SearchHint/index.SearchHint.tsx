import React from "react";
import styled from "styled-components";
import HintList from "Molecules/HintList/index.HintList";
import { JsonDataType } from "src/Types/";

interface SearchHintProps {
    dataList: JsonDataType[]
    setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

const SearchHint = ({dataList, setSearchInput}: SearchHintProps):JSX.Element => {
    return(
        <Warpper>
            <HintList dataList={dataList} setSearchInput={setSearchInput}/>
        </Warpper>
    )
}


const Warpper = styled.div`
    width: 60vw;
    position: fixed;
    transform: translateY(35px);
    background-color: #FFFFFF;
    border-radius: 0px 0px 4px 4px;
    box-shadow: 3px 6px 15px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    z-index: 500;
`

export default SearchHint;