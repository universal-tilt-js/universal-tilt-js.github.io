import React from 'react';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import Preview from '../preview';

export const GettingStarted = () => (
  <Preview>
    <Preview.Docs>
      <Preview.Title icon={faPlayCircle}>Getting Started</Preview.Title>

      <Preview.Content>
        <p>ES6+:</p>
        <pre className="language-javascript">
          <code>import UniversalTilt from 'universal-tilt.js';</code>
        </pre>

        <p>CommonJS:</p>
        <pre className="language-javascript">
          <code>const UniversalTilt = require('universal-tilt.js');</code>
        </pre>

        <br />

        <p>JavaScript / TypeScript:</p>
        <pre className="language-javascript">
          <code>const elems = document.querySelectorAll('.tilt');</code>
          <br />
          <br />
          <code>{'//'} v2</code>
          <br />
          <code>const universalTilt = UniversalTilt.init(&#123;</code>
          <br />
          <code>{'  '}elements: elems,</code>
          <br />
          <code>{'  '}settings: &#123;</code>
          <br />
          <code>{'    //'} options...</code>
          <br />
          <code>{'  '}&#125;,</code>
          <br />
          <code>{'  '}callbacks: &#123;</code>
          <br />
          <code>{'    //'} callbacks...</code>
          <br />
          <code>{'  '}&#125;</code>
          <br />
          <code>&#125;);</code>

          <br />
          <br />

          <code>{'//'} v1</code>
          <br />
          <code>const universalTilt = new UniversalTilt(elems, &#123;</code>
          <br />
          <code>{'  //'} options...</code>
          <br />
          <code>&#125;);</code>
        </pre>

        <p>jQuery:</p>
        <pre className="language-html">
          <code>
            &#60;script
            src="https://code.jquery.com/jquery-3.6.0.min.js"&#62;&#60;/script&#62;
          </code>
        </pre>

        <pre className="language-javascript">
          <code>$ npm install jquery</code>
          <br />
          <code>$ yarn add jquery</code>
          <br />
          <code>$ bower install jquery</code>
        </pre>

        <pre className="language-javascript">
          <code>const jQuery = require('jquery');</code>
        </pre>

        <pre className="language-javascript">
          <code>{'//'} v2</code>
          <br />
          <code>$('.tilt').universalTilt(&#123;</code>
          <br />
          <code>{'  '}settings: &#123;</code>
          <br />
          <code>{'    //'} options...</code>
          <br />
          <code>{'  '}&#125;,</code>
          <br />
          <code>{'  '}callbacks: &#123;</code>
          <br />
          <code>{'    //'} callbacks...</code>
          <br />
          <code>{'  '}&#125;</code>
          <br />
          <code>&#125;);</code>

          <br />
          <br />

          <code>{'//'} v1</code>
          <br />
          <code>$('.tilt').universalTilt(&#123;</code>
          <br />
          <code>{'  //'} options...</code>
          <br />
          <code>&#125;);</code>
        </pre>
      </Preview.Content>
    </Preview.Docs>
  </Preview>
);
