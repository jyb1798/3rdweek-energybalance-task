import React from "react";
import styled from "styled-components";
import { JsonDataType } from "src/Types/";


const SearchHintUnit = ({data}:{data:JsonDataType}):JSX.Element => {
    return(
        <Li>{data.productName}</Li>
    )
}

const Li = styled.li`
    list-style: none;
`

export default SearchHintUnit;