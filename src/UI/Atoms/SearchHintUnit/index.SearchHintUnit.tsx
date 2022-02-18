import React from "react";
import styled from "styled-components";
import { JsonDataType } from "src/Types/";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SearchHintUnit = ({data}:{data:JsonDataType}):JSX.Element => {
    return(
        <Li>
            {data.productName}
            <FontAwesomeIcon icon={faArrowRight} />
        </Li>
    )
}

const Li = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
`
const Span = styled.span`
    
`
export default SearchHintUnit;