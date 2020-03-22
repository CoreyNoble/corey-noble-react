import React from 'react';
import classes from './Footer.scss';

const footer = props => {
  return (
    <footer id="footer">
      <div class="row">
        {/* Profession Showcase */}
        <div class="small-12 medium-8 large-7 columns">
          <div class="small-4 medium-4 large-3 columns">
            <img src="{{root}}assets/img/Corey-Noble-Footnote-Profile.png" alt="" role="presentation" />
          </div>
          <div class="small-8 medium-8 large-9 columns end">
            <div class="footnote-position">
              <h2 class="h3 blue-text name">Corey Noble</h2>
              <h3 class="h4 title">Web&nbsp;Developer</h3>
              <div class="footnote-contact">
                <h4>
                  <a href="{{root}}assets/pdf/CoreyNoble-Resume.pdf" title="Read my resume" target="_blank"
                    rel="noopener noreferrer">My Resume</a>
                </h4>
                <span aria-hidden="true">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <h4>
                  <a href="{{root}}site-index.html" title="View the site index">Site Index</a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div class="show-for-large small-12 medium-5 large-5 columns end">
          <div class="social-media">
            <div class="linkedin">
              <div class="social-text small-10 medium-9 large-10 columns end">
                <h4>View my
                  <a href="https://ca.linkedin.com/in/corey-noble" target="_blank" rel="noopener noreferrer"
                    title="View my LinkedIn">LinkedIn</a>&nbsp;profile</h4>
                <br />
              </div>
              <div class="social-icon small-2 medium-3 large-2 columns">
                <a href="https://ca.linkedin.com/in/corey-noble" target="_blank" rel="noopener noreferrer" tabindex="-1"
                  aria-hidden="true">
                  <img src="{{root}}assets/img/linkedin-icon.png" alt="" role="presentation" />
                </a>
              </div>
            </div>

            <div class="github">
              <div class="social-text show-for-medium-up small-10 medium-9 large-10 columns end">
                <h4>View my
                  <a href="https://github.com/CoreyNoble" target="_blank" rel="noopener noreferrer"
                    title="View my GitHub">GitHub</a>&nbsp;projects</h4>
                <br />
              </div>
              <div class="social-icon small-2 medium-3 large-2 columns">
                <a href="https://github.com/CoreyNoble" target="_blank" rel="noopener noreferrer" tabindex="-1"
                  aria-hidden="true">
                  <img src="{{root}}assets/img/github-icon.png" alt="" role="presentation" />
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