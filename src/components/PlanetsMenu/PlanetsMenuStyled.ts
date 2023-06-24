import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

interface IProps {
  color?: string;
}

//Common and Mobile

export const StyledDropdownToggle = styled(Dropdown.Toggle)`
  background-color: transparent;
  border: none;

  &&&:after {
    display: none;
  }

  &&&:focus,
  &&&:hover {
    background: transparent;
  }
`;

export const StyledDropdownMenu = styled(Dropdown.Menu)`
  position: absolute;
  min-width: 100vw;

  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[8]};
  padding-bottom: 67px;

  background-color: ${(props) => props.theme.color.background};
`;

export const Item = styled(Dropdown.Item)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: ${(props) => props.theme.space[5]};
  padding-bottom: ${(props) => props.theme.space[5]};

  color: ${(props) => props.theme.color.primary};

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.color.border};
  }
`;

export const PlanetContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PlanetColor = styled.div<IProps>`
  width: 20px;
  height: 20px;

  margin-right: ${(props) => props.theme.space[6]};

  background-color: ${(props) => props.color};

  border-radius: ${(props) => props.theme.radius[5]};
`;

export const PlanetName = styled.p`
  margin: 0;

  text-transform: uppercase;
  font-family: ${(props) => props.theme.fontFamily.text};
`;

//Tablet

export const MenuList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;

margin-top: 39px;
`

export const MenuItem = styled.li`
  color: ${(props) => props.theme.color.notActive};
  line-height: 2.23;
  font-size: ${(props) => props.theme.size.XN};

  &:not(:last-child) {
    margin-right: 33px;
  }
`;