import { Button, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";

interface IProps {
  color: string;
  stressed: "active" | null;
}

export const StyledGroup = styled(ButtonGroup)`
  min-width: ${(props) => props.theme.percentage[10]};
  border-bottom: 1px solid ${(props) => props.theme.color.border};
`;

export const StyledButton = styled(Button)`
  padding-top: ${(props) => props.theme.space[5]};
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;

  text-transform: uppercase;
  background-color: transparent;
  color: ${(props) => props.theme.color.notActive};

  font-family: ${(props) => props.theme.fontFamily.text};
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: 9px;
  line-height: 1.11;

  border: none;

  &:not(:last-child) {
    margin-right: ${(props) => props.theme.space[7]};
  }

  &&&:hover,
  &&&:focus, &&&:active {
    background-color: transparent;
  }
`;

export const Text = styled.span<IProps>`
  display: inline-block;
  min-height: 100%;
  padding-bottom: 17px;

  color:${(props) =>
    props.stressed
      ? `${props.theme.color.primary}`
      : `${props.theme.color.notActive}`};
  border-bottom: ${({ stressed, color }) =>
    stressed ? `4px solid ${color}` : "none"};
`;
