import React from 'react';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

import Preview from '../preview';

export const HowToInstall = () => (
  <Preview>
    <Preview.Docs>
      <Preview.Title icon={faArrowCircleDown}>How to Install</Preview.Title>

      <Preview.Content>
        <p>npm / Yarn:</p>
        <pre className="language-javascript">
          <code>$ npm install universal-tilt.js</code>
          <br />
          <code>$ yarn add universal-tilt.js</code>
        </pre>

        <p>HTML script tag:</p>
        <pre className="language-html">
          <code>
            &#60;script src="/path/to/universal-tilt.js"&#62;&#60;/script&#62;
          </code>
        </pre>
      </Preview.Content>
    </Preview.Docs>
  </Preview>
);
