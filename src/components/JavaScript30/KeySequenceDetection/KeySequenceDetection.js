import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './KeySequenceDetection.module.scss';

const keySequenceDetection = props => {
  // // Initialize empty array.
  // const pressed = [];
  // // Code we're looking to detect.
  // const secretCode = '3838404037393739666513';

  // // When key up, pass the event.
  // window.addEventListener('keyup', e => {
  //   console.log(e.key);
  //   // Push the key press into the array.
  //   pressed.push(e.key);
  //   // Trim the array to ensure we're only looking for the maximum number of characters. Pushes out the first entry in the array.
  //   // Start from the end, move backwards. Trim from there.
  //   pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  //   // If when we join the array and it matches the secretCode, do something.
  //   if (pressed.join('').includes(secretCode)) {
  //     console.log('DING DING!');
  //     // ~~~ // cornify_add();
  //   }
  //   console.log(pressed);
  // });

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Key Sequence Detection</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 12 | Key Sequence Detection */}
      <Section background="blue">
        <Row>
          <Column id="javascript30-12" small={12}>
            <h2 className="h3">Enter the Konami&nbsp;Code:</h2>
            <p className="h4">&#8593;&nbsp;&#8593; &#8595;&nbsp;&#8595; &#8592;&nbsp;&#8594; &#8592;&nbsp;&#8594; B,&nbsp;A, Enter
            </p>
          </Column>
        </Row>
      </Section>

      <script src="https://www.cornify.com/js/cornify.js"></script>
    </React.Fragment>
  );
};

export default keySequenceDetection;