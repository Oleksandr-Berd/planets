import { Dropdown } from "react-bootstrap";
import { useMediaQuery } from '@mui/material';


import * as SC from "./PlanetsMenuStyled"

import { ReactComponent as BurgerSvg } from "assets/svg/icon-hamburger.svg"
import { ReactComponent as PathSvg } from "assets/svg/Path 3.svg"

import planetsData from "dataBase/data.json"
import { useState } from "react";

import { colorsArray } from "utils/planetColors";

const PlanetsMenu = (): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const isMobile = useMediaQuery('(max-width:767px)')

    const isTablet = useMediaQuery('(min-width:768px)')


    const toggleActive = (): void => {
        setIsActive(!isActive)
    }
    
    return (
        <div>

            {isTablet ? (<SC.MenuList>  
                {planetsData.map(({ name }) => <SC.MenuItem to={name} key={name}>{name}</SC.MenuItem>)}
            </SC.MenuList>)
                : null}
            
            {isMobile ? <Dropdown onToggle={toggleActive}>
                <SC.StyledDropdownToggle id="dropdown-basic">
                    <BurgerSvg fill={isActive ? "#979797" : "#fff"} />
                </SC.StyledDropdownToggle>

                <SC.StyledDropdownMenu>
                    {!!planetsData.length ? planetsData.map(({ name }) => {
                        const color = colorsArray.filter(el => el[0] === name).map(el => el[1])

                        return <SC.Item href={name} key={name} >
                            <SC.PlanetContainer>
                                <SC.PlanetColor color={color[0]}></SC.PlanetColor>
                                <SC.PlanetName>{name}</SC.PlanetName>
                            </SC.PlanetContainer>
                            <PathSvg />
                        </SC.Item>
                    }


                    ) : null}
                </SC.StyledDropdownMenu>
            </Dropdown> : null}
        
        </div>);
}
 
export default PlanetsMenu;