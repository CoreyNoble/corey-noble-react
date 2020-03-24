import React from 'react';


import './app.scss';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

import Section from './containers/Section/Section';

import IndexBanner from './components/IndexBanner/IndexBanner';
import AboutIntro from './components/AboutIntro/AboutIntro';
import Button from './components/Button/Button';

import ResponsiveIcon from './assets/img/icons/responsive-icon.png';
import SEOIcon from './assets/img/icons/seo-icon.png';
import CustomFunctionalityIcon from './assets/img/icons/custom-functionality-icon.png';
import ABIcon from './assets/img/icons/a-b-icon.png';
import OptimizedCodeIcon from './assets/img/icons/optimized-code-icon.png';
import CMSIcon from './assets/img/icons/cms-icon.png';
import CurrentTechnologiesIcon from './assets/img/icons/current-technologies-icon.png';
import DesignIcon from './assets/img/icons/design-icon.png';
import EmailIcon from './assets/img/icons/email-icon.png';


import DrumKit from './assets/img/showcase/javascript30/1-drum-kit.jpg';
import Clock from './assets/img/showcase/javascript30/2-clock.jpg';
import UpdateCSSVariables from './assets/img/showcase/javascript30/3-update-css-variables.gif';
import ArrayCardio1 from './assets/img/showcase/javascript30/4-array-cardio-1.jpg';
import FlexPanelGallery from './assets/img/showcase/javascript30/5-flex-panel-gallery.jpg';
import TypeAhead from './assets/img/showcase/javascript30/6-type-ahead.jpg';
import ArrayCardio2 from './assets/img/showcase/javascript30/7-array-cardio-2.jpg';
import FunWithHTML5Canvas from './assets/img/showcase/javascript30/8-fun-with-html5-canvas.gif';
import DevToolsDomination from './assets/img/showcase/javascript30/9-dev-tools-domination.jpg';
import HoldShiftAndCheckCheckboxes from './assets/img/showcase/javascript30/10-hold-shift-and-check-checkboxes.jpg';
import CustomVideoPlayer from './assets/img/showcase/javascript30/11-custom-video-player.jpg';
import KeySequenceDetection from './assets/img/showcase/javascript30/12-key-sequence-detection.jpg';
import SlideInOnScroll from './assets/img/showcase/javascript30/13-slide-in-on-scroll.gif';
import JavascriptReferencesVsCopying from './assets/img/showcase/javascript30/14-javascript-references-vs-copying.jpg';
import LocalStorage from './assets/img/showcase/javascript30/15-localstorage.jpg';
import MouseMoveShadow from './assets/img/showcase/javascript30/16-mouse-move-shadow.jpg';
import SortWithoutArticles from './assets/img/showcase/javascript30/17-sort-without-articles.jpg';
import AddingUpTimesWithReduce from './assets/img/showcase/javascript30/18-adding-up-times-with-reduce.jpg';
import WebcamFun from './assets/img/showcase/javascript30/19-webcam-fun.jpg';
import SpeechDetection from './assets/img/showcase/javascript30/20-speech-detection.jpg';
import Geolocation from './assets/img/showcase/javascript30/21-geolocation.jpg';
import FollowAlongLinkHighlighter from './assets/img/showcase/javascript30/22-follow-along-link-highlighter.gif';
import SpeechSynthesis from './assets/img/showcase/javascript30/23-speech-synthesis.jpg';
import StickyNav from './assets/img/showcase/javascript30/24-sticky-nav.jpg';
import EventCapturePropogationBubblingAndOnce from './assets/img/showcase/javascript30/25-event-capture-propogation-bubbling-and-once.jpg';
import StripeFollowAlongNav from './assets/img/showcase/javascript30/26-stripe-follow-along-nav.gif';
import ClickAndDrag from './assets/img/showcase/javascript30/27-click-and-drag.gif';
import VideoSpeedController from './assets/img/showcase/javascript30/28-video-speed-controller.jpg';
import CountdownTimer from './assets/img/showcase/javascript30/29-countdown-timer.jpg';
import WhackAMole from './assets/img/showcase/javascript30/30-whack-a-mole.jpg';

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
            <img src={ResponsiveIcon} alt="" role="presentation" />
            <h4>Responsive Development</h4>
            <p>I can ensure your website adapts to use different sizing and layouts depending on the resolution of the device
              it is viewed on. This way your website looks great on anything your visitors may be&nbsp;using.</p>
          </div>
          <div className="services-promotion small-12 medium-12 large-4 columns end" data-aos="fade-up" data-aos-delay="100"
            data-equalizer-watch>
            <img src={SEOIcon} alt="" role="presentation" />
            <h4>Search and Accessibility</h4>
            <p>I have experience in implementing the latest Search Engine Optimisation <a
                href="{{root}}blog/search-engine-optimisation.html"
                title="Learn more about Search Engine Optimisation">(SEO)</a> techniques, and ensuring websites meet the Web
              Content Accessibility Guidelines <a href="{{root}}blog/web-content-accessibility-guidelines.html"
                title="Learn more about the Web Content Accessibility Guidelines">(WCAG&nbsp;2.0)</a>.</p>
          </div>
          <div className="services-promotion small-12 medium-12 large-4 columns end" data-aos="fade-up" data-aos-delay="100"
            data-equalizer-watch>
            <img src={CustomFunctionalityIcon} alt="" role="presentation" />
            <h4>Custom Functionality</h4>
            <p>If you need a custom tool or feature built for your site, let's discuss it. In most cases I should be able to
              accommodate your&nbsp;needs.</p>
          </div>
        </div>

        <div className="skill-overview row" data-equalizer>
          <div className="services-promotion small-12 medium-12 large-4 columns" data-aos="fade-up" data-aos-delay="100"
            data-equalizer-watch>
            <img src={ABIcon} alt="" role="presentation" />
            <h4>Analytics and A/B Testing</h4>
            <p>I have experience tracking user analytics, and creating targeted test campaigns. This enables you to cater to
              segmented audiences and improve your user retention over time via. A/B&nbsp;testing.</p>
          </div>
          <div className="services-promotion small-12 medium-12 large-4 columns end" data-aos="fade-up" data-aos-delay="100"
            data-equalizer-watch>
            <img src={OptimizedCodeIcon} alt="" role="presentation" />
            <h4>Clean and Efficient Code</h4>
            <p>I always optimize the code I write to ensure minimal load times. My code is written in an understandable,
              programmatic
              format so it is easy for any web developer to read and&nbsp;manipulate.</p>
          </div>
          <div className="services-promotion no-bottom-space-desktop small-12 medium-12 large-4 columns" data-aos="fade-up"
            data-aos-delay="100" data-equalizer-watch>
            <img src={CMSIcon} alt="" role="presentation" />
            <h4>Content Management Systems</h4>
            <p>If you want to be your own web master, I can build your website with a content management system. This will
              empower you to make the changes you want to make, on your own&nbsp;time.</p>
          </div>
        </div>

        <div className="skill-overview row" data-equalizer>
          <div className="services-promotion small-12 medium-12 large-4 columns" data-aos="fade-up" data-aos-delay="100"
            data-equalizer-watch>
            <img src={CurrentTechnologiesIcon} alt="" role="presentation" />
            <h4>Latest and Greatest</h4>
            <p>I always build websites with the most current technologies in mind. I will keep your website
              up&#8209;to&#8209;date with all of the latest and greatest&nbsp;trends.</p>
          </div>
          <div className="services-promotion no-bottom-space-desktop small-12 medium-12 large-4 columns" data-aos="fade-up"
            data-aos-delay="100" data-equalizer-watch>
            <img src={DesignIcon} alt="" role="presentation" />
            <h4>Website Design and Branding</h4>
            <p>I have a thorough understanding of both digital and print&nbsp;media. Let me know if you need a new design for
              your website, new branding, or promotional&nbsp;artwork.</p>
          </div>
          <div className="services-promotion no-bottom-space small-12 medium-12 large-4 columns" data-aos="fade-up"
            data-aos-delay="100" data-equalizer-watch>
            <img src={EmailIcon} alt="" role="presentation" />
            <h4>Email Campaigns</h4>
            <p>Do you want to send targeted email campaigns? I can build, test, segment and deploy HTML email campaigns for
              you. I can also track the analytics that you value&nbsp;most.</p>
          </div>
        </div>
      </Section>
      <Section background="white"></Section>
      <Section background="black"></Section>
      <Section background="grey"></Section>

      <div id="javascript30" class="section">
        <div class="row showcase-2" data-equalizer>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/1-drum-kit.html" title="Drum Kit. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Drum Kit</h3>
                <img src={DrumKit} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/2-clock.html" title="Clock. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Clock</h3>
                <img src={Clock} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/3-update-css-variables.html"
              title="Update CSS Variables. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Update CSS Variables</h3>
                <img src={UpdateCSSVariables} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/4-array-cardio-day-1.html"
              title="Array Cardio Day 1. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Array Cardio Day 1</h3>
                <img src={ArrayCardio1} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/5-flex-panel-gallery.html"
              title="Flex Panel Gallery. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Flex Panel Gallery</h3>
                <img src={FlexPanelGallery} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/6-type-ahead.html" title="Type Ahead. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Type Ahead</h3>
                <img src={TypeAhead} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/7-array-cardio-day-2.html"
              title="Array Cardio Day 2. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Array Cardio Day 2</h3>
                <img src={ArrayCardio2} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/8-fun-with-html5-canvas.html"
              title="Fun with HTML5 Canvas. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Fun with HTML5 Canvas</h3>
                <img src={FunWithHTML5Canvas} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/9-dev-tools-domination.html"
              title="Dev Tools Domination. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Dev Tools Domination</h3>
                <img src={DevToolsDomination} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/10-hold-shift-and-check-checkboxes.html"
              title="Hold Shift and Check Checkboxes. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Hold Shift and Check Checkboxes</h3>
                <img src={HoldShiftAndCheckCheckboxes} alt=""
                  role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/11-custom-video-player.html"
              title="Custom Video Player. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Custom Video Player</h3>
                <img src={CustomVideoPlayer} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/12-key-sequence-detection.html"
              title="Key Sequence Detection. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Key Sequence Detection</h3>
                <img src={KeySequenceDetection} alt=""
                  role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/13-slide-in-on-scroll.html"
              title="Slide in on Scroll. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Slide in on Scroll</h3>
                <img src={SlideInOnScroll} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/14-javaScript-references-vs-copying.html"
              title="JavaScript References VS Copying. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">JavaScript References vs. Copying</h3>
                <img src={JavascriptReferencesVsCopying} alt=""
                  role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/15-localstorage.html" title="LocalStorage. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">LocalStorage</h3>
                <img src={LocalStorage} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/16-mouse-move-shadow.html"
              title="Mouse Move Shadow. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Mouse Move Shadow</h3>
                <img src={MouseMoveShadow} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/17-sort-without-articles.html"
              title="Sort Without Articles. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Sort Without Articles</h3>
                <img src={SortWithoutArticles} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/18-adding-up-times-with-reduce.html"
              title="Adding Up Times with Reduce. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Adding Up Times with Reduce</h3>
                <img src={AddingUpTimesWithReduce} alt=""
                  role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/19-webcam-fun.html" title="Webcam Fun. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Webcam Fun</h3>
                <img src={WebcamFun} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/20-speech-detection.html"
              title="Speech Detection. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Speech Detection</h3>
                <img src={SpeechDetection} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/21-geolocation.html" title="Geolocation. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Geolocation</h3>
                <img src={Geolocation} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/22-follow-along-link-highlighter.html"
              title="Follow Along Link Highlighter. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Follow Along Link Highlighter</h3>
                <img src={FollowAlongLinkHighlighter} alt=""
                  role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/23-speech-synthesis.html"
              title="Speech Synthesis. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Speech Synthesis</h3>
                <img src={SpeechSynthesis} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/24-sticky-nav.html" title="Sticky Nav. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Sticky Nav</h3>
                <img src={StickyNav} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/25-event-capture-propagation-bubbling-and-once.html"
              title="Event Capture, Propagation, Bubbling and Once. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Event Capture, Propagation, Bubbling and Once</h3>
                <img src={EventCapturePropogationBubblingAndOnce} alt=""
                  role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/26-stripe-follow-along-nav.html"
              title="Stripe Follow Along Nav. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Stripe Follow Along Nav</h3>
                <img src={StripeFollowAlongNav} alt=""
                  role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/27-click-and-drag.html" title="Click and Drag. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Click and Drag</h3>
                <img src={ClickAndDrag} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/28-video-speed-controller.html"
              title="Video Speed Controller. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Video Speed Controller</h3>
                <img src={VideoSpeedController} alt=""
                  role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/29-countdown-timer.html"
              title="Countdown Timer. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Countdown Timer</h3>
                <img src={CountdownTimer} alt="" role="presentation" />
              </div>
            </a>
          </div>
          <div class="small-12 medium-6 large-4 columns end" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch>
            <a href="{{root}}portfolio/development/javascript30/30-whack-a-mole.html" title="Whack A Mole. JavaScript30.">
              <div class="showcase-example">
                <h3 class="h5 white">Whack A Mole</h3>
                <img src={WhackAMole} alt="" role="presentation" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;