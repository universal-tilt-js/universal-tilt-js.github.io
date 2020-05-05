import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Global } from './global';

import { theme } from '../constants/theme';

const Page = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

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
