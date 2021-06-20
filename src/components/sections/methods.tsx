import React from 'react';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

import Preview from '../preview';

export const Methods = () => (
  <Preview>
    <Preview.Docs>
      <Preview.Title icon={faBoxOpen}>Methods</Preview.Title>

      <Preview.Content>
        <p>Destroy method (v2+)</p>
        <pre className="language-javascript">
          <code>elems.universalTilt.destroy();</code>
        </pre>
      </Preview.Content>
    </Preview.Docs>
  </Preview>
);
