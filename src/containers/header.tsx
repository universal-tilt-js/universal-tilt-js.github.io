import React, { useState, useEffect } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { breakpoints } from '../constants/breakpoints';

interface Props {
  background: any;
  siteTitle?: string;
}

const HeaderWrapper = styled.header`
  @media (min-width: ${breakpoints.md}) {
    top: 0;
    width: 20vw;
    min-width: 320px;
    display: block;
    height: 100vh;
    height: var(--vh);
    position: sticky;
    border-right: 1px solid #444;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }
`;

const Primary = styled.div``;

const Secondary = styled.div``;

const SplitView = styled.div`
  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 20px;
    flex-direction: column;
  }
`;

const Title = styled.h1``;

const SubTitle = styled.h2``;

const GithubLink = styled(Link)``;

const Idea = styled.h3``;

const Header: React.FC<Props> = ({ background, siteTitle = '' }) => {
  return (
    <HeaderWrapper>
      <Primary>
        <GithubLink to="https://github.com/universal-tilt-js/universal-tilt.js">
          <Title>universal-tilt.js</Title>

          <SubTitle>See on GitHub</SubTitle>
        </GithubLink>
      </Primary>

      <Secondary>
        <Idea>Based on:</Idea>

        <SplitView></SplitView>
      </Secondary>
    </HeaderWrapper>
  );
};

export default Header;
