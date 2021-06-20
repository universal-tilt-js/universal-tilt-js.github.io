import React from 'react';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

import Preview from '../preview';

export const HowToInstall = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/how-to-install.md/" } }
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
        <Preview.Title icon={faArrowCircleDown}>How to Install</Preview.Title>

        <Preview.Content
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.nodes[0].html,
          }}
        />
      </Preview.Docs>
    </Preview>
  );
};
