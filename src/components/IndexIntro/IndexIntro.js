import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import classes from './IndexIntro.module.scss';

import Section from '../../containers/Section/Section';

import CoreyNobleIndexPortrait from '../../assets/img/Corey-Noble-Index-Portrait.png'
import GitHubLogo from '../../assets/img/github-icon.png';
import LinkedInLogo from '../../assets/img/linkedin-icon.png';

const indexIntro = props => {
  return (
    <Section background="black">
      <Row className={`${classes.AboutMe}`}>
        <Column small={12} large={7}>
          <h3>Hi! My name is <strong>Corey&nbsp;Noble</strong>,</h3>
          <br />
          <p className={`${classes.h5} h5`}>I am a <strong>Web&nbsp;Application&nbsp;Developer</strong> currently employed by <a
              className="evertz-text" href="https://evertz.com/" title="Visit the Evertz Microsystems Website" target="_blank"
              rel="noopener noreferrer"><strong>Evertz&nbsp;Microsystems&nbsp;Ltd.</strong></a>, A global leader in
            broadcast solutions with headquarters based in the beautiful city of
            Burlington,&nbsp;ON&nbsp;&#8209;&nbsp;Canada.</p>
          <p className={`${classes.h5} h5`}>Welcome to my website! A portfolio that showcases some of my work, as well as the skills and
            experience that I bring to the&nbsp;table. If you like what you see and would like to reach out, please <a
              href="%PUBLIC_URL%/contact" title="Contact Me">contact&nbsp;me</a>.</p>
          <span className={classes.Socials}>
            <a className={classes.GithubLink} href="https://github.com/CoreyNoble" target="_blank" rel="noopener noreferrer"
              title="View my GitHub">
              <img src={GitHubLogo} alt="GitHub" />
            </a>
            <a className={classes.LinkedInLink} href="https://ca.linkedin.com/in/corey-noble" target="_blank" rel="noopener noreferrer"
              title="View my LinkedIn">
              <img src={LinkedInLogo} alt="LinkedIn" />
            </a>
          </span>
        </Column>

        <Column className={classes.PortraitSuit} small={12} large={5}>
          <img src={CoreyNobleIndexPortrait} alt="" role="presentation" />
        </Column>
      </Row>
    </Section>
  );
};

export default indexIntro;