import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './MouseMoveShadow.module.scss';

const mouseMoveShadow = props => {
  // const hero = document.querySelector('.hero'); // parent <div>
  // const text = hero.querySelector('h2');
  // // How many pixels at its' most should it be stretched?
  // const walk = 50; // px

  // function shadow(e) {
  //   // Get the height and width of the hero element:
  //   // const {} = hero <- es6 destructuring
  //   // Same as:
  //   // const width = hero.offsetWidth
  //   // const height = hero.offsetHeight
  //   const { offsetWidth: width, offsetHeight: height } = hero;
  //   // Get the position of the cursor based on the event offsetX, offsetY.
  //   let { offsetX: x, offsetY: y } = e;
  //   // This gets us the x,y of cursor for the element that is being hovered.

  //   // If we are no longer hovering on hero, say we're hovering over the <h1>, the offset would change to use the <h1> origin offset values, rather than the hero's values. This checks for that scenario.
  //   if (this !== e.target) {
  //     // Normalize: Calculate X,Y for hero by adding the previous x,y values and <h1> offset values together.
  //     x = x + e.target.offsetLeft;
  //     y = y + e.target.offsetTop;
  //   }

  //   // This math makes sure we set a range (walk: 100, range: 50 to -50).
  //   // Math.round() whole numbers.
  //   const xWalk = Math.round((x / width) * walk - walk / 2);
  //   const yWalk = Math.round((y / height) * walk - walk / 2);

  //   console.log('xWalk: ', xWalk);
  //   console.log('yWalk: ', yWalk);

  //   // Dynamically setting the text-shadow position, based on xWalk (x), yWalk (y).
  //   // Each line here is a new shadow.
  //   text.style.textShadow = `
  //         ${xWalk}px ${yWalk}px 0 rgba(0,0,0,0.6)
  //     `;
  // }

  // // When mouse is moved on hero, shadow(e)
  // hero.addEventListener('mousemove', shadow);

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Mouse Move Shadow</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 16 | Mouse Move Shadow */}
      <Section classProp={classes.MouseMoveShadow}>
        <Row>
          <Column small={12}>
            <div className="hero">
              <h2 contenteditable><span role="img" aria-label="Fire Emoji">🔥</span></h2>
            </div>
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default mouseMoveShadow;