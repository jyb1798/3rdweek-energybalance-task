import styled from 'styled-components'

export const Li = styled.li<{categoryName:string,selectedCategory:string}>`
min-width: fit-content;
color:${props=> props.categoryName === props.selectedCategory ? "#f95919" : "#333"};
margin:0 20px 0 0;
padding: 0;
cursor: pointer;
`