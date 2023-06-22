import { Button, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";

export const StyledGroup = styled(ButtonGroup)`
  min-width: ${(props) => props.theme.percentage[10]};
  border-bottom: 1px solid ${(props) => props.theme.color.border};
`;

export const StyledButton = styled(Button)`
  padding-top: ${(props) => props.theme.space[5]};
  padding-bottom: ${(props) => props.theme.space[5]};

  text-transform: uppercase;
  background-color: transparent;
  font-family: ${(props) => props.theme.fontFamily.text};
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: 9px;
  line-height: 1.11;

  border: none;
`;
