import React, { Component, Suspense } from 'react';

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

class skillOverview extends Component {
  state = {
    skillOverview: [
      { title: 'Responsive Development',
        icon: ResponsiveIcon,
        paragraph: `I can ensure your website adapts to use different sizing and layouts depending on the resolution of the device it is viewed on. This way your website looks great on anything your visitors may be&nbsp;using.`
      },
      { title: 'Search and Accessibility',
        icon: SEOIcon,
        paragraph: `I have experience in implementing the latest Search Engine Optimisation <a href="/blog/search-engine-optimisation"
        title="Learn more about Search Engine Optimisation">(SEO)</a> techniques, and ensuring websites meet the Web Content Accessibility Guidelines <a href="/blog/web-content-accessibility-guidelines" title="Learn more about the Web Content Accessibility Guidelines">(WCAG&nbsp;2.0)</a>.`
      },
      { title: 'Custom Functionality',
        icon: CustomFunctionalityIcon,
        paragraph: `If you need a custom tool or feature built for your site, let's discuss it. In most cases I should be able to accommodate your&nbsp;needs.`
      },
      { title: 'Analytics and A/B Testing',
        icon: ABIcon,
        paragraph: `I have experience tracking user analytics, and creating targeted test campaigns. This enables you to cater to segmented audiences and improve your user retention over time via. A/B&nbsp;testing.`
      },
      { title: 'Clean and Efficient Code',
        icon: OptimizedCodeIcon,
        paragraph: `I always optimize the code I write to ensure minimal load times. My code is written in an understandable, programmatic format so it is easy for any web developer to read and&nbsp;manipulate.`
      },
      { title: 'Content Management Systems',
        icon: CMSIcon,
        paragraph: `If you want to be your own web master, I can build your website with a content management system. This will empower you to make the changes you want to make, on your own&nbsp;time.`
      },
      { title: 'Latest and Greatest',
        icon: CurrentTechnologiesIcon,
        paragraph: `I always build websites with the most current technologies in mind. I will keep your website up&#8209;to&#8209;date with all of the latest and greatest&nbsp;trends.`,
        class: 'no-bottom-space-desktop'
      },
      { title: 'Website Design and Branding',
        icon: DesignIcon,
        paragraph: `I have a thorough understanding of both digital and print&nbsp;media. Let me know if you need a new design for your website, new branding, or promotional&nbsp;artwork.`,
        class: 'no-bottom-space-desktop'
      },
      { title: 'Email Campaigns',
        icon: EmailIcon,
        paragraph: `Do you want to send targeted email campaigns? I can build, test, segment and deploy HTML email campaigns for you. I can also track the analytics that you value&nbsp;most.`,
        class: 'no-bottom-space'
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <h2>Skill Overview</h2>
        <h3 className={`h4 ${classes.IndexHeader}`}>A brief overview of what I bring to the&nbsp;table.</h3>

        <div className={`${classes.ServicesPromotion} row`} data-equalizer="equalize-skill">
          {this.state.skillOverview.map(skill => {
            return (<div className={`${classes.ServicesPromotion} small-12 medium-12 large-4 columns ${skill.class}`} data-aos="fade-up" data-aos-delay="100" data-equalizer-watch="equalize-skill">
              <img src={skill.icon} alt="" role="presentation" />
              <h4>{skill.title}</h4>
              <p dangerouslySetInnerHTML={{__html: skill.paragraph}}></p>
            </div>)
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default skillOverview;