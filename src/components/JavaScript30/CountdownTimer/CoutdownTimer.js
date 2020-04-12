import React from 'react';
import classes from './CoutdownTimer.module.scss';

const coutdownTimer = props => {
  // Initialize the countdown.
  let countdown;
  // The timer element. <h1>.
  const timerDisplay = document.querySelector('.display__time-left');
  // The end time element. <p>.
  const endTime = document.querySelector('.display__end-time');
  // all elements with 'data-time' attributes.
  const buttons = document.querySelectorAll('[data-time]');

  // Run the timer, take in the amount of seconds for that timer.
  function timer(seconds) {
    // Clear any existing timers.
    clearInterval(countdown);

    // Get the current timestamp in milliseconds.
    const now = Date.now();
    // Then: Now + Seconds, * 1000 to convert from milliseconds into seconds.
    const then = now + seconds * 1000;

    // Running this immediately once.
    // Display the timer.
    displayTimeLeft(seconds);
    // Display the end time.
    displayEndTime(then);

    // Counting down at a set interval.
    countdown = setInterval(() => {
      // The number of seconds that are left, rounded down using 'then' - the current time, /1000 to convert into seconds.
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      // Are there no more seconds left?
      if (secondsLeft < 0) {
        // Clear the interval.
        clearInterval(countdown);
        // Exit.
        return;
      }
      // Display the time left.
      displayTimeLeft(secondsLeft);
    }, 1000); // The interval.
  }

  // Display the time left.
  function displayTimeLeft(seconds) {
    // Calculate the number of minutes (seconds / 60) to a rounded number (Math.floor()).
    const minutes = Math.floor(seconds / 60);
    // Remainder number of seconds after we take out the minutes (seconds % 60).
    const remainderSeconds = seconds % 60;
    // The time we display. minutes:remainderSeconds.
    // If remainderSeconds is less than 10, prefix a '0'. Otherwise, no prefix ''. (${remainderSeconds < 10 ? '0' : ''})
    // This is called a short-hand turnery operator.
    const display = `${minutes}:${
      remainderSeconds < 10 ? '0' : ''
    }${remainderSeconds}`;
    // Add 'display' to the Page Title.
    document.title = display + ' | Countdown Timer | JavaScript30 | Corey Noble';
    // Add 'display' to the timer <h1>.
    timerDisplay.textContent = display;
  }

  // Display the ending timestamp. Takes in a timestamp.
  function displayEndTime(timestamp) {
    // Create a new date object 'end' from the timestamp.
    const end = new Date(timestamp);
    // Get the hours.
    const hour = end.getHours();
    // Convert from a 24hr to 12hr.
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    // Get the minutes.
    const minutes = end.getMinutes();
    // The end time element's textContent. <p>. Using the 'adjustedHour', and the same short-hand turnery operator that pre-fixes '0' if 'minutes' is < 10. Also displaying 'minutes'.
    endTime.textContent = `Be Back At ${adjustedHour}:${
      minutes < 10 ? '0' : ''
    }${minutes}`;
  }

  // Starting the timer.
  function startTimer() {
    // Setting 'seconds' as an integer using the data-attribute on the element (this).
    const seconds = parseInt(this.dataset.time);
    // Run the timer. Pass it 'seconds'.
    timer(seconds);
  }

  // for each 'button' in 'buttons', Listen for a click, startTimer().
  buttons.forEach(button => button.addEventListener('click', startTimer));
  // <form>. document.customForm will find an element with a name="customForm".
  // When the form is 'submit'.
  document.customForm.addEventListener('submit', function(e) {
    // Stops the form 'submit' from refreshing the page.
    e.preventDefault();
    // Get the minutes from the <form>
    const mins = this.minutes.value;
    // Convert the minutes to seconds (mins * 60) for timer(). Run timer().
    timer(mins * 60);
    // Clear the value from the <form>.
    this.reset();
  });

  return (
    <React.Fragment>
      {/* <!-- Introduction --> */}
      <div class="js30-intro section white">
        <div class="row">
          <div class="small-12 column">
            {/* <!-- Back CTA --> */}
            <p class="back-cta"><small><strong><a href="{{root}}portfolio/development/javascript30.html"
                    title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small>
            </p>

            {/* <!-- Title --> */}
            <h1>Countdown Timer</h1>

            {/* <!-- Accordion --> */}
            <ul class="accordion" data-accordion data-allow-all-closed="true">
              <li class="accordion-item" data-accordion-item="">
                {/* <!-- Title --> */}
                <a href="#" class="accordion-title" aria-controls="project-synopsis" role="tab"  aria-expanded="false"
                  aria-selected="false">
                  <h2 class="h5">Project Synopsis and&nbsp;Code</h2>
                </a>
                {/* <!-- Content --> */}
                <div class="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby="Project Synopsis and Code"
                  aria-hidden="true" id="project-synopsis" style="display: none;">
                  <p>In this lesson I create a countdown timer&nbsp;application.</p>
                  <p>First I initialize a 'countdown' variable. Then I get the following elements: 'timerDisplay', 'endTime',
                    [data-time]. Then I <strong>listen</strong> for the following&nbsp;events:</p>
                  <ul>
                    <li>
                      <strong>[data-time]</strong>
                      <ul>
                        <li>'click', startTimer()</li>
                      </ul>
                    </li>
                    <li>
                      <strong>document.customForm</strong>
                      <ul>
                        <li>'submit', function(e)&nbsp;{}</li>
                        <li>First prevent the event default to ensure the page doesn't refresh (e.prefentDefault();). Then set
                          'mins' to 'this.minutes.value' and run timer(mins *&nbsp;60) to send the minutes as seconds into the
                          timer()&nbsp;function.</li>
                      </ul>
                    </li>
                  </ul>
                  <p>In <strong>startTimer()</strong>&nbsp;- Set 'seconds' to the [data-time] value
                    (parseInt(this.dataset.time)). Then run&nbsp;timer(seconds).</p>
                  <p>In <strong>timer(seconds)</strong>&nbsp;- First clearInterval(countdown). Next set 'now' and 'then', both
                    are in&nbsp;milliseconds.</p>
                  <p>Then run <strong>displayTimeLeft(seconds)</strong> and <strong>displayEndTime(then)</strong>. Finally set
                    the&nbsp;<strong>'countdown'</strong>.</p>
                  <ul>
                    <li>In <strong>displayTimeLeft(seconds)</strong>&nbsp;- Get the 'minutes' (seconds&nbsp;/&nbsp;60),
                      'remainderSeconds' (seconds&nbsp;%&nbsp;60), then 'display' the 'minutes' and 'remainderSeconds' in a
                      string. Prepend a '0' if 'remainderSeconds &lt; 10. Finally, output 'display' to the 'document.title'
                      and to&nbsp;'timerDisplay'.</li>
                    <li>In <strong>displayEndTime(timestamp)</strong>&nbsp;- Create a new date object 'end' from the passed in
                      'timestamp'. From that get 'hours' (end.getHours()). Then calculate 'adjustedHour' to adjust to a 12hr
                      clock. Next get 'minutes' (end.getMinutes()). Finally output the end time to&nbsp;'endTime.textContent'.
                    </li>
                    <li>In <strong>'countdown'</strong>&nbsp;- Every second, set 'secondsLeft' (Math.round((then
                      -&nbsp;Date.now()) /&nbsp;1000). Check if there are any 'secondsLeft', If so, clearInterval(countdown).
                      Either way, displayTimeLeft(secondsLeft).</li>
                  </ul>

                  {/* <!-- CodePen --> */}
                  <p class="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="WqyPJb"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 29 - Countdown Timer">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/WqyPJb/">
                        JavaScript30 - 29 - Countdown Timer</a> by Corey Noble (<a
                        href="https://codepen.io/CoreyNoble">@CoreyNoble</a>)
                      on <a href="https://codepen.io">CodePen</a>.</span>
                  </p>
                  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- JavaScript30 | 29 | Countdown Timer --> */}
      <div id="javascript30-29" class="section">
        <div class="row">
          <div class="small-12 column">
            <div class="timer">
              <div class="timer__controls">
                <div class="row" data-equalizer>
                  <div class="timer__control small-6 large-2 columns" data-equalizer-watch>
                    <button data-time="20" class="timer__button">20 Secs</button>
                  </div>
                  <div class="timer__control small-6 large-2 columns" data-equalizer-watch>
                    <button data-time="300" class="timer__button">Work 5</button>
                  </div>
                  <div class="timer__control small-6 large-2 columns" data-equalizer-watch>
                    <button data-time="900" class="timer__button">Quick 15</button>
                  </div>
                  <div class="timer__control small-6 large-2 columns" data-equalizer-watch>
                    <button data-time="1200" class="timer__button">Snack 20</button>
                  </div>
                  <div class="timer__control small-6 large-2 columns" data-equalizer-watch>
                    <button data-time="3600" class="timer__button">Lunch Break</button>
                  </div>
                  <div class="timer__control small-6 large-2 columns end" data-equalizer-watch>
                    <div class="contact-form">
                      <form name="customForm" id="custom">
                        <input type="text" name="minutes" placeholder="Enter Minutes" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="display">
                <h2 class="display__time-left">0:00</h2>
                <p class="display__end-time">Should be back</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default coutdownTimer;