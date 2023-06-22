import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-top: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[4]};

  border-bottom: 1px solid ${props => props.theme.color.border};
`;

export const Title = styled.h1`
margin-bottom: 0;

text-transform: uppercase;
color:${props => props.theme.color.primary};
font-size: ${props => props.theme.size.SM};
line-height: 1.29;
font-family: ${props => props.theme.fontFamily.title};
`

