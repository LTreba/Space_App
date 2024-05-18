import {styled} from "styled-components"

const StyledLi = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${(props) => props.$active ? '#7B78E5' : '#D9D9D9'};
    display: flex;
    align-items: center;
    gap: 22px;
`

const NavItem = ({ active, activeIcon, inactiveIcon, children }) => {
    return(
        <StyledLi $active={active}>
            <img src={active ? activeIcon : inactiveIcon} alt="Icon Side Bar"></img>
            {children}
        </StyledLi>
    )
}

export default NavItem