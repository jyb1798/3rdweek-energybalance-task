import React from "react";
import styled from "styled-components";
import { JsonDataType } from "src/Types/";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchHintUnitProps {
    data: JsonDataType
    setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

const SearchHintUnit = ({data, setSearchInput}:SearchHintUnitProps):JSX.Element => {
    return(
        <Li onClick={() => {
            console.log(data.productName);
            setSearchInput(data.productName)
            }}
            onMouseDown={(e) => e.preventDefault()}
        >
            <Span>{data.productName}</Span>
            <Icon>
                <FontAwesomeIcon icon={faArrowRight} />
            </Icon>
        </Li>
    )
}

const Li = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between; 
    padding: 10px 0;
    border-radius: 5px;
    &:hover{
        background-color: #a7caff61;
    }
`
const Span = styled.span`
    margin-left: 15px;
    font-weight: 500;
`

const Icon = styled.span`
    color: #333;
    margin-right: 15px;
`
export default SearchHintUnit;