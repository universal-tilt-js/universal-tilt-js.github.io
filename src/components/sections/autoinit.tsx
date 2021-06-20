import React from 'react';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

import Preview from '../preview';

export const Autoinit = () => (
  <Preview>
    <Preview.Docs>
      <Preview.Title icon={faRunning}>Autoinit</Preview.Title>

      <Preview.Content>
        <p>
          To use it, add <code>data-tilt</code> to html element e.g:
        </p>
        <pre className="language-html">
          <code>&#60;div data-tilt&#62;&#60;/div&#62;</code>
        </pre>
      </Preview.Content>
    </Preview.Docs>
  </Preview>
);
