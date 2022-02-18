import React from "react"
import styled from "styled-components"

interface SearchInputProps{
    inputState: string,
    setInputState: React.Dispatch<React.SetStateAction<string>>,
    submitHandler: () => void,
    setInputFocus: React.Dispatch<React.SetStateAction<boolean>>
}

const handleKeyPress = (e:React.KeyboardEvent<HTMLInputElement>, submitHandler:()=>void) => {
    if (e.key === 'Enter'){
        submitHandler();
    }
}

const SearchInput = ({inputState, setInputState, submitHandler, setInputFocus}:SearchInputProps):JSX.Element => {
    return(
        <Input 
            value = {inputState} 
            onChange = {(e: { target: { value: React.SetStateAction<string> } })=> setInputState(e.target.value)}
            onKeyPress = {(e)=> {handleKeyPress(e, submitHandler)}}    
            onFocus = {() => setInputFocus(true)}
            onBlur = {() => setInputFocus(false)}
        />
    )
}

const Input = styled.input`
    width: calc(100% - 40px);
    border: none;
    border-radius: 4px;
    box-shadow: inset -2px 0px 4px rgba(0,0,0, 0.25);
`

export default SearchInput;