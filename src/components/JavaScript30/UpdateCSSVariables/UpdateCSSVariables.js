import React from 'react';

import { Row, Column } from 'react-foundation';

import './UpdateCSSVariables.module.scss';

const updateCSSVariables = props => {
  // Get all of the inputs
  // .querySelectorAll gives us a Node List, which is different than an Array and changes what operations we can use on it. For example, Array allows us to use Map, Filter and Reduce; whereas a Node List allows forEach.
  const inputs = document.querySelectorAll('.controls input');

  function handleUpdate() {
    // Store the suffix value if a [data-sizing] attribute is on the element, otherwise store ''.
    const suffix = this.dataset.sizing || '';
    // Set the style of each variable name using the new value and suffix
    document
      .getElementById('javascript30-3')
      .style.setProperty(`--${this.name}`, this.value + suffix);
  }

  // Listen for change and mouse move on each input. Node List forEach operation
  inputs.forEach(input => input.addEventListener('change', handleUpdate)); // Arrow function
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

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
            <h1>Update CSS Variables</h1>

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
                  <p>In this lesson I update CSS variables using&nbsp;JavaScript.</p>
                  <p>First I get all of the &lt;input&gt; elements on the page with a class of '.controls'
                    (document.querySelectorAll('.controls input')).</p>
                  <p>I <strong>listen</strong> for both 'change' and 'mousemove' each &lt;input&gt; (inputs.forEach(input =>
                    input.addEventListener('change', handleUpdate))).</p>
                  <p>In <strong>handleUpdate()</strong>&nbsp;- First get the 'suffix' from the [data-sizing] attribute on the
                    &lt;input&gt; element. I use it to set the correct unit&nbsp;(px) when modifying the 'style'. Then modify
                    the 'style' that matches the &lt;input&gt; 'name' (.style.setProperty(`--${this.name}`, this.value
                    +&nbsp;suffix).</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="XLYOmK"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 3 - Update CSS Variables">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/XLYOmK/">
                        JavaScript30 - 3 - Update CSS Variables</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 3 | Update CSS Variables --> */}
      <div className="section black">
        <Row>
          <Column id="javascript30-3" small={12}>
            <h2>Update CSS Variables with&nbsp;<span className="hl">JavaScript</span></h2>

            <Row className="black controls">
              <Column small={12} large={4}>
                <label className="h4" for="spacing">Spacing:</label>
                <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px" />
              </Column>
              <Column small={12} large={4}>
                <label className="h4" for="blur">Blur:</label>
                <input id="blur" type="range" name="blur" min="0" max="25" value="0" data-sizing="px" />
              </Column>
              <Column className="end" small={12} large={4}>
                <label className="h4" for="base">Base Color:</label>
                <input id="base" type="color" name="base" value="#6dbfbf" />
              </Column>
            </Row>

            <img src="{{root}}assets/img/aesthetic-geometry.svg" alt="" role="presentation" />
          </Column>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default updateCSSVariables;