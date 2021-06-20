import React from 'react';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import ReactTilt from 'react-universal-tilt';
import { useStaticQuery, graphql } from 'gatsby';

import Preview from '../preview';
import { callbacks } from '../../utils/callbacks';

export const Shine = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/shine.md/" } }) {
        nodes {
          html
        }
      }
    }
  `);

  return (
    <Preview>
      <Preview.Example>
        <ReactTilt
          callbacks={callbacks}
          settings={{
            shine: true,
            'shine-save': true,
            'shine-opacity': 0.5,
          }}
        />
      </Preview.Example>

      <Preview.Docs>
        <Preview.Title>Shine</Preview.Title>

        <Preview.Content
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.nodes[0].html,
          }}
        />
      </Preview.Docs>
    </Preview>
  );
};
