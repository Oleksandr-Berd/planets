
import * as SC from "./HeaderStyled"

import PlanetsMenu from "components/PlanetsMenu/PlanetsMenu";


const Header = (): JSX.Element => {
    



    return (
        <SC.StyledHeader>
        <SC.Title>the planets</SC.Title>
        <PlanetsMenu/>
        </SC.StyledHeader>
    );
}
 
export default Header;