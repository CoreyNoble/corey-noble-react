import React from 'react';


import './app.scss';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

import Section from './containers/Section/Section';

import IndexBanner from './components/IndexBanner/IndexBanner';
import AboutIntro from './components/AboutIntro/AboutIntro';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Navigation />
      <BackToTop />

      <IndexBanner />

      <AboutIntro />
      <Button />

      <Section background="blue">
        <h2>Skill Overview</h2>
        <h3 className="h4 index-header">A brief overview of what I bring to the&nbsp;table.</h3>

        <div className="skill-overview row" data-equalizer>
          <div className="services-promotion small-12 medium-12 large-4 columns" data-aos="fade-up" data-aos-delay="100"
            data-equalizer-watch>
            <img src="{{root}}assets/img/icons/responsive-icon.png" alt="" role="presentation" />
            <h4>Responsive Development</h4>
            <p>I can ensure your website adapts to use different sizing and layouts depending on the resolution of the device
              it is viewed on. This way your website looks great on anything your visitors may be&nbsp;using.</p>
          </div>
          <div className="services-promotion small-12 medium-12 large-4 columns end" data-aos="fade-up" data-aos-delay="100"
            data-equalizer-watch>
            <img src="{{root}}assets/img/icons/seo-icon.png" alt="" role="presentation" />
            <h4>Search and Accessibility</h4>
            <p>I have experience in implementing the latest Search Engine Optimisation <a
                href="{{root}}blog/search-engine-optimisation.html"
                title="Learn more about Search Engine Optimisation">(SEO)</a> techniques, and ensuring websites meet the Web
              Content Accessibility Guidelines <a href="{{root}}blog/web-content-accessibility-guidelines.html"
                title="Learn more about the Web Content Accessibility Guidelines">(WCAG&nbsp;2.0)</a>.</p>
          </div>
          <div className="services-promotion small-12 medium-12 large-4 columns end" data-aos="fade-up" data-aos-delay="100"
            data-equalizer-watch>
            <img src="{{root}}assets/img/icons/custom-functionality-icon.png" alt="" role="presentation" />
            <h4>Custom Functionality</h4>
            <p>If you need a custom tool or feature built for your site, let's discuss it. In most cases I should be able to
              accommodate your&nbsp;needs.</p>
          </div>
        </div>

        <div className="skill-overview row" data-equalizer>
          <div className="services-promotion small-12 medium-12 large-4 columns" data-aos="fade-up" data-aos-delay="100"
            data-equalizer-watch>
            <img src="{{root}}assets/img/icons/a-b-icon.png" alt="" role="presentation" />
            <h4>Analytics and A/B Testing</h4>
            <p>I have experience tracking user analytics, and creating targeted test campaigns. This enables you to cater to
              segmented audiences and improve your user retention over time via. A/B&nbsp;testing.</p>
          </div>
          <div className="services-promotion small-12 medium-12 large-4 columns end" data-aos="fade-up" data-aos-delay="100"
            data-equalizer-watch>
            <img src="{{root}}assets/img/icons/optimized-code-icon.png" alt="" role="presentation" />
            <h4>Clean and Efficient Code</h4>
            <p>I always optimize the code I write to ensure minimal load times. My code is written in an understandable,
              programmatic
              format so it is easy for any web developer to read and&nbsp;manipulate.</p>
          </div>
          <div className="services-promotion no-bottom-space-desktop small-12 medium-12 large-4 columns" data-aos="fade-up"
            data-aos-delay="100" data-equalizer-watch>
            <img src="{{root}}assets/img/icons/cms-icon.png" alt="" role="presentation" />
            <h4>Content Management Systems</h4>
            <p>If you want to be your own web master, I can build your website with a content management system. This will
              empower you to make the changes you want to make, on your own&nbsp;time.</p>
          </div>
        </div>

        <div className="skill-overview row" data-equalizer>
          <div className="services-promotion small-12 medium-12 large-4 columns" data-aos="fade-up" data-aos-delay="100"
            data-equalizer-watch>
            <img src="{{root}}assets/img/icons/current-technologies-icon.png" alt="" role="presentation" />
            <h4>Latest and Greatest</h4>
            <p>I always build websites with the most current technologies in mind. I will keep your website
              up&#8209;to&#8209;date with all of the latest and greatest&nbsp;trends.</p>
          </div>
          <div className="services-promotion no-bottom-space-desktop small-12 medium-12 large-4 columns" data-aos="fade-up"
            data-aos-delay="100" data-equalizer-watch>
            <img src="{{root}}assets/img/icons/design-icon.png" alt="" role="presentation" />
            <h4>Website Design and Branding</h4>
            <p>I have a thorough understanding of both digital and print&nbsp;media. Let me know if you need a new design for
              your website, new branding, or promotional&nbsp;artwork.</p>
          </div>
          <div className="services-promotion no-bottom-space small-12 medium-12 large-4 columns" data-aos="fade-up"
            data-aos-delay="100" data-equalizer-watch>
            <img src="{{root}}assets/img/icons/email-icon.png" alt="" role="presentation" />
            <h4>Email Campaigns</h4>
            <p>Do you want to send targeted email campaigns? I can build, test, segment and deploy HTML email campaigns for
              you. I can also track the analytics that you value&nbsp;most.</p>
          </div>
        </div>
      </Section>
      <Section background="white"></Section>
      <Section background="black"></Section>
      <Section background="grey"></Section>

      <Footer />
    </div>
  );
}

export default App;