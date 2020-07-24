import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './EventCapturePropogationBubblingAndOnce.module.scss';

const eventCapturePropogationBubblingAndOnce = props => {
  // // All <divs>.
  // const divs = document.querySelectorAll('div');
  // // The <button>.
  // const button = document.querySelector('button');

  // // Event Capture:
  // //// When we make a click, the event ripples top->bottom from the document (root), and CAPTURES each element as it makes its' way to the element that fired the event.
  // // + Bubbling:
  // //// When the Event Capture is complete, it then starts to bubble up (bottom->top). Starting at the current DOM <element>, then proceeding on to its' the parent <element>, one at a time, until it gets back up to the document level (root).
  // function logText(e) {
  //   // For example:
  //   // Clicking on <div className="three"> returns 'three', 'two', 'one' when we're looking for the classList on the <div>.
  //   console.log(this.classList.value);
  //   // Log the <element>.
  //   // console.log(this);

  //   // Propagation:
  //   //// Stop bubbling (bottom->top).
  //   // e.stopPropagation();
  // }

  // // Listen for a click on each <div>, logText(). Pass a third argument which is an options object{}.
  // divs.forEach(div =>
  //   div.addEventListener('click', logText, {
  //     // Options.
  //     // Can set CAPTURE to true if you want to fire the event when bubbling first encounters the <element> from the top->bottom.
  //     capture: false, // false default
  //     // Only fire the event once.
  //     // Unbinds itself. Same thing as 'removeEventListener'.
  //     once: true
  //   })
  // );

  // // Once:
  // //// Only fire this event once.
  // button.addEventListener(
  //   'click',
  //   () => {
  //     // Event
  //     alert('Clicked Once');
  //   },
  //   {
  //     // Only fire the event once.
  //     // Unbinds itself. Same thing as 'removeEventListener'.
  //     once: true
  //   }
  // );

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/development/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Event Capture, Propagation, Bubbling and Once</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 25 | Event Capture, Propagation, Bubbling and Once */}
      <Section id="javascript30-25">
        <Row>
          <Column small={12}>
            <h2 className="h3">One</h2>
            <div className="one">
              <h2 className="h3">Two</h2>
              <div className="two">
                <h2 className="h3">Three</h2>
                <div className="three">
                </div>
              </div>
            </div>

            <button>Only fires once</button>
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default eventCapturePropogationBubblingAndOnce;