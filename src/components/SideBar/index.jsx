import {styled} from "styled-components"
import NavItem from "./NavItem"


const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`


const SideBar = () => {
    return(
        <aside>
            <nav>
                <StyledList>
                    <NavItem activeIcon="/icons/home-ativo.png" inactiveIcon="\icons\home-ativo.png" active={true}>Home</NavItem>
                </StyledList>
            </nav>
        </aside>
    )
}

export default SideBar;