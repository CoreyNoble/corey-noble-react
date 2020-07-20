import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import './FlexPanelGallery.module.scss';

const flexPanelGallery = props => {
  // Find all panels. Gives us a Node List.
  const panels = document.querySelectorAll('.panel');

  // Toggle Open/Close.
  function toggleOpen() {
    // Toggle (On/Off) a class of 'open' on this 'panel'.
    this.classList.toggle('open');
  }

  // When 'open' transition is done.
  function toggleActive(e) {
    // Specifically the transition property of: flex.
    if (e.propertyName.includes('flex')) {
      // Toggle (On/Off) a class of '.open-active' on this panel.
      this.classList.toggle('open-active');
    }
  }

  // Listen for a click on each panel, toggleOpen();
  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  // Listen on each panel for the transition to end, toggleActive(e);
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

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
            <h1>Flex Panel Gallery</h1>

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
                  <p>In this lesson I create an interactive panel&nbsp;gallery.</p>
                  <p>First I find all of the elements with a class of '.panel', I then <strong>listen</strong> for
                    the&nbsp;following:</p>
                  <ul>
                    <li>
                      <strong>'.panel'</strong>
                      <ul>
                        <li>'click', toggleOpen()</li>
                        <li>'transitionend', toggleActive()</li>
                      </ul>
                    </li>
                  </ul>
                  <p>In <strong>toggleOpen()</strong>&nbsp;- Toggle a class '.open' on the&nbsp;item.</p>
                  <p>In <strong>toggleActive(e)</strong>&nbsp;- Check if the animation that finished was the 'flex' animation
                    'e.propertyName.includes('flex')'. If so, I toggle the second class&nbsp;'.open-active'.</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="RzJvaJ"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 5 - Flex Panel Gallery">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/RzJvaJ/">
                        JavaScript30 - 5 - Flex Panel Gallery</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 5 | Flex Panel Gallery --> */}
      <div className="section dark-blue">
        <Row>
          <Column id="javascript30-5" small={12}>
            <div className="panels">
              <div className="panel panel1">
                <p>Hey</p>
                <p className="primary">Let's</p>
                <p>Dance</p>
              </div>
              <div className="panel panel2">
                <p>Give</p>
                <p className="primary">Take</p>
                <p>Receive</p>
              </div>
              <div className="panel panel3">
                <p>Experience</p>
                <p className="primary">It</p>
                <p>Today</p>
              </div>
              <div className="panel panel4">
                <p>Give</p>
                <p className="primary">All</p>
                <p>You&nbsp;can</p>
              </div>
              <div className="panel panel5">
                <p>Life</p>
                <p className="primary">In</p>
                <p>Motion</p>
              </div>
            </div>
          </Column>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default flexPanelGallery;