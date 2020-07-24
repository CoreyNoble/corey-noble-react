import React, { useEffect, useRef } from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './Clock.module.scss';

const Clock = props => {
  useEffect(() => {
    // Every second, run setDate()
    setInterval(setDate, 1000);
  });

  // Get Second, Minute, Hour hands
  const secondHand = useRef();
  const minuteHand = useRef();
  const hourHand = useRef();

  const setDate = () => {
    // Current time
    const now = new Date();
    // Seconds in current time
    const seconds = now.getSeconds();
    // Seconds degree of rotation +90 to account for 12 o'clock rotation offset
    const secondsDegrees = (seconds / 60) * 360 + 90;
    // Minutes in current time
    const minutes = now.getMinutes();
    // Minutes degree of rotation
    const minutesDegrees = (minutes / 60) * 360 + 90;
    // Hours in current time
    const hours = now.getHours();
    // Hours degree of rotation
    const hoursDegrees = (hours / 12) * 360 + 90;

    // rotate each hand (Seconds, Minutes, Hours)
    secondHand.current.style.transform = `rotate(${secondsDegrees}deg)`; // Injecting a variable
    minuteHand.current.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.current.style.transform = `rotate(${hoursDegrees}deg)`;
  };
  
  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Clock</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 2 | Clock */}
      <Section classProp={classes.ClockSection}>
        <Row>
          <Column small={12}>
            <div className={classes.Clock}>
              <div className={classes.ClockFace}>
                <div 
                  className={`${classes.Hand} ${classes.HourHand}`}
                  ref={hourHand}
                ></div>
                <div 
                  className={`${classes.Hand} ${classes.MinuteHand}`}
                  ref={minuteHand}
                ></div>
                <div 
                  className={`${classes.Hand} ${classes.SecondHand}`}
                  ref={secondHand}
                ></div>
              </div>
            </div>
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default Clock;