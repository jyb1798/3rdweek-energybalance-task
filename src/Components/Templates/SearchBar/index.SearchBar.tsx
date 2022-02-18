import React, { useState } from "react";
import SearchButton from "Atoms/SearchButton/index.SearchButton";
import * as S from "Components/Templates/SearchBar/style.SearchBar";
import * as T from "src/Types";
type SearchBarProps = {
    JsonData: T.JsonDataType[];
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const handleButtonOnclick:T.Onclickhandler = (setSearchInput, inputState) =>{
    if(inputState === ''){
        return
    }
    setSearchInput(inputState);
};



const SearchBar = ({JsonData, searchInput, setSearchInput}:SearchBarProps):JSX.Element => {
    const [inputState, setInputState] = useState<string>('');
    console.log(JsonData);
    console.log(searchInput);
    return(<>
        <S.SearchBox>
            <S.Form onSubmit={e=> e.preventDefault()}>
                <input onChange={(e)=>{setInputState(e.target.value)}}/>
                <SearchButton onClickHandler={()=>handleButtonOnclick(setSearchInput, inputState)}/>
            </S.Form>
        </S.SearchBox>
    </>);
}

export default SearchBar;