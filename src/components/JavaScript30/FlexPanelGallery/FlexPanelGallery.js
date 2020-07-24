import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './FlexPanelGallery.module.scss';

const flexPanelGallery = props => {
  // // Find all panels. Gives us a Node List.
  // const panels = document.querySelectorAll('.panel');

  // // Toggle Open/Close.
  // function toggleOpen() {
  //   // Toggle (On/Off) a class of 'open' on this 'panel'.
  //   this.classList.toggle('open');
  // }

  // // When 'open' transition is done.
  // function toggleActive(e) {
  //   // Specifically the transition property of: flex.
  //   if (e.propertyName.includes('flex')) {
  //     // Toggle (On/Off) a class of '.open-active' on this panel.
  //     this.classList.toggle('open-active');
  //   }
  // }

  // // Listen for a click on each panel, toggleOpen();
  // panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  // // Listen on each panel for the transition to end, toggleActive(e);
  // panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Flex Panel Gallery</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 5 | Flex Panel Gallery */}
      <Section background="dark-blue">
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
      </Section>
    </React.Fragment>
  );
};

export default flexPanelGallery;