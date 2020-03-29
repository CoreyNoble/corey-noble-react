import React from 'react';

import classes from './SkillOverview.module.scss';

import ResponsiveIcon from '../../assets/img/icons/responsive-icon.png';
import SEOIcon from '../../assets/img/icons/seo-icon.png';
import CustomFunctionalityIcon from '../../assets/img/icons/custom-functionality-icon.png';
import ABIcon from '../../assets/img/icons/a-b-icon.png';
import OptimizedCodeIcon from '../../assets/img/icons/optimized-code-icon.png';
import CMSIcon from '../../assets/img/icons/cms-icon.png';
import CurrentTechnologiesIcon from '../../assets/img/icons/current-technologies-icon.png';
import DesignIcon from '../../assets/img/icons/design-icon.png';
import EmailIcon from '../../assets/img/icons/email-icon.png';

const skillOverview = props => {
  return (
    <React.Fragment>
      <h2>Skill Overview</h2>
      <h3 className={`h4 ${classes.IndexHeader}`}>A brief overview of what I bring to the&nbsp;table.</h3>

      <div className={`${classes.SkillOverview} row`} data-equalizer>
        <div className={`${classes.ServicesPromotion} small-12 medium-12 large-4 columns`} data-aos="fade-up" data-aos-delay="100"
          data-equalizer-watch>
          <img src={ResponsiveIcon} alt="" role="presentation" />
          <h4>Responsive Development</h4>
          <p>I can ensure your website adapts to use different sizing and layouts depending on the resolution of the device
            it is viewed on. This way your website looks great on anything your visitors may be&nbsp;using.</p>
        </div>
        <div className={`${classes.ServicesPromotion} small-12 medium-12 large-4 columns`} data-aos="fade-up" data-aos-delay="100"
          data-equalizer-watch>
          <img src={SEOIcon} alt="" role="presentation" />
          <h4>Search and Accessibility</h4>
          <p>I have experience in implementing the latest Search Engine Optimisation <a
              href="%PUBLIC_URL%/blog/search-engine-optimisation"
              title="Learn more about Search Engine Optimisation">(SEO)</a> techniques, and ensuring websites meet the Web
            Content Accessibility Guidelines <a href="%PUBLIC_URL%/blog/web-content-accessibility-guidelines"
              title="Learn more about the Web Content Accessibility Guidelines">(WCAG&nbsp;2.0)</a>.</p>
        </div>
        <div className={`${classes.ServicesPromotion} small-12 medium-12 large-4 columns end`} data-aos="fade-up" data-aos-delay="100"
          data-equalizer-watch>
          <img src={CustomFunctionalityIcon} alt="" role="presentation" />
          <h4>Custom Functionality</h4>
          <p>If you need a custom tool or feature built for your site, let's discuss it. In most cases I should be able to
            accommodate your&nbsp;needs.</p>
        </div>
      </div>

      <div className={`${classes.SkillOverview} row`} data-equalizer>
        <div className={`${classes.ServicesPromotion} small-12 medium-12 large-4 columns`} data-aos="fade-up" data-aos-delay="100"
          data-equalizer-watch>
          <img src={ABIcon} alt="" role="presentation" />
          <h4>Analytics and A/B Testing</h4>
          <p>I have experience tracking user analytics, and creating targeted test campaigns. This enables you to cater to
            segmented audiences and improve your user retention over time via. A/B&nbsp;testing.</p>
        </div>
        <div className={`${classes.ServicesPromotion} small-12 medium-12 large-4 columns`} data-aos="fade-up" data-aos-delay="100"
          data-equalizer-watch>
          <img src={OptimizedCodeIcon} alt="" role="presentation" />
          <h4>Clean and Efficient Code</h4>
          <p>I always optimize the code I write to ensure minimal load times. My code is written in an understandable,
            programmatic
            format so it is easy for any web developer to read and&nbsp;manipulate.</p>
        </div>
        <div className={`${classes.ServicesPromotion} small-12 medium-12 large-4 columns end`} data-aos="fade-up"
          data-aos-delay="100" data-equalizer-watch>
          <img src={CMSIcon} alt="" role="presentation" />
          <h4>Content Management Systems</h4>
          <p>If you want to be your own web master, I can build your website with a content management system. This will
            empower you to make the changes you want to make, on your own&nbsp;time.</p>
        </div>
      </div>

      <div className={`${classes.SkillOverview} row`} data-equalizer>
        <div className={`${classes.ServicesPromotion} ${classes.NoBottomSpaceDesktop} small-12 medium-12 large-4 columns`} data-aos="fade-up" data-aos-delay="100"
          data-equalizer-watch>
          <img src={CurrentTechnologiesIcon} alt="" role="presentation" />
          <h4>Latest and Greatest</h4>
          <p>I always build websites with the most current technologies in mind. I will keep your website
            up&#8209;to&#8209;date with all of the latest and greatest&nbsp;trends.</p>
        </div>
        <div className={`${classes.ServicesPromotion} ${classes.NoBottomSpaceDesktop} small-12 medium-12 large-4 columns`} data-aos="fade-up"
          data-aos-delay="100" data-equalizer-watch>
          <img src={DesignIcon} alt="" role="presentation" />
          <h4>Website Design and Branding</h4>
          <p>I have a thorough understanding of both digital and print&nbsp;media. Let me know if you need a new design for
            your website, new branding, or promotional&nbsp;artwork.</p>
        </div>
        <div className={`${classes.ServicesPromotion} ${classes.NoBottomSpace} small-12 medium-12 large-4 columns end`} data-aos="fade-up"
          data-aos-delay="100" data-equalizer-watch>
          <img src={EmailIcon} alt="" role="presentation" />
          <h4>Email Campaigns</h4>
          <p>Do you want to send targeted email campaigns? I can build, test, segment and deploy HTML email campaigns for
            you. I can also track the analytics that you value&nbsp;most.</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default skillOverview;