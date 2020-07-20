import React from 'react';

import { Row, Column } from 'react-foundation';

import './EventCapturePropogationBubblingAndOnce.module.scss';

const eventCapturePropogationBubblingAndOnce = props => {
  // All <divs>.
  const divs = document.querySelectorAll('div');
  // The <button>.
  const button = document.querySelector('button');

  // Event Capture:
  //// When we make a click, the event ripples top->bottom from the document (root), and CAPTURES each element as it makes its' way to the element that fired the event.
  // + Bubbling:
  //// When the Event Capture is complete, it then starts to bubble up (bottom->top). Starting at the current DOM <element>, then proceeding on to its' the parent <element>, one at a time, until it gets back up to the document level (root).
  function logText(e) {
    // For example:
    // Clicking on <div className="three"> returns 'three', 'two', 'one' when we're looking for the classList on the <div>.
    console.log(this.classList.value);
    // Log the <element>.
    // console.log(this);

    // Propagation:
    //// Stop bubbling (bottom->top).
    // e.stopPropagation();
  }

  // Listen for a click on each <div>, logText(). Pass a third argument which is an options object{}.
  divs.forEach(div =>
    div.addEventListener('click', logText, {
      // Options.
      // Can set CAPTURE to true if you want to fire the event when bubbling first encounters the <element> from the top->bottom.
      capture: false, // false default
      // Only fire the event once.
      // Unbinds itself. Same thing as 'removeEventListener'.
      once: true
    })
  );

  // Once:
  //// Only fire this event once.
  button.addEventListener(
    'click',
    () => {
      // Event
      alert('Clicked Once');
    },
    {
      // Only fire the event once.
      // Unbinds itself. Same thing as 'removeEventListener'.
      once: true
    }
  );

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
            <h1>Event Capture, Propagation, Bubbling and Once</h1>

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
                  <p>In this lesson I learned about Event capture, Propagation, Bubbling, and&nbsp;Once.</p>
                  <p><strong>Event Capture</strong>&nbsp;- When the user makes a 'click', the event ripples top to bottom from
                    the document&nbsp;(root), and CAPTURES each element as it makes its' way to the element that fired
                    the&nbsp;event.</p>
                  <p><strong>Bubbling</strong>&nbsp;- When the Event Capture is complete, it then starts to bubble up
                    (bottom&nbsp;to&nbsp;top). Starting at the current DOM &lt;element&gt;, then proceeding on to its' the
                    parent &lt;element&gt;, one at a time, until it gets back up to the document level&nbsp;(root).</p>
                  <p>In this project I <strong>listen</strong> on each &lt;div&gt; for 'click' and run a function that logs
                    the class of that &lt;div&gt;. The output shows that when clicking on '.three', 'this' bubbles 'three',
                    'two', 'one' which shows that the event is moving up the chain of &lt;div&gt; nodes.</p>
                  <p><strong>Propagation</strong>&nbsp;- What continues the chain for Bubbling (bottom&nbsp;to&nbsp;top). To
                    stop Propagation on the event use (e.stopPropagation()).</p>
                  <p><strong>Once</strong>&nbsp;- Only fire this event once. In this project I <strong>listen</strong> for a
                    'click' event on the &lt;button&gt;, and run a function that alerts the user. I use (once: true) to ensure
                    the event only fires one&nbsp;time.</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="wLXNpV"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 25 - Event Capture, Propagation, Bubbling and Once">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/wLXNpV/">
                        JavaScript30 - 25 - Event Capture, Propagation, Bubbling and Once</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 25 | Event Capture, Propagation, Bubbling and Once --> */}
      <div id="javascript30-25" className="section">
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
      </div>
    </React.Fragment>
  );
};

export default eventCapturePropogationBubblingAndOnce;