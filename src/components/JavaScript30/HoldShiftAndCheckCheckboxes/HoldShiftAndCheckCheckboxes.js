import React from 'react';

import { Row, Column } from 'react-foundation';

import './HoldShiftAndCheckCheckboxes.module.scss';

const holdShiftAndCheckCheckboxes = props => {
  // Select all of the checkboxes
  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

  // Reference to the input that was last checked
  let lastChecked;

  // (e) passing in the event
  function handleCheck(e) {
    // Will determine if we are still in-between the two checked inputs
    let inBetween = false;

    // Check if they had the shift key down AND check that they are checking the input (this)
    if (e.shiftKey && this.checked) {
      // loop over every single checkbox
      checkboxes.forEach(checkbox => {
        console.log(checkbox);

        // If the checkbox is either the current item, OR is the lastChecked item
        if (checkbox === this || checkbox === lastChecked) {
          // Flip 'inBetween' polarity
          inBetween = !inBetween;
          console.log('Starting to check them in between!');
        }

        // If 'inBetween' is correct
        if (inBetween) {
          // Check the checkbox
          checkbox.checked = true;
        }
      });
    }

    // Set the input that was last checked
    lastChecked = this;
  }

  // On click handleCheck(e)
  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

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
            <h1>Hold Shift and Check Checkboxes</h1>

            {/* <!-- Accordion --> */}
            <ul className="accordion" data-accordion data-allow-all-closed="true">
              <li className="accordion-item" data-accordion-item="">
                {/* <!-- Title --> */}
                <a href="#" className="accordion-title" aria-controls="project-synopsis" role="tab" aria-expanded="false"
                  aria-selected="false">
                  <h2 className="h5">Project Synopsis and&nbsp;Code</h2>
                </a>
                {/* <!-- Content --> */}
                <div className="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby="Project Synopsis and Code"
                  aria-hidden="true" id="project-synopsis" style="display: none;">
                  <p>In this lesson I add functionality that allows the user to hold 'shift' and 'click' to select multiple
                    list items at&nbsp;once.</p>
                  <p>First I grab all of the checkboxes on the page (document.querySelectorAll('.inbox
                    input[type="checkbox"]')). I also initialize a 'lastchecked'&nbsp;variable.</p>
                  <p>For each checkbox I <strong>listen</strong> for a 'click' and run&nbsp;handleCheck(e).</p>
                  <p>In <strong>handleCheck(e)</strong>&nbsp;- Initialize an 'inBetween' variable as false. Then check if the
                    user is holding the shift key and that they are checking the input (e.shiftKey&nbsp;&& this.checked). If
                    that is the case, then for each checkbox, check if the checkbox is either the current input, or the
                    'lastChecked' item. If either are true, flip 'inBetween' polarity (inBetween&nbsp;= !inBetween). Check if
                    'inBetween' is true, and if so, check that&nbsp;checkbox.</p>
                  <p>Finally set 'lastChecked' to the current checkbox&nbsp;'this'.</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="RzJvoB"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 10 - Hold Shift And Check Checkboxes">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/RzJvoB/">
                        JavaScript30 - 10 - Hold Shift And Check Checkboxes</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 10 | Hold Shift and Check Checkboxes --> */}
      <div id="javascript30-10" className="section">
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
      </div>
    </React.Fragment>
  );
};

export default holdShiftAndCheckCheckboxes;