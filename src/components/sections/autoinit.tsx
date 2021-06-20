import React from 'react';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

import Preview from '../preview';

export const Autoinit = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/autoinit.md/" } }
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
        <Preview.Title icon={faRunning}>Autoinit</Preview.Title>

        <Preview.Content
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.nodes[0].html,
          }}
        />
      </Preview.Docs>
    </Preview>
  );
};
