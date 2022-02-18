import styled from "styled-components";

export const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    @media all and (max-width: 768px) {
        padding:0 28px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 35px;
`