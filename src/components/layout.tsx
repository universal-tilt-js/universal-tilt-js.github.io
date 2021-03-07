import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Global } from '../styles/global';
import { theme } from '../styles/theme';

const Page = styled.div`
  max-width: 1200px; /* TODO var */
  margin: 0 auto;

  /* TODO mixin */
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Page>{children}</Page>

    <Global />
  </ThemeProvider>
);

export default Layout;
