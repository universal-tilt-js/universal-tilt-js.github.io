import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Header from '../containers/header';
import Preview from '../containers/preview';

import { HomePageQuery } from '../../graphql-types';

interface Props {
  data: HomePageQuery;
}

const Main = styled.main`
  margin-top: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    overflow: hidden;
    width: 80vw;
  }
`;

const HomePage: React.FC<Props> = ({ data }) => {
  const { site, allMarkdownRemark } = data;

  const { title, description } = site.siteMetadata;

  return (
    <Layout>
      <SEO title={title} description={description} />

      <Header />

      <Main>
        {allMarkdownRemark.edges.map(({ node }) => (
          <Preview data={node} key={null} />
        ))}
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

    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            themePrimary
            themeSecondary
          }
          html
        }
      }
    }
  }
`;

export default HomePage;
