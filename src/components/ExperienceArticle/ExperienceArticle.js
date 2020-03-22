import React from 'react';
import classes from './ExperienceArticle.scss';

const experienceArticle = props => {
  return (
    <div class="about-experience small-12 medium-9 large-10 columns">
      <h3 class="job-title" data-aos="fade-up" data-aos-delay="100">Co-Owner, Website Developer and Graphic&nbsp;Artist
      </h3>
      <h4 class="h5 job-timeframe" data-aos="fade-up" data-aos-delay="100"><strong>9&nbsp;months</strong> &nbsp;|&nbsp;
        September&nbsp;2013 -&nbsp;May&nbsp;2014</h4>
      <h5 class="company-name" data-aos="fade-up" data-aos-delay="100"><em>Right Choice Websites</em></h5>

      <div data-aos="fade-up" data-aos-delay="100">
        <div>
          <div class="js-excerpt excerpt-hidden">
            <p>A former colleague and I created a website development company called Right Choice Websites. We built
              responsive websites using WordPress. My daily activities ranged greatly, Including: Explaining business
              packages and the development process to clients, managing project work, website development, branding,
              graphic design and documentation.</p>
            <ul>
              <li>
                <strong>WordPress</strong> – Developing websites using custom themes.</li>
              <li>
                <strong>Photoshop + Illustrator</strong> – Creating branding, website compositions, web and
                print&nbsp;graphics.</li>
              <li>
                <strong>Trello</strong> – Breaking down and keeping track of the work that was to be done, in-progress
                and&nbsp;completed.</li>
              <li class="no-bottom-space">
                <strong>InDesign</strong> – To create branded documentation.</li>
            </ul>
          </div>
        </div>
        <a role="button" class="js-show-more">Show more +</a>
      </div>
    </div>
  );
};

export default experienceArticle;