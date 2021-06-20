import { createGlobalStyle } from 'styled-components';

import { ThemeType } from './theme';

export const Global = createGlobalStyle<{ readonly theme: ThemeType }>`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    min-width: ${({ theme }) => theme.breakpoints.xs};
    font-family: ${({ theme }) => theme.font.family.body};
    background-color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.font.size.default};
    color: ${({ theme }) => theme.colors.text};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* TODO */
  p {
    margin: 12px 0;
    font-size: 1.8rem;
  }

  a {
    text-decoration: none;
  }
`;
