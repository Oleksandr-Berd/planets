import { createGlobalStyle } from "styled-components";

export const GlobalStyles: any = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  span, p, a {
    margin: 0;
  }

  ul, nav {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
  }
`;
