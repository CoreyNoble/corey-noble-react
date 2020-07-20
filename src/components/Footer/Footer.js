import React from 'react';

import { Row, Column, ShowForScreenSize } from 'react-foundation-components/lib/grid-flex';

import classes from './Footer.module.scss';

import CoreyNobleFootnoteProfileImage from '../../assets/img/Corey-Noble-Footnote-Profile.png';
import CoreyNobleResumePDF from '../../assets/pdf/CoreyNoble-Resume.pdf';
import GitHubLogo from '../../assets/img/github-icon.png';
import LinkedInLogo from '../../assets/img/linkedin-icon.png';

const footer = props => {
  return (
    <footer className={classes.Footer}>
      <Row>
        {/* Profession Showcase */}
        <Column small={12} medium={8} large={7}>
          <Column small={4} medium={4} large={3}>
            <img src={CoreyNobleFootnoteProfileImage} alt="" role="presentation" />
          </Column>
          <Column end small={8} medium={8} large={9}>
            <div className={classes.FootnotePosition}>
              <h2 className={`h3 blue-text ${classes.Name}`}>Corey Noble</h2>
              <h3 className={`${classes.Title}`}>Web Application Developer</h3>
              <div className={classes.FootnoteContact}>
                <h4>
                  <a href={CoreyNobleResumePDF} title="Read my resume" target="_blank"
                    rel="noopener noreferrer">My Resume</a>
                </h4>
                <span aria-hidden="true">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <h4>
                  <a href={`${process.env.PUBLIC_URL}/site-index`} title="View the site index">Site Index</a>
                </h4>
              </div>
            </div>
          </Column>
        </Column>

        {/* Social Media */}
        {/* <ShowForScreenSize screenSize="large"> */}
          <Column end small={12} medium={5} large={5}>
            <div className={classes.SocialMedia}>
              <div className={classes.LinkedIn}>
                <Column 
                  className={classes.SocialText} 
                  end small={10} medium={9} large={10}
                >
                  <h4>View my <a href="https://ca.linkedin.com/in/corey-noble" target="_blank" rel="noopener noreferrer"
                      title="View my LinkedIn">LinkedIn</a>&nbsp;profile</h4>
                  <br />
                </Column>
                <Column className={classes.SocialIcon} small={2} medium={3} large={2}>
                  <a href="https://ca.linkedin.com/in/corey-noble" target="_blank" rel="noopener noreferrer" tabIndex="-1"
                    aria-hidden="true">
                    <img src={LinkedInLogo} alt="" role="presentation" />
                  </a>
                </Column>
              </div>

              <div className={classes.Github}>
                {/* <ShowForScreenSize screenSize="medium"> */}
                  <Column 
                    className={classes.SocialText} 
                    end small={10} medium={9} large={10}
                  >
                    <h4>View my <a href="https://github.com/CoreyNoble" target="_blank" rel="noopener noreferrer"
                        title="View my GitHub">GitHub</a>&nbsp;projects</h4>
                    <br />
                  </Column>
                {/* </ShowForScreenSize> */}
                
                <Column className={classes.SocialIcon} small={2} medium={3} large={2}>
                  <a href="https://github.com/CoreyNoble" target="_blank" rel="noopener noreferrer" tabIndex="-1"
                    aria-hidden="true">
                    <img src={GitHubLogo} alt="" role="presentation" />
                  </a>
                </Column>
              </div>
            </div>
          </Column>
        {/* </ShowForScreenSize> */}
      </Row>
    </footer>
  );
};

export default footer;