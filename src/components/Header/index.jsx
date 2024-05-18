import { styled } from "styled-components";
import TextInput from "../TextInput";

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`;

const Header = ({ setFilter }) => {
    return (
        <HeaderStyled>
            <img src="/imgs/logo.png" alt="Logo" />
            <TextInput setFilter={setFilter} />
        </HeaderStyled>
    );
}

export default Header;
