import {styled} from "styled-components"


const TitleStyled = styled.h2`
    color: #7B78E6;
    text-align: ${props => props.$align ? props.$align : 'left'};
    font-size: 32px;
`

export default TitleStyled;