import React from 'react';
import classes from './Accordion.scss';

const accordion = props => {
  return (
    <ul class="accordion" data-accordion data-allow-all-closed="true">
        <li class="accordion-item" data-accordion-item="">
          {/* Title */}
          <a href="#" class="accordion-title" aria-controls="project-synopsis" role="tab"  aria-expanded="false"
            aria-selected="false">
            <h2 class="h5">Project Synopsis and&nbsp;Code</h2>
          </a>
          {/* Content */}
          <div class="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby="Project Synopsis and Code"
            aria-hidden="true" id="project-synopsis" style="display: none;">
            <p>In this lesson I create an analog clock displays the users'&nbsp;time.</p>
            <p>To start the clock I run a function setDate() every second (setInterval(setDate, 1000)).</p>
            <p>In <strong>setDate()</strong>&nbsp;- First get the current time. Using the current time also get the time
              in seconds, minutes and hours. Then calculate the degree of rotation for each hand, offset by +90 to
              ensure the rotation of the element starts&nbsp;north.</p>
            <p>Finally, query the 'document' for each hand element and rotate each hand using the matching degree value.
              I do this by using es6 template strings to inject the variable into the elements' 'style' attribute
              (secondHand.style.transform = `rotate(${secondsDegrees}deg)`).</p>

            {/* CodePen */}
            <p class="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
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
  );
};

export default accordion;