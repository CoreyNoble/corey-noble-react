import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import './KeySequenceDetection.module.scss';

const keySequenceDetection = props => {
  // Initialize empty array.
  const pressed = [];
  // Code we're looking to detect.
  const secretCode = '3838404037393739666513';

  // When key up, pass the event.
  window.addEventListener('keyup', e => {
    console.log(e.key);
    // Push the key press into the array.
    pressed.push(e.key);
    // Trim the array to ensure we're only looking for the maximum number of characters. Pushes out the first entry in the array.
    // Start from the end, move backwards. Trim from there.
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    // If when we join the array and it matches the secretCode, do something.
    if (pressed.join('').includes(secretCode)) {
      console.log('DING DING!');
      // ~~~ // cornify_add();
    }
    console.log(pressed);
  });

  return (
    <React.Fragment>
      {/* <!-- Introduction --> */}
      <div className="js30-intro section white">
        <Row>
          <Column small={12}>
            {/* <!-- Back CTA --> */}
            <p className="back-cta"><small><strong><a href="{{root}}portfolio/development/javascript30.html"
                    title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small>
            </p>

            {/* <!-- Title --> */}
            <h1>Key Sequence Detection</h1>

            {/* <!-- Accordion --> */}
            <ul className="accordion" data-accordion data-allow-all-closed="true">
              <li className="accordion-item" data-accordion-item="">
                {/* <!-- Title --> */}
                <a href="#" className="accordion-title" aria-controls="project-synopsis" role="tab"  aria-expanded="false"
                  aria-selected="false">
                  <h2 className="h5">Project Synopsis and&nbsp;Code</h2>
                </a>
                {/* <!-- Content --> */}
                <div className="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby="Project Synopsis and Code"
                  aria-hidden="true" id="project-synopsis" style="display: none;">
                  <p>In this lesson I learned how to listen for a specific combination of inputs before firing
                    a&nbsp;function.</p>
                  <p>First I initialize an empty array 'pressed[]', as well as a 'secretCode'&nbsp;variable.</p>
                  <p>I <strong>listen</strong> for a 'keyup' event on the 'window' object. I pass the event into a function
                    ((e)&nbsp;=>&nbsp;{}).</p>
                  <p>In the <strong>function(e)</strong>&nbsp;- Push the key event 'e.key' into the 'pressed[]' array. Then
                    trim the array to ensure it is never longer than the maximum number of characters in 'secretCode'. Next
                    join the 'pressed' array together into one string (.join('')) and check if it includes 'secretCode'
                    (.includes(secretCode)), if so, the 'secretCode' is detected and the function can&nbsp;proceed.</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="GbGzrY"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 12 - Key Sequence Detection">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/GbGzrY/">
                        JavaScript30 - 12 - Key Sequence Detection</a> by Corey Noble (<a
                        href="https://codepen.io/CoreyNoble">@CoreyNoble</a>)
                      on <a href="https://codepen.io">CodePen</a>.</span>
                  </p>
                  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
                </div>
              </li>
            </ul>
          </Column>
        </Row>
      </div>

      {/* <!-- JavaScript30 | 12 | Key Sequence Detection --> */}
      <div className="section blue">
        <Row>
          <Column id="javascript30-12" small={12}>
            <h2 className="h3">Enter the Konami&nbsp;Code:</h2>
            <p className="h4">&#8593;&nbsp;&#8593; &#8595;&nbsp;&#8595; &#8592;&nbsp;&#8594; &#8592;&nbsp;&#8594; B,&nbsp;A, Enter
            </p>
          </Column>
        </Row>
      </div>

      <script src="https://www.cornify.com/js/cornify.js"></script>
    </React.Fragment>
  );
};

export default keySequenceDetection;