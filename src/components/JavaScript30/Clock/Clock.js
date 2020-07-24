import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './Clock.module.scss';

const clock = props => {
  // // Get Second, Minute, Hour hands
  // const secondHand = document.querySelector('.second-hand');
  // const minuteHand = document.querySelector('.minute-hand');
  // const hourHand = document.querySelector('.hour-hand');

  // function setDate() {
  //   // Current time
  //   const now = new Date();
  //   // Seconds in current time
  //   const seconds = now.getSeconds();
  //   // Seconds degree of rotation +90 to account for 12 o'clock rotation offset
  //   const secondsDegrees = (seconds / 60) * 360 + 90;
  //   // Minutes in current time
  //   const minutes = now.getMinutes();
  //   // Minutes degree of rotation
  //   const minutesDegrees = (minutes / 60) * 360 + 90;
  //   // Hours in current time
  //   const hours = now.getHours();
  //   // Hours degree of rotation
  //   const hoursDegrees = (hours / 12) * 360 + 90;

  //   // rotate each hand (Seconds, Minutes, Hours)
  //   secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // Injecting a variable
  //   minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  //   hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  // }

  // // Every second, run setDate()
  // setInterval(setDate, 1000);
  
  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/development/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Clock</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 2 | Clock */}
      <Section id="javascript30-2">
        <Row>
          <Column small={12}>
            <div className="clock">
              <div className="clock-face">
                <div className="hand hour-hand"></div>
                <div className="hand minute-hand"></div>
                <div className="hand second-hand"></div>
              </div>
            </div>
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default clock;