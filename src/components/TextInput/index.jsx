import { styled } from "styled-components";
import search from './search.png';

const ContainerStyled = styled.div`
    position: relative;
    display: inline-block;
`;

const TextInputStyled = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`;

const IconGlass = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const TextInput = ({ setFilter }) => {
    return (
        <ContainerStyled>
            <TextInputStyled 
                placeholder="What you've been looking for?" 
                onChange={(event) => setFilter(event.target.value)} 
            />
            <IconGlass src={search} alt="Glass icon" />
        </ContainerStyled>
    );
}

export default TextInput;
