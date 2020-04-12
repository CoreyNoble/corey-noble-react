import React from 'react';
import './Clock.module.scss';

const clock = props => {
  // Get Second, Minute, Hour hands
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
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
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // Injecting a variable
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  // Every second, run setDate()
  setInterval(setDate, 1000);
  
  return (
    <React.Fragment>
      {/* <!-- Introduction --> */}
      <div className="js30-intro section white">
        <div className="row">
          <div className="small-12 column">
            {/* <!-- Back CTA --> */}
            <p className="back-cta"><small><strong><a href="{{root}}portfolio/development/javascript30.html"
                    title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small>
            </p>

            {/* <!-- Title --> */}
            <h1>Clock</h1>

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
                  <p>In this lesson I create an analog clock displays the users'&nbsp;time.</p>
                  <p>To start the clock I run a function setDate() every second (setInterval(setDate, 1000)).</p>
                  <p>In <strong>setDate()</strong>&nbsp;- First get the current time. Using the current time also get the time
                    in seconds, minutes and hours. Then calculate the degree of rotation for each hand, offset by +90 to
                    ensure the rotation of the element starts&nbsp;north.</p>
                  <p>Finally, query the 'document' for each hand element and rotate each hand using the matching degree value.
                    I do this by using es6 template strings to inject the variable into the elements' 'style' attribute
                    (secondHand.style.transform = `rotate(secondsDegrees deg)`).</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="ewKxmJ"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 2 - Clock">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/ewKxmJ/">
                        JavaScript30 - 2 - Clock</a> by Corey Noble (<a href="https://codepen.io/CoreyNoble">@CoreyNoble</a>)
                      on <a href="https://codepen.io">CodePen</a>.</span>
                  </p>
                  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- JavaScript30 | 2 | Clock --> */}
      <div id="javascript30-2" className="section">
        <div className="row">
          <div className="small-12 column">
            <div className="clock">
              <div className="clock-face">
                <div className="hand hour-hand"></div>
                <div className="hand minute-hand"></div>
                <div className="hand second-hand"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default clock;