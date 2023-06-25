import { Button, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";

interface IProps {
  color: string;
  stressed?: "active" | null;
}

export const StyledGroup = styled(ButtonGroup)`
  min-width: ${(props) => props.theme.percentage[10]};
  border-bottom: 1px solid ${(props) => props.theme.color.border};

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    min-width: 281px;
  }
`;

export const StyledButton = styled(Button)<IProps>`
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
    @media (min-width: 768px) {
      margin-right: 0;
      margin-bottom: ${(props) => props.theme.space[4]};
    }
  }

  &&&:hover,
  &&&:focus,
  &&&:active {
    background-color: transparent;
    @media (min-width: 768px) {
      background-color: ${({ stressed, color }) =>
        stressed ? `${color}` : "none"};
    }
  }

  @media (min-width: 768px) {
    padding-left: ${(props) => props.theme.space[5]};
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};

    text-align: left;
    background-color: ${({ stressed, color }) =>
      stressed ? `${color}` : "none"};
    border: 1px solid ${(props) => props.theme.color.border};
  }
`;

export const Text = styled.span<IProps>`
  display: inline-block;
  min-height: 100%;
  padding-bottom: 17px;

  font-family: ${(props) => props.theme.fontFamily.text};
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 1.12;
  color: ${(props) =>
    props.stressed
      ? `${props.theme.color.primary}`
      : `${props.theme.color.notActive}`};
  border-bottom: ${({ stressed, color }) =>
    stressed ? `4px solid ${color}` : "none"};

  @media (min-width: 768px) {
    padding-bottom: 0;

    color: ${(props) => props.theme.color.primary};
    font-size:9px;
    line-height: 2.78;

    border-bottom: none;
  }
`;

//tablet

export const SequenceNumber = styled.span`
  margin-right: ${(props) => props.theme.space[4]};

  font-family: ${(props) => props.theme.fontFamily.text};
  color: ${(props) => props.theme.color.notActive};
  font-size: 9px;
  font-weight: ${props => props.theme.weight.bold};
  line-height: 2.78;
`;
