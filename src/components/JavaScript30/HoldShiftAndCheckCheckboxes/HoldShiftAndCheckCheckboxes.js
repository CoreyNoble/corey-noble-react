import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './HoldShiftAndCheckCheckboxes.module.scss';

const holdShiftAndCheckCheckboxes = props => {
  // // Select all of the checkboxes
  // const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

  // // Reference to the input that was last checked
  // let lastChecked;

  // // (e) passing in the event
  // function handleCheck(e) {
  //   // Will determine if we are still in-between the two checked inputs
  //   let inBetween = false;

  //   // Check if they had the shift key down AND check that they are checking the input (this)
  //   if (e.shiftKey && this.checked) {
  //     // loop over every single checkbox
  //     checkboxes.forEach(checkbox => {
  //       console.log(checkbox);

  //       // If the checkbox is either the current item, OR is the lastChecked item
  //       if (checkbox === this || checkbox === lastChecked) {
  //         // Flip 'inBetween' polarity
  //         inBetween = !inBetween;
  //         console.log('Starting to check them in between!');
  //       }

  //       // If 'inBetween' is correct
  //       if (inBetween) {
  //         // Check the checkbox
  //         checkbox.checked = true;
  //       }
  //     });
  //   }

  //   // Set the input that was last checked
  //   lastChecked = this;
  // }

  // // On click handleCheck(e)
  // checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/development/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Hold Shift and Check Checkboxes</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 10 | Hold Shift and Check Checkboxes */}
      <Section id="javascript30-10">
        <Row>
          <Column small={12}>
            <div className="inbox">
              <div className="item">
                <input type="checkbox" />
                <p>Check one item.</p>
              </div>
              <div className="item">
                <input type="checkbox" />
                <p>Hold down your Shift key.</p>
              </div>
              <div className="item">
                <input type="checkbox" />
                <p>Check another item.</p>
              </div>
              <div className="item">
                <input type="checkbox" />
                <p>Everything in between will also become 'checked'.</p>
              </div>
              <div className="item">
                <input type="checkbox" />
                <p>This works both from top-to-bottom.</p>
              </div>
              <div className="item">
                <input type="checkbox" />
                <p>And from bottom-to-top.</p>
              </div>
            </div>
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default holdShiftAndCheckCheckboxes;