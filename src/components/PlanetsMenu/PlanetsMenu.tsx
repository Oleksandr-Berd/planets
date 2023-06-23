import { Dropdown } from "react-bootstrap";

import * as SC from "./PlanetsMenuStyled"

import { ReactComponent as BurgerSvg } from "assets/svg/icon-hamburger.svg"
import { ReactComponent as PathSvg } from "assets/svg/Path 3.svg"

import planetsData from "dataBase/data.json"
import { useState } from "react";

import { colorsArray } from "utils/planetColors";

const PlanetsMenu = (): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const toggleActive = (): void => {
        setIsActive(!isActive)
    }
    
    return (
        <div>
        <Dropdown onToggle={toggleActive}>
        <SC.StyledDropdownToggle id="dropdown-basic">
                    <BurgerSvg fill={isActive ? "#979797" : "#fff"} />
        </SC.StyledDropdownToggle>

        <SC.StyledDropdownMenu>
                    {!!planetsData.length ? planetsData.map(({ name }) =>
                    {
                        const color = colorsArray.filter(el => el[0] === name).map(el => el[1])
                        
                        return <SC.Item href={name} key={name} >
                            <SC.PlanetContainer>
                                <SC.PlanetColor color={color[0]}></SC.PlanetColor>
                                <SC.PlanetName>{name}</SC.PlanetName>
                            </SC.PlanetContainer>
                            <PathSvg />
               </SC.Item>}
                    
          
           ) : null}
        </SC.StyledDropdownMenu>
            </Dropdown>
        </div>);
}
 
export default PlanetsMenu;