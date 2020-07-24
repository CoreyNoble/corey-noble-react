import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './DrumKit.module.scss';

import AudioClap from '../../../assets/sounds/javascript30/1-drum-kit/clap.wav';
import AudioHiHat from '../../../assets/sounds/javascript30/1-drum-kit/hihat.wav';
import AudioKick from '../../../assets/sounds/javascript30/1-drum-kit/kick.wav';
import AudioOpenHat from '../../../assets/sounds/javascript30/1-drum-kit/openhat.wav';
import AudioBoom from '../../../assets/sounds/javascript30/1-drum-kit/boom.wav';
import AudioRide from '../../../assets/sounds/javascript30/1-drum-kit/ride.wav';
import AudioSnare from '../../../assets/sounds/javascript30/1-drum-kit/snare.wav';
import AudioTom from '../../../assets/sounds/javascript30/1-drum-kit/tom.wav';
import AudioTink from '../../../assets/sounds/javascript30/1-drum-kit/tink.wav';

const drumKit = props => {
  const playSound = (e) => {
    // Pass the event information along (e)
    // audio/div that matches keycode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`[data-key="${e.keyCode}"]`);
  
    // If there is no corresponding audio, stop the function
    if (!audio) return;
  
    // Reset audio time to the start
    audio.currentTime = 0;
  
    // Play
    audio.play(); // Play audio
    key.classList.add(`${classes.Playing}`); // Add class

    key.addEventListener('transitionend', removeTransition.bind(this))
  };
  
  const removeTransition = (e) => {
    e.currentTarget.classList.remove(`${classes.Playing}`); // Remove class
  };
    
  // Listening for key pressed down, run playSound(e)
  window.addEventListener('keydown', playSound);

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Drum Kit</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 1 | Drum Kit */}
      <Section classProp={classes.DrumKit}>
        <Row>
          <Column small={12}>
            <div className={classes.Keys}>
              <div data-key="65" className={classes.Key}>
                <kbd>A</kbd>
                <span className={classes.Sound}>clap</span>
              </div>
              <div data-key="83" className={classes.Key}>
                <kbd>S</kbd>
                <span className={classes.Sound}>hihat</span>
              </div>
              <div data-key="68" className={classes.Key}>
                <kbd>D</kbd>
                <span className={classes.Sound}>kick</span>
              </div>
              <div data-key="70" className={classes.Key}>
                <kbd>F</kbd>
                <span className={classes.Sound}>openhat</span>
              </div>
              <div data-key="71" className={classes.Key}>
                <kbd>G</kbd>
                <span className={classes.Sound}>boom</span>
              </div>
              <div data-key="72" className={classes.Key}>
                <kbd>H</kbd>
                <span className={classes.Sound}>ride</span>
              </div>
              <div data-key="74" className={classes.Key}>
                <kbd>J</kbd>
                <span className={classes.Sound}>snare</span>
              </div>
              <div data-key="75" className={classes.Key}>
                <kbd>K</kbd>
                <span className={classes.Sound}>tom</span>
              </div>
              <div data-key="76" className={classes.Key}>
                <kbd>L</kbd>
                <span className={classes.Sound}>tink</span>
              </div>
            </div>

            <audio data-key="65" src={AudioClap} type="audio/wav"></audio>
            <audio data-key="83" src={AudioHiHat} type="audio/wav"></audio>
            <audio data-key="68" src={AudioKick} type="audio/wav"></audio>
            <audio data-key="70" src={AudioOpenHat} type="audio/wav"></audio>
            <audio data-key="71" src={AudioBoom} type="audio/wav"></audio>
            <audio data-key="72" src={AudioRide} type="audio/wav"></audio>
            <audio data-key="74" src={AudioSnare} type="audio/wav"></audio>
            <audio data-key="75" src={AudioTom} type="audio/wav"></audio>
            <audio data-key="76" src={AudioTink} type="audio/wav"></audio>
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default drumKit;