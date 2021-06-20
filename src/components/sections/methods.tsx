import React from 'react';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

import Preview from '../preview';

export const Methods = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/methods.md/" } }
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
        <Preview.Title icon={faBoxOpen}>Methods</Preview.Title>

        <Preview.Content
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.nodes[0].html,
          }}
        />
      </Preview.Docs>
    </Preview>
  );
};
