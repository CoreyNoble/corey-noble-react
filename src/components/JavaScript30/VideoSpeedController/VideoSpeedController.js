import React from 'react';

import { Row, Column } from 'react-foundation';

import './VideoSpeedController.module.scss';

const videoSpeedController = props => {
  // Parent <div>
  const speed = document.querySelector('.speed');
  // Child <div>
  const bar = speed.querySelector('.speed-bar');
  // <video>
  const video = document.querySelector('.flex');

  // Handle moving the speed bar. Pass the event (e).
  // Using an es5 function() because we need 'this' to be equal to the parent <div>.
  function handleMove(e) {
    // Set the Y position, ensuring we anchor it to the parent <div> 'this'.
    const x = e.pageX - this.offsetLeft;
    // Get the percentage filled by dividing y with the height of the parent <div> 'this'.
    const percent = x / this.offsetWidth;
    // Min/Max playback multiplier.
    const min = 0.4;
    const max = 4;
    // Getting a height value for the 'bar'.
    // Math.round() to get a rounded percentage. (percent * 100) to make it a whole number (2, not 0.02).
    const width = Math.round(percent * 100) + '%';
    // Calculate the playbackRate.
    // (max - min) + min: Getting the lower and upper bounds.
    // This ensures the playbackRate isn't a value between 0 and 1, instead, it is a value range between the 'min' and 'max', multiplied by 'percentage'.
    const playbackRate = percent * (max - min) + min;

    // Set the height of the bar, equal to 'height'.
    bar.style.width = width;
    // Set the text of the bar, Using the 'playbackRate' value.
    bar.textContent = playbackRate.toFixed(2) + 'x';
    // Play the video at the speed determined by 'playbackRate'.
    // Default play speed = 1.
    video.playbackRate = playbackRate;
  }

  // When moving the mouse over the parent <div>, handleMove().
  speed.addEventListener('mousemove', handleMove);

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
            <h1>Video Speed Controller</h1>

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
                  <p>In this lesson I create a slider interface that manipulates the &lt;video&gt;&nbsp;speed.</p>
                  <p>First I get the parent &lt;div&gt; 'speed', child &lt;div&gt; 'bar' and &lt;video&gt;
                    element&nbsp;'video'.</p>
                  <p>Then I <strong>listen</strong> for the 'mousemove' event and run&nbsp;handleMove(e).</p>
                  <p>In <strong>handleMove(e)</strong> - 'this' being 'speed', first&nbsp;set:</p>
                  <ul>
                    <li>'y' to (e.pageY&nbsp;- this.offsetTop).</li>
                    <li>'percent' to (y&nbsp;/ this.offsetHeight)</li>
                    <li>'min' and 'max' values which serve as the range for the&nbsp;controller</li>
                    <li>'height' equal to (percent&nbsp;*&nbsp;100)</li>
                    <li>'playbackRate' to (percent&nbsp;* (max&nbsp;-&nbsp;min) +&nbsp;min) which ensures the value isn't
                      between 0 and 1, instead it is a value range between the 'min' and 'max', multiplied by
                      the&nbsp;percentage</li>
                  </ul>
                  <p>Finally set the 'bar.style.height' to 'height'. Then set the 'bar.textContet' to 'playbackRate' and the
                    'video.playbackRate' to&nbsp;'playbackRate'.</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="GbGzxz"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 28 - Video Speed Controller">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/GbGzxz/">
                        JavaScript30 - 28 - Video Speed Controller</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 28 | Video Speed Controller --> */}
      <div id="javascript30-28" className="section">
        <Row>
          <Column small={12}>
            <div className="wrapper">
              <video className="flex"
                src="{{root}}assets/video/javascript30/11-custom-video-player/11-custom-video-player-example.mp4" loop
                controls></video>
              <div className="speed">
                <div className="speed-bar">1×</div>
              </div>
            </div>
          </Column>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default videoSpeedController;