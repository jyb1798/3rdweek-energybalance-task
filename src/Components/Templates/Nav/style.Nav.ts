import styled from "styled-components";

export const NavContainer = styled.div`
    width: 100%;
`

export const LogoContainer = styled.div`
`

export const IconContainer = styled.div`
    display: none;

    @media all and (max-width: 768px) {
        display: block;
        margin-left : 10px;
        margin-right: 10px;
  }   
`

export const IconList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media all and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        }
`