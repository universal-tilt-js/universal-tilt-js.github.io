import React from 'react';
import { graphql, PageProps } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';

import { HowToInstall } from '../components/sections/how-to-install';
import { GettingStarted } from '../components/sections/getting-started';
import { Autoinit } from '../components/sections/autoinit';
import { Methods } from '../components/sections/methods';
// import { Shine } from '../components/sections/shine';

import { HomePageQuery } from '../../graphql-types';

const Main = styled.main`
  margin-top: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    overflow: hidden;
    width: 80vw;
  }
`;

const HomePage = ({ data }: PageProps<HomePageQuery>) => {
  const { title, description } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO title={title} description={description} />

      <Header />

      <Main>
        <HowToInstall />
        <GettingStarted />
        <Autoinit />
        <Methods />

        {/* <Shine /> */}
        {/* <Scale /> */}
        {/* <Parallax /> */}
        {/* <DisableX /> */}
        {/* <DisableY /> */}
        {/* <Reset /> */}
        {/* <Reverse /> */}
        {/* <Base /> */}
        {/* <Exclude /> */}
        {/* <ChangeEvent /> */}
      </Main>
    </Layout>
  );
};

export const query = graphql`
  query HomePage {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default HomePage;
