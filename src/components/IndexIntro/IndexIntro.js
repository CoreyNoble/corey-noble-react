import React from 'react';
import classes from './IndexIntro.module.scss';

import CoreyNobleIndexPortrait from '../../assets/img/Corey-Noble-Index-Portrait.png'
import GitHubLogo from '../../assets/img/github-icon.png';
import LinkedInLogo from '../../assets/img/linkedin-icon.png';

const indexIntro = props => {
  return (
    <div id="about-me" class="section black">
      <div class="row">
        <div class="small-12 medium-12 large-7 columns">
          <h3>Hi! My name is <strong>Corey&nbsp;Noble</strong>,</h3>
          <br />
          <p class="h5">I am a <strong>Web&nbsp;Application&nbsp;Developer</strong> currently employed by <a
              class="evertz-text" href="https://evertz.com/" title="Visit the Evertz Microsystems Website" target="_blank"
              rel="noopener noreferrer"><strong>Evertz&nbsp;Microsystems&nbsp;Ltd.</strong></a>, A global leader in
            broadcast solutions with headquarters based in the beautiful city of
            Burlington,&nbsp;ON&nbsp;&#8209;&nbsp;Canada.</p>
          <p class="h5">Welcome to my website! A portfolio that showcases some of my work, as well as the skills and
            experience that I bring to the&nbsp;table. If you like what you see and would like to reach out, please <a
              href="%PUBLIC_URL%/contact" title="Contact Me">contact&nbsp;me</a>.</p>
          <span id="socials">
            <a id="github-link" href="https://github.com/CoreyNoble" target="_blank" rel="noopener noreferrer"
              title="View my GitHub">
              <img src={GitHubLogo} alt="GitHub" />
            </a>
            <a id="linkedin-link" href="https://ca.linkedin.com/in/corey-noble" target="_blank" rel="noopener noreferrer"
              title="View my LinkedIn">
              <img src={LinkedInLogo} alt="LinkedIn" />
            </a>
          </span>
        </div>

        <div id="portrait-suit" class="small-12 medium-12 large-5 columns">
          <img src={CoreyNobleIndexPortrait} alt="" role="presentation" />
        </div>
      </div>
    </div>
  );
};

export default indexIntro;