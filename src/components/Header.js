import React from 'react';
import ReactTilt from 'react-universal-tilt';

import { callbacks } from './callbacks';

export default () => (
  <header>
    <div className="primary">
      <a href="https://github.com/JB1905/universal-tilt.js">
        <ReactTilt
          callbacks={callbacks}
          settings={{
            shadow: true,
            shine: true,
            'shine-opacity': 0.5,
            'shine-save': false,
            max: 12,
            perspective: 500,
            scale: 1.08
          }}
        >
          <h1>
            universal-tilt.js
            <span>See on GitHub</span>
          </h1>
        </ReactTilt>
      </a>
    </div>

    <div className="secondary">
      <h3 className="idea">Based on:</h3>

      <div className="split">
        <div>
          <a href="https://gijsroge.github.io/tilt.js/">
            <ReactTilt
              callbacks={callbacks}
              settings={{
                shadow: true,
                shine: true,
                'shine-opacity': 0.5,
                'shine-save': false,
                max: 15,
                perspective: 500,
                scale: 1.1
              }}
            >
              <h2>
                tilt.js
                <span>by Gijs Rogé</span>
              </h2>
            </ReactTilt>
          </a>
        </div>

        <div>
          <a href="https://micku7zu.github.io/vanilla-tilt.js/index.html">
            <ReactTilt
              callbacks={callbacks}
              settings={{
                shadow: true,
                shine: true,
                'shine-opacity': 0.5,
                'shine-save': false,
                max: 15,
                perspective: 500,
                scale: 1.1
              }}
            >
              <h2>
                vanilla-tilt.js
                <span>by Șandor Sergiu</span>
              </h2>
            </ReactTilt>
          </a>
        </div>
      </div>
    </div>
  </header>
);
