import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './CoutdownTimer.module.scss';

const coutdownTimer = props => {
  // // Initialize the countdown.
  // let countdown;
  // // The timer element. <h1>.
  // const timerDisplay = document.querySelector('.display__time-left');
  // // The end time element. <p>.
  // const endTime = document.querySelector('.display__end-time');
  // // all elements with 'data-time' attributes.
  // const buttons = document.querySelectorAll('[data-time]');

  // // Run the timer, take in the amount of seconds for that timer.
  // function timer(seconds) {
  //   // Clear any existing timers.
  //   clearInterval(countdown);

  //   // Get the current timestamp in milliseconds.
  //   const now = Date.now();
  //   // Then: Now + Seconds, * 1000 to convert from milliseconds into seconds.
  //   const then = now + seconds * 1000;

  //   // Running this immediately once.
  //   // Display the timer.
  //   displayTimeLeft(seconds);
  //   // Display the end time.
  //   displayEndTime(then);

  //   // Counting down at a set interval.
  //   countdown = setInterval(() => {
  //     // The number of seconds that are left, rounded down using 'then' - the current time, /1000 to convert into seconds.
  //     const secondsLeft = Math.round((then - Date.now()) / 1000);
  //     // Are there no more seconds left?
  //     if (secondsLeft < 0) {
  //       // Clear the interval.
  //       clearInterval(countdown);
  //       // Exit.
  //       return;
  //     }
  //     // Display the time left.
  //     displayTimeLeft(secondsLeft);
  //   }, 1000); // The interval.
  // }

  // // Display the time left.
  // function displayTimeLeft(seconds) {
  //   // Calculate the number of minutes (seconds / 60) to a rounded number (Math.floor()).
  //   const minutes = Math.floor(seconds / 60);
  //   // Remainder number of seconds after we take out the minutes (seconds % 60).
  //   const remainderSeconds = seconds % 60;
  //   // The time we display. minutes:remainderSeconds.
  //   // If remainderSeconds is less than 10, prefix a '0'. Otherwise, no prefix ''. (${remainderSeconds < 10 ? '0' : ''})
  //   // This is called a short-hand turnery operator.
  //   const display = `${minutes}:${
  //     remainderSeconds < 10 ? '0' : ''
  //   }${remainderSeconds}`;
  //   // Add 'display' to the Page Title.
  //   document.title = display + ' | Countdown Timer | JavaScript30 | Corey Noble';
  //   // Add 'display' to the timer <h1>.
  //   timerDisplay.textContent = display;
  // }

  // // Display the ending timestamp. Takes in a timestamp.
  // function displayEndTime(timestamp) {
  //   // Create a new date object 'end' from the timestamp.
  //   const end = new Date(timestamp);
  //   // Get the hours.
  //   const hour = end.getHours();
  //   // Convert from a 24hr to 12hr.
  //   const adjustedHour = hour > 12 ? hour - 12 : hour;
  //   // Get the minutes.
  //   const minutes = end.getMinutes();
  //   // The end time element's textContent. <p>. Using the 'adjustedHour', and the same short-hand turnery operator that pre-fixes '0' if 'minutes' is < 10. Also displaying 'minutes'.
  //   endTime.textContent = `Be Back At ${adjustedHour}:${
  //     minutes < 10 ? '0' : ''
  //   }${minutes}`;
  // }

  // // Starting the timer.
  // function startTimer() {
  //   // Setting 'seconds' as an integer using the data-attribute on the element (this).
  //   const seconds = parseInt(this.dataset.time);
  //   // Run the timer. Pass it 'seconds'.
  //   timer(seconds);
  // }

  // // for each 'button' in 'buttons', Listen for a click, startTimer().
  // buttons.forEach(button => button.addEventListener('click', startTimer));
  // // <form>. document.customForm will find an element with a name="customForm".
  // // When the form is 'submit'.
  // document.customForm.addEventListener('submit', function(e) {
  //   // Stops the form 'submit' from refreshing the page.
  //   e.preventDefault();
  //   // Get the minutes from the <form>
  //   const mins = this.minutes.value;
  //   // Convert the minutes to seconds (mins * 60) for timer(). Run timer().
  //   timer(mins * 60);
  //   // Clear the value from the <form>.
  //   this.reset();
  // });

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/development/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Countdown Timer</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 29 | Countdown Timer */}
      <Section id="javascript30-29">
        <Row>
          <Column small={12}>
            <div className="timer">
              <div className="timer__controls">
                <Row>
                  <Column className="timer__control" small={6} large={2}>
                    <button data-time="20" className="timer__button">20 Secs</button>
                  </Column>
                  <Column className="timer__control" small={6} large={2}>
                    <button data-time="300" className="timer__button">Work 5</button>
                  </Column>
                  <Column className="timer__control" small={6} large={2}>
                    <button data-time="900" className="timer__button">Quick 15</button>
                  </Column>
                  <Column className="timer__control" small={6} large={2}>
                    <button data-time="1200" className="timer__button">Snack 20</button>
                  </Column>
                  <Column className="timer__control" small={6} large={2}>
                    <button data-time="3600" className="timer__button">Lunch Break</button>
                  </Column>
                  <Column className="timer__control" end small={6} large={2}>
                    <div className="contact-form">
                      <form name="customForm" id="custom">
                        <input type="text" name="minutes" placeholder="Enter Minutes" />
                      </form>
                    </div>
                  </Column>
                </Row>
              </div>
              <div className="display">
                <h2 className="display__time-left">0:00</h2>
                <p className="display__end-time">Should be back</p>
              </div>
            </div>
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default coutdownTimer;