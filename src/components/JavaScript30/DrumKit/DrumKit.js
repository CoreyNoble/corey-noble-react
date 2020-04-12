import React from 'react';
import classes from './DrumKit.module.scss';

const drumKit = props => {
  function playSound(e) {
    // Pass the event information along (e)
    // audio/div that matches keycode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
    // If there is no corresponding audio, stop the function
    if (!audio) return;
  
    // Reset audio time to the start
    audio.currentTime = 0;
  
    // Play
    audio.play(); // Play audio
    key.classList.add('playing'); // Add class
  }
  
  function removeTransition(e) {
    // If the transition was not 'transform', stop the function
    if (e.propertyName !== 'transform') return;
  
    this.classList.remove('playing'); // Remove class
  }
  
  // Look at all keys, when one is finished transitioning, run removeTransition()
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
  // Listening for key pressed down, run playSound(e)
  window.addEventListener('keydown', playSound);

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
            <h1>Drum Kit</h1>

            {/* <!-- Accordion --> */}
            <ul class="accordion" data-accordion data-allow-all-closed="true">
              <li class="accordion-item" data-accordion-item="">
                {/* <!-- Title --> */}
                <a href="#" class="accordion-title" aria-controls="project-synopsis" role="tab" aria-expanded="false"
                  aria-selected="false">
                  <h2 class="h5">Project Synopsis and&nbsp;Code</h2>
                </a>
                {/* <!-- Content --> */}
                <div class="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby="Project Synopsis and Code"
                  aria-hidden="true" id="project-synopsis" style="display: none;">
                  <p>In this lesson I create a Drum Kit application. First I <strong>listen</strong> for the
                    following&nbsp;events:</p>
                  <ul>
                    <li>
                      <strong>'window'</strong>
                      <ul>
                        <li>'keydown', playSound(e)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>'.key'</strong>
                      <ul>
                        <li>'transitionend', removeTransition(e)</li>
                      </ul>
                    </li>
                  </ul>
                  <p>In <strong>playSound(e)</strong>&nbsp;- Query the 'document' for two types of elements. The &lt;audio&gt;
                    element, and elements that have a class of '.key'. Check if the event 'keyCode' (e.keyCode) matches the
                    data attribute 'data-key' of the element. If the &lt;audio&gt; element does not exist, exit
                    the&nbsp;function.</p>
                  <p>Next reset the audio time to 0 (audio.currentTime =&nbsp;0). Then play the &lt;audio&gt; (audio.play();).
                    Also add a class of '.playing' to the '.key' element to animate the&nbsp;UI.</p>
                  <p>In <strong>removeTransition(e)</strong> - First check if the event .propertyname is not 'transform' If
                    so, exit the function. Otherwise, add a class of '.playing' to the&nbsp;'.key'.</p>

                  {/* <!-- CodePen --> */}
                  <p class="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="jjKXXR"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 1 - Drum Kit">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/jjKXXR/">
                        JavaScript30 - 1 - Drum Kit</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 1 | Drum Kit --> */}
      <div id="javascript30-1" class="section">
        <div class="row">
          <div class="small-12 column">
            <div class="keys">
              <div data-key="65" class="key">
                <kbd>A</kbd>
                <span class="sound">clap</span>
              </div>
              <div data-key="83" class="key">
                <kbd>S</kbd>
                <span class="sound">hihat</span>
              </div>
              <div data-key="68" class="key">
                <kbd>D</kbd>
                <span class="sound">kick</span>
              </div>
              <div data-key="70" class="key">
                <kbd>F</kbd>
                <span class="sound">openhat</span>
              </div>
              <div data-key="71" class="key">
                <kbd>G</kbd>
                <span class="sound">boom</span>
              </div>
              <div data-key="72" class="key">
                <kbd>H</kbd>
                <span class="sound">ride</span>
              </div>
              <div data-key="74" class="key">
                <kbd>J</kbd>
                <span class="sound">snare</span>
              </div>
              <div data-key="75" class="key">
                <kbd>K</kbd>
                <span class="sound">tom</span>
              </div>
              <div data-key="76" class="key">
                <kbd>L</kbd>
                <span class="sound">tink</span>
              </div>
            </div>

            <audio data-key="65" src="{{root}}assets/sounds/javascript30/1-drum-kit/clap.wav"></audio>
            <audio data-key="83" src="{{root}}assets/sounds/javascript30/1-drum-kit/hihat.wav"></audio>
            <audio data-key="68" src="{{root}}assets/sounds/javascript30/1-drum-kit/kick.wav"></audio>
            <audio data-key="70" src="{{root}}assets/sounds/javascript30/1-drum-kit/openhat.wav"></audio>
            <audio data-key="71" src="{{root}}assets/sounds/javascript30/1-drum-kit/boom.wav"></audio>
            <audio data-key="72" src="{{root}}assets/sounds/javascript30/1-drum-kit/ride.wav"></audio>
            <audio data-key="74" src="{{root}}assets/sounds/javascript30/1-drum-kit/snare.wav"></audio>
            <audio data-key="75" src="{{root}}assets/sounds/javascript30/1-drum-kit/tom.wav"></audio>
            <audio data-key="76" src="{{root}}assets/sounds/javascript30/1-drum-kit/tink.wav"></audio>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default drumKit;