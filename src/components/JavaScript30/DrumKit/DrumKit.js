import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './DrumKit.module.scss';

const drumKit = props => {
  // function playSound(e) {
  //   // Pass the event information along (e)
  //   // audio/div that matches keycode
  //   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  //   // If there is no corresponding audio, stop the function
  //   if (!audio) return;
  
  //   // Reset audio time to the start
  //   audio.currentTime = 0;
  
  //   // Play
  //   audio.play(); // Play audio
  //   key.classList.add('playing'); // Add class
  // }
  
  // function removeTransition(e) {
  //   // If the transition was not 'transform', stop the function
  //   if (e.propertyName !== 'transform') return;
  
  //   this.classList.remove('playing'); // Remove class
  // }
  
  // // Look at all keys, when one is finished transitioning, run removeTransition()
  // const keys = document.querySelectorAll('.key');
  // keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
  // // Listening for key pressed down, run playSound(e)
  // window.addEventListener('keydown', playSound);

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/development/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small>
            </p>

            {/* Title */}
            <h1>Drum Kit</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 1 | Drum Kit */}
      <Section id="javascript30-1">
        <Row>
          <Column small={12}>
            <div className="keys">
              <div data-key="65" className="key">
                <kbd>A</kbd>
                <span className="sound">clap</span>
              </div>
              <div data-key="83" className="key">
                <kbd>S</kbd>
                <span className="sound">hihat</span>
              </div>
              <div data-key="68" className="key">
                <kbd>D</kbd>
                <span className="sound">kick</span>
              </div>
              <div data-key="70" className="key">
                <kbd>F</kbd>
                <span className="sound">openhat</span>
              </div>
              <div data-key="71" className="key">
                <kbd>G</kbd>
                <span className="sound">boom</span>
              </div>
              <div data-key="72" className="key">
                <kbd>H</kbd>
                <span className="sound">ride</span>
              </div>
              <div data-key="74" className="key">
                <kbd>J</kbd>
                <span className="sound">snare</span>
              </div>
              <div data-key="75" className="key">
                <kbd>K</kbd>
                <span className="sound">tom</span>
              </div>
              <div data-key="76" className="key">
                <kbd>L</kbd>
                <span className="sound">tink</span>
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
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default drumKit;