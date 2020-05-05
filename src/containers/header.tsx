import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 0;
    width: 20vw;
    min-width: 320px;
    display: block;
    height: 100vh;
    position: sticky;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }
`;

const HeaderPrimary = styled.div``;

const HeaderSecondary = styled.div``;

const HeaderSplitView = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 20px;
    flex-direction: column;
  }
`;

const HeaderGithubLink = styled.a``;

const HeaderTitle = styled.h1``;

const HeaderSubTitle = styled.h2``;

const HeaderIdea = styled.h3``;

const Header: React.FC = () => (
  <HeaderWrapper>
    <HeaderPrimary>
      <HeaderGithubLink href="https://github.com/universal-tilt-js/universal-tilt.js">
        <HeaderTitle>universal-tilt.js</HeaderTitle>

        <HeaderSubTitle>See on GitHub</HeaderSubTitle>
      </HeaderGithubLink>
    </HeaderPrimary>

    <HeaderSecondary>
      <HeaderIdea>Based on:</HeaderIdea>

      <HeaderSplitView></HeaderSplitView>
    </HeaderSecondary>
  </HeaderWrapper>
);

export default Header;
