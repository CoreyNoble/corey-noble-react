import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import geometryBackground from '../../../assets/img/aesthetic-geometry.svg'

import classes from './UpdateCSSVariables.module.scss';

const updateCSSVariables = props => {
  // // Get all of the inputs
  // // .querySelectorAll gives us a Node List, which is different than an Array and changes what operations we can use on it. For example, Array allows us to use Map, Filter and Reduce; whereas a Node List allows forEach.
  // const inputs = document.querySelectorAll('.controls input');

  // function handleUpdate() {
  //   // Store the suffix value if a [data-sizing] attribute is on the element, otherwise store ''.
  //   const suffix = this.dataset.sizing || '';
  //   // Set the style of each variable name using the new value and suffix
  //   document
  //     .getElementById('javascript30-3')
  //     .style.setProperty(`--${this.name}`, this.value + suffix);
  // }

  // // Listen for change and mouse move on each input. Node List forEach operation
  // inputs.forEach(input => input.addEventListener('change', handleUpdate)); // Arrow function
  // inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Update CSS Variables</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 3 | Update CSS Variables */}
      <Section background="black">
        <Row>
          <Column className={classes.UpdateCSSVariables} small={12}>
            <h2>Update CSS Variables with&nbsp;<span className="hl">JavaScript</span></h2>

            <Row className={classes.Controls}>
              <Column small={12} large={4}>
                <label className="h4" for="spacing">Spacing:</label>
                <input className={classes.Spacing} type="range" name="spacing" min="10" max="200" value="10" data-sizing="px" />
              </Column>
              <Column small={12} large={4}>
                <label className="h4" for="blur">Blur:</label>
                <input className={classes.Blur} type="range" name="blur" min="0" max="25" value="0" data-sizing="px" />
              </Column>
              <Column end small={12} large={4}>
                <label className="h4" for="base">Base Color:</label>
                <input className={classes.Base} type="color" name="base" value="#6dbfbf" />
              </Column>
            </Row>

            <img src={geometryBackground} alt="" role="presentation" />
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default updateCSSVariables;