import React from 'react';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { ReactTilt } from 'react-universal-tilt';

import Preview from '../preview';
import { callbacks } from '../../utils/callbacks';

export const Shine = () => (
  <Preview>
    <Preview.Example>
      {/* <ReactTilt
        callbacks={callbacks}
        settings={{
          shine: true,
          'shine-save': true,
          'shine-opacity': 0.5,
        }}
      /> */}
    </Preview.Example>

    <Preview.Docs>
      <Preview.Title>Shine</Preview.Title>

      <Preview.Content>
        <p>To add shine to single element use following code in div tag:</p>
        <pre className="language-html">
          <code>
            &#60;div data-tilt-shine="true" data-tilt-shine-opacity="0.5"
            data-tilt-shine-save="true"&#62;
          </code>
        </pre>

        <p>
          To add shine to all elements place in JavaScript (or jQuery) options:
        </p>
        <pre className="language-javascript">
          <code>shine: true,</code>
          <br />
          <code>'shine-opacity': 0.5,</code>
          <br />
          <code>'shine-save': true</code>
        </pre>
      </Preview.Content>
    </Preview.Docs>
  </Preview>
);
