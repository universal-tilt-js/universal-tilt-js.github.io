import React from 'react';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

import Preview from '../preview';

export const GettingStarted = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/getting-started.md/" } }
      ) {
        nodes {
          html
        }
      }
    }
  `);

  return (
    <Preview>
      <Preview.Docs>
        <Preview.Title icon={faPlayCircle}>Getting Started</Preview.Title>

        <Preview.Content
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.nodes[0].html,
          }}
        />
      </Preview.Docs>
    </Preview>
  );
};
