import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './VideoSpeedController.module.scss';

const videoSpeedController = props => {
  // // Parent <div>
  // const speed = document.querySelector('.speed');
  // // Child <div>
  // const bar = speed.querySelector('.speed-bar');
  // // <video>
  // const video = document.querySelector('.flex');

  // // Handle moving the speed bar. Pass the event (e).
  // // Using an es5 function() because we need 'this' to be equal to the parent <div>.
  // function handleMove(e) {
  //   // Set the Y position, ensuring we anchor it to the parent <div> 'this'.
  //   const x = e.pageX - this.offsetLeft;
  //   // Get the percentage filled by dividing y with the height of the parent <div> 'this'.
  //   const percent = x / this.offsetWidth;
  //   // Min/Max playback multiplier.
  //   const min = 0.4;
  //   const max = 4;
  //   // Getting a height value for the 'bar'.
  //   // Math.round() to get a rounded percentage. (percent * 100) to make it a whole number (2, not 0.02).
  //   const width = Math.round(percent * 100) + '%';
  //   // Calculate the playbackRate.
  //   // (max - min) + min: Getting the lower and upper bounds.
  //   // This ensures the playbackRate isn't a value between 0 and 1, instead, it is a value range between the 'min' and 'max', multiplied by 'percentage'.
  //   const playbackRate = percent * (max - min) + min;

  //   // Set the height of the bar, equal to 'height'.
  //   bar.style.width = width;
  //   // Set the text of the bar, Using the 'playbackRate' value.
  //   bar.textContent = playbackRate.toFixed(2) + 'x';
  //   // Play the video at the speed determined by 'playbackRate'.
  //   // Default play speed = 1.
  //   video.playbackRate = playbackRate;
  // }

  // // When moving the mouse over the parent <div>, handleMove().
  // speed.addEventListener('mousemove', handleMove);

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Video Speed Controller</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 28 | Video Speed Controller */}
      <Section classProp={classes.VideoSpeedController}>
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
      </Section>
    </React.Fragment>
  );
};

export default videoSpeedController;