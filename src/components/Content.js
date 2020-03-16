import React, { useEffect } from 'react';
import ReactTilt from 'react-universal-tilt';
import {
  faArrowCircleDown,
  faPlayCircle,
  faRunning,
  faBoxOpen
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Prism from 'prismjs';

import { callbacks } from './callbacks';

export default () => {
  const event = e => {
    let li = document.createElement('li');
    li.innerHTML = `<strong>X</strong>: ${e.tiltX} | <strong>Y</strong>: ${e.tiltY} | <strong>Angle</strong>: ${e.angle}`;

    document
      .querySelector('.output')
      .insertBefore(li, document.querySelector('.output').firstChild);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main>
      <section className="content">
        <h3>
          <FontAwesomeIcon icon={faArrowCircleDown} />
          How to Install
        </h3>

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
      </section>

      {/* -------------------------------------- */}

      <section className="content">
        <h3>
          <FontAwesomeIcon icon={faPlayCircle} />
          Getting Started
        </h3>

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
            src="https://code.jquery.com/jquery-3.4.1.min.js"&#62;&#60;/script&#62;
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
      </section>

      {/* -------------------------------------- */}

      <section className="content">
        <h3>
          <FontAwesomeIcon icon={faRunning} />
          Autoinit
        </h3>

        <p>
          To use it, add <code>data-tilt</code> to html element e.g:
        </p>
        <pre className="language-html">
          <code>&#60;div data-tilt&#62;&#60;/div&#62;</code>
        </pre>
      </section>

      {/* -------------------------------------- */}

      <section className="content">
        <h3>
          <FontAwesomeIcon icon={faBoxOpen} />
          Methods
        </h3>

        <p>Destroy method (v2+)</p>
        <pre className="language-javascript">
          <code>elems.universalTilt.destroy();</code>
        </pre>
      </section>

      {/* -------------------------------------- */}

      <section className="example">
        <div className="primary">
          <ReactTilt
            callbacks={callbacks}
            settings={{
              shine: true,
              'shine-save': true,
              'shine-opacity': 0.5
            }}
          />
        </div>

        <div className="secondary">
          <h3>Shine</h3>

          <p>To add shine to single element use following code in div tag:</p>
          <pre className="language-html">
            <code>
              &#60;div data-tilt-shine="true" data-tilt-shine-opacity="0.5"
              data-tilt-shine-save="true"&#62;
            </code>
          </pre>

          <p>
            To add shine to all elements place in JavaScript (or jQuery)
            options:
          </p>
          <pre className="language-javascript">
            <code>shine: true,</code>
            <br />
            <code>'shine-opacity': 0.5,</code>
            <br />
            <code>'shine-save': true</code>
          </pre>
        </div>
      </section>

      {/* -------------------------------------- */}

      <section className="example">
        <div className="primary">
          <ReactTilt
            callbacks={callbacks}
            settings={{
              gyroscope: false,
              scale: 1.2
            }}
          />
        </div>

        <div className="secondary">
          <h3>Scale</h3>

          <p>To add scale to single element use following code in div tag:</p>
          <pre className="language-html">
            <code>&#60;div data-tilt-scale="1.2"></code>
          </pre>

          <p>
            To add scale to all elements place in JavaScript (or jQuery)
            options:
          </p>
          <pre className="language-javascript">
            <code>scale: 1.2</code>
          </pre>
        </div>
      </section>

      {/* -------------------------------------- */}

      <section className="example">
        <div className="primary">
          <ReactTilt callbacks={callbacks}>
            <div className="tilt-inner" />
          </ReactTilt>
        </div>

        <div className="secondary">
          <h3>Parallax</h3>

          <p>Add to your tilt element:</p>
          <pre className="language-css">
            <code>transform-style: preserve-3d</code>
          </pre>

          <p>Add to your inner elements that have to pop out:</p>
          <pre className="language-css">
            <code>transform: translateZ(20px)</code>
          </pre>
        </div>
      </section>

      {/* -------------------------------------- */}

      <section className="example">
        <div className="primary">
          <ReactTilt
            callbacks={callbacks}
            settings={{
              max: 40,
              perspective: 500,
              axis: 'X'
            }}
          />
        </div>

        <div className="secondary">
          <h3>Disable X</h3>

          <p>To disable X-axis of single element use:</p>
          <pre className="language-html">
            <code>&#60;div data-tilt-axis="x"></code>
          </pre>

          <p>
            To disable X-axis of all elements place in JavaScript (or jQuery)
            options:
          </p>
          <pre className="language-javascript">
            <code>axis: 'X'</code>
          </pre>
        </div>
      </section>

      {/* -------------------------------------- */}

      <section className="example">
        <div className="primary">
          <ReactTilt
            callbacks={callbacks}
            settings={{
              max: 40,
              perspective: 500,
              axis: 'Y'
            }}
          />
        </div>

        <div className="secondary">
          <h3>Disable Y</h3>

          <p>To disable Y-axis of single element use:</p>
          <pre className="language-html">
            <code>&#60;div data-tilt-axis="y"></code>
          </pre>

          <p>
            To disable Y-axis of all elements place in JavaScript (or jQuery)
            options:
          </p>
          <pre className="language-javascript">
            <code>axis: 'Y'</code>
          </pre>
        </div>
      </section>

      {/* -------------------------------------- */}

      <section className="example">
        <div className="primary">
          <ReactTilt
            callbacks={callbacks}
            settings={{
              reset: false
            }}
          />
        </div>

        <div className="secondary">
          <h3>Reset (Only desktop)</h3>

          <p>To disable reset single element move on mouse out use:</p>
          <pre className="language-html">
            <code>&#60;div data-tilt-reset="false"></code>
          </pre>

          <p>
            To disable reset all elements move place in JavaScript (or jQuery)
            options:
          </p>
          <pre className="language-javascript">
            <code>reset: false</code>
          </pre>
        </div>
      </section>

      {/* -------------------------------------- */}

      <section className="example">
        <div className="primary">
          <ReactTilt
            callbacks={callbacks}
            settings={{
              reverse: true
            }}
          />
        </div>

        <div className="secondary">
          <h3>Reverse</h3>

          <p>To reverse single element move use:</p>
          <pre className="language-html">
            <code>&#60;div data-tilt-reverse="true"></code>
          </pre>

          <p>
            To reverse all elements move place in JavaScript (or jQuery)
            options:
          </p>
          <pre className="language-javascript">
            <code>reverse: true</code>
          </pre>
        </div>
      </section>

      {/* -------------------------------------- */}

      <section className="example">
        <div className="primary">
          <ReactTilt
            settings={{
              listener: window
            }}
          />
        </div>

        <div className="secondary">
          <h3>Listener (Only desktop)</h3>

          <p>
            To set base on cursor position over tilt element or window for
            single element use:
          </p>
          <pre className="language-html">
            <code>&#60;div data-tilt-listener="window"></code>
          </pre>

          <p>
            To set base on cursor position over tilt element or window for all
            elements use:
          </p>
          <pre className="language-javascript">
            <code>listener: window</code>
          </pre>
        </div>
      </section>

      {/* -------------------------------------- */}

      <section className="example">
        <div className="primary">
          <ReactTilt
            callbacks={callbacks}
            settings={{
              exclude: /(iPod|iPhone|iPad|Android)/i
            }}
          />
        </div>

        <div className="secondary">
          <h3>Exclude user agents</h3>

          <p>To disable tilt on selected user agents for single element use:</p>
          <pre className="language-html">
            <code>&#60;div data-tilt-exclude="/(iPod|iPhone|iPad|Android)/"></code>
          </pre>

          <p>To disable tilt on selected user agents for all elements use:</p>
          <pre className="language-javascript">
            <code>exclude: /(iPod|iPhone|iPad|Android)/</code>
          </pre>
        </div>
      </section>

      {/* -------------------------------------- */}

      <section className="example">
        <div className="primary">
          <ReactTilt callbacks={callbacks} tiltChange={event} />
        </div>

        <div className="secondary">
          <h3>Change event</h3>

          <p>Change event will output the x & y of tilting</p>
          <pre className="language-javascript">
            <ul className="output" />
          </pre>
        </div>
      </section>
    </main>
  );
};
