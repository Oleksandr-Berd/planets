import {useMediaQuery} from '@mui/material';

import * as SC from "./HeaderStyled"

import PlanetsMenu from "components/PlanetsMenu/PlanetsMenu";


const Header = (): JSX.Element => {
    
    const isMobile = useMediaQuery('(max-width:767px)')

    const isTablet = useMediaQuery('(min-width:768px)')


    return (
        <SC.StyledHeader>
        <SC.Title>the planets</SC.Title>
        <PlanetsMenu/>
        </SC.StyledHeader>
    );
}
 
export default Header;