import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    min-width: 320px;
    font-family: "Quicksand", sans-serif;
    background-color: #131a20;
    font-size: 1.6rem;
    color: #f8f8f8;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
