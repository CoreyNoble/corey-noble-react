import React from 'react';
import classes from './Footer.module.scss';

import CoreyNobleFootnoteProfileImage from '../../assets/img/Corey-Noble-Footnote-Profile.png';
import CoreyNobleResumePDF from '../../assets/pdf/CoreyNoble-Resume.pdf';
import GitHubLogo from '../../assets/img/github-icon.png';
import LinkedInLogo from '../../assets/img/linkedin-icon.png';

const footer = props => {
  return (
    <footer id="footer">
      <div className="row">
        {/* Profession Showcase */}
        <div className="small-12 medium-8 large-7 columns">
          <div className="small-4 medium-4 large-3 columns">
            <img src={CoreyNobleFootnoteProfileImage} alt="" role="presentation" />
          </div>
          <div className="small-8 medium-8 large-9 columns end">
            <div className="footnote-position">
              <h2 className="h3 blue-text name">Corey Noble</h2>
              <h3 className="h4 title">Web&nbsp;Developer</h3>
              <div className="footnote-contact">
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
          </div>
        </div>

        {/* Social Media */}
        <div className="show-for-large small-12 medium-5 large-5 columns end">
          <div className="social-media">
            <div className="linkedin">
              <div className="social-text small-10 medium-9 large-10 columns end">
                <h4>View my
                  <a href="https://ca.linkedin.com/in/corey-noble" target="_blank" rel="noopener noreferrer"
                    title="View my LinkedIn">LinkedIn</a>&nbsp;profile</h4>
                <br />
              </div>
              <div className="social-icon small-2 medium-3 large-2 columns">
                <a href="https://ca.linkedin.com/in/corey-noble" target="_blank" rel="noopener noreferrer" tabIndex="-1"
                  aria-hidden="true">
                  <img src={LinkedInLogo} alt="" role="presentation" />
                </a>
              </div>
            </div>

            <div className="github">
              <div className="social-text show-for-medium-up small-10 medium-9 large-10 columns end">
                <h4>View my
                  <a href="https://github.com/CoreyNoble" target="_blank" rel="noopener noreferrer"
                    title="View my GitHub">GitHub</a>&nbsp;projects</h4>
                <br />
              </div>
              <div className="social-icon small-2 medium-3 large-2 columns">
                <a href="https://github.com/CoreyNoble" target="_blank" rel="noopener noreferrer" tabIndex="-1"
                  aria-hidden="true">
                  <img src={GitHubLogo} alt="" role="presentation" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;