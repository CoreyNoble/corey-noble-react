import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import './CustomVideoPlayer.module.scss';

const customVideoPlayer = props => {
  /* Elements */
  const player = document.querySelector('.player'); // parent <div>
  const video = player.querySelector('.viewer'); // <video>
  const progress = player.querySelector('.progress'); // progress container
  const progressBar = player.querySelector('.progress__filled'); // progress bar
  const toggle = player.querySelector('.toggle'); // <button> ►/❚❚
  const skipButtons = player.querySelectorAll('[data-skip]'); // anything with a 'data-skip' attribute
  const ranges = player.querySelectorAll('.player__slider'); // all sliders (volume, playback rate)

  /* Functions */
  // Pause/Play the <video>
  function togglePlay() {
    // if (video.paused){
    //     video.play();
    // } else {
    //     video.pause();
    // }

    // If the video is paused, set the video to playing. If the video is playing, set the video to paused.
    const method = video.paused ? 'play' : 'pause';
    // Append the result to video.
    video[method]();
  }

  // Toggling the ►/❚❚ characters
  function updateButton() {
    // If the <video> (this) is paused, set icon to ►, if the video is playing, set icon to ❚❚.
    const icon = this.paused ? '►' : '❚ ❚';
    // Change the text inside of <button> into the icon text.
    toggle.textContent = icon;
  }

  // Skip to a new time in the video
  function skip() {
    // New video time calculated using the 'data'skip' value (+/-).
    video.currentTime += parseFloat(this.dataset.skip);
  }

  // Updating slider values
  function handleRangeUpdate() {
    // this.name (volume, playback rate) = this.value (current value of the slider).
    video[this.name] = this.value;
  }

  // Update progress bar
  function handleProgress() {
    // Calculate current percentage of progress.
    const percent = (video.currentTime / video.duration) * 100;
    // Setting the size of the progress bar using the percent value.
    progressBar.style.flexBasis = `${percent}%`;
  }

  // mousedown event on the progress container
  function scrub(e) {
    // Based on the event received, Figures out the time we need to scrub to by: grabbing the click position 'e.offsetX' divided by the width of the progress container, times the duration of the video.
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    // Set the video time to the scrubTime.
    video.currentTime = scrubTime;
  }

  /* Event Listeners */
  // On click, Play/Pause.
  video.addEventListener('click', togglePlay);
  // On video playing, Update button (►/❚❚).
  video.addEventListener('play', updateButton);
  // On video paused, Update button (►/❚❚).
  video.addEventListener('pause', updateButton);
  // On Time Update, Update the progress bar.
  video.addEventListener('timeupdate', handleProgress);
  // On <button> click (►/❚❚), Play/Pause.
  toggle.addEventListener('click', togglePlay);
  // When an element with a 'data-skip' attribute is clicked, skip().
  skipButtons.forEach(button => button.addEventListener('click', skip));
  // When the slider changes, handleRangeUpdate().
  ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
  // When the mouse moves on the slider, handleRangeUpdate().
  ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

  // Progress bar events
  // Mousedown initially false
  let mousedown = false;
  // When clicked, begin to scrub().
  progress.addEventListener('click', scrub);
  // When mouse is moving, pass the event into a function. If the mouse is also down, scrub(e).
  progress.addEventListener('mousemove', e => mousedown && scrub(e));
  // When the mouse is down, set 'mousedown' to true.
  progress.addEventListener('mousedown', () => (mousedown = true));
  // When the mouse is up, set 'mousedown' to false.
  progress.addEventListener('mouseup', () => (mousedown = false));

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
            <h1>Custom Video Player</h1>

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
                  <p>In this lesson I create a custom video&nbsp;player.</p>
                  <p>First I grab all of the required elements and put them into variables. I <strong>listen</strong> for the
                    following&nbsp;events:</p>
                  <ul>
                    <li>
                      <strong>&lt;video&gt;</strong>
                      <ul>
                        <li>'click', togglePlay()</li>
                        <li>'play', updateButton()</li>
                        <li>'pause', updateButton()</li>
                        <li>'timeupdate', handleProgress()</li>
                      </ul>
                    </li>
                    <li>
                      <strong>.toggle</strong>
                      <ul>
                        <li>'click', togglePlay()</li>
                      </ul>
                    </li>
                    <li>
                      <strong>[data-skip]</strong>
                      <ul>
                        <li>'click', skip()</li>
                      </ul>
                    </li>
                    <li>
                      <strong>.player__slider</strong>
                      <ul>
                        <li>'change', handleRangeUpdate()</li>
                        <li>'mousemove', handleRangeUpdate()</li>
                      </ul>
                    </li>
                    <li>
                      <strong>.progress</strong>
                      <ul>
                        <li>'click', scrub(e). Here I scrub the video to the clicked event&nbsp;location.</li>
                        <li>'mousemove', (e)&nbsp;=> mousedown&nbsp;&&&nbsp;scrub(e). Here I'm making sure to only scrub the
                          video while the mouse is down and&nbsp;moving.</li>
                        <li>'mousedown', ()&nbsp;=> mousedown&nbsp;=&nbsp;true</li>
                        <li>'mouseup', ()&nbsp;=> mousedown&nbsp;=&nbsp;false</li>
                      </ul>
                    </li>
                  </ul>
                  <br />
                  <p><strong>Functions</strong></p>
                  <ul>
                    <li>
                      <strong>togglePlay()</strong>
                      <ul>
                        <li>If the video is paused, set the video to playing, if the video is playing, set the video
                          to&nbsp;paused.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>updateButton()</strong>
                      <ul>
                        <li>If the video is paused, set the text to '►', if the video is playing, set the text to&nbsp;'❚❚'.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>skip()</strong>
                      <ul>
                        <li>Calculate a new 'currentTime' on the video using the value from the [data-skip]&nbsp;attribute.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>handleRangeUpdate()</strong>
                      <ul>
                        <li>Handle updated slider input values. Set the video[this.name] value to this.value. For example, set
                          the volume to the new value on the volume&nbsp;slider.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>handleProgress()</strong>
                      <ul>
                        <li>Calculate the 'percent' remaining ((video.currentTime&nbsp;/ video.duration)&nbsp;*100). Then
                          update the width of the 'progressBar' to match the 'percent' by injecting 'percent' into the style
                          attribute (progressBar.style.flexBasis =&nbsp;`percent`).</li>
                      </ul>
                    </li>
                    <li>
                      <strong>scrub(e)</strong>
                      <ul>
                        <li>figure out the 'scrubTime' ((e.offsetX&nbsp;/ progress.offsetWidth) *&nbsp;video.duration). Then
                          set the video time to the 'scrubTime'.</li>
                      </ul>
                    </li>
                  </ul>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="ewKxgz"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 11 - Custom Video Player">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/ewKxgz/">
                        JavaScript30 - 11 - Custom Video Player</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 11 | Custom Video Player --> */}
      <div id="javascript30-11" className="section">
        <Row>
          <Column small={12}>
            <div className="player">
              <video className="player__video viewer"
                src="{{root}}assets/video/javascript30/11-custom-video-player/11-custom-video-player-example.mp4"></video>

              <div className="player__controls">
                <div className="progress">
                  <div className="progress__filled"></div>
                </div>
                <button className="player__button toggle" title="Toggle Play">►</button>
                <input type="range" name="volume" className="player__slider" min="0" max="1" step="0.05" value="1" />
                <input type="range" name="playbackRate" className="player__slider" min="0.5" max="2" step="0.1" value="1" />
                <button data-skip="-10" className="player__button">« 10s</button>
                <button data-skip="25" className="player__button">25s »</button>
              </div>
            </div>
          </Column>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default customVideoPlayer;