import {styled} from "styled-components"

const ButtonStyled = styled.button`
    border: none ;
    background: none;
    cursor: pointer;
`

const ButtonImage = ({path , onClick}) => {
    return(
        <ButtonStyled onClick={onClick}><img src={path}></img></ButtonStyled>
    )
}

export default ButtonImage;