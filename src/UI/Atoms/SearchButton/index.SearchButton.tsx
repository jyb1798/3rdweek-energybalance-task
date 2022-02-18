import React from "react";
import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchButtonProps {
    onClickHandler: () => void
    setInputFocus: React.Dispatch<React.SetStateAction<boolean>>,
}

const SearchButton = ({onClickHandler, setInputFocus}:SearchButtonProps):JSX.Element => {
    return(
        <Warpper>
            <Button onClick={() => {onClickHandler(); setInputFocus(false);}}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
        </Warpper>
    )
}

const Warpper = styled.div`
    
`

const Button = styled.button`
    margin-left: 5px;
    background-color: #FFFFFF;
    border-radius: 3px;
    border: none;
    color: #F39519 ;
    font-size: 17px;
    box-shadow: 2px 3px 5px rgba(0,0,0,0.3);
    height: 100%;
    width: 35px;
    transform: translateY(-1px);

    &:active{
        box-shadow: 2px 1px 5px rgba(0,0,0,0.3);
        transform: translateY(0px);
    }
`

export default SearchButton;