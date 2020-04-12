import React, { Component, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './app.scss';

import AOS from 'aos';
import "aos/dist/aos.css";

import Navigation from './components/Navigation/Navigation';
// import BackToTop from './components/BackToTop/BackToTop';
import Footer from './components/Footer/Footer';

import Section from './containers/Section/Section';

import IndexBanner from './components/IndexBanner/IndexBanner';
import IndexIntro from './components/IndexIntro/IndexIntro';
import SkillOverview from './components/SkillOverview/SkillOverview';
import IndexPortfolioSection from './components/IndexPortfolioSection/IndexPortfolioSection';
import Button from './components/Button/Button';

const PortfolioBanner = React.lazy(() => import('./components/PortfolioBanner/PortfolioBanner'));
const PortfolioProjects = React.lazy(() => import('./components/PortfolioProjects/PortfolioProjects'));

const AboutBanner = React.lazy(() => import('./components/AboutBanner/AboutBanner'));
const AboutIntro = React.lazy(() => import('./components/AboutIntro/AboutIntro'));
const AboutContent = React.lazy(() => import('./components/AboutContent/AboutContent'));

const BlogEntries = React.lazy(() => import('./components/BlogEntries/BlogEntries'));

const ContactBanner = React.lazy(() => import('./components/ContactBanner/ContactBanner'));
const ContactForm = React.lazy(() => import('./components/ContactForm/ContactForm'));

const JS30Component = React.lazy(() => import('./containers/JavaScript30/JavaScript30'));
const JS30DrumKit = React.lazy(() => import('./components/JavaScript30/DrumKit/DrumKit'));
const JS30Clock = React.lazy(() => import('./components/JavaScript30/Clock/Clock'));
const JS30UpdateCSSVariables = React.lazy(() => import('./components/JavaScript30/UpdateCSSVariables/UpdateCSSVariables'));
const JS30ArrayCardioDay1 = React.lazy(() => import('./components/JavaScript30/ArrayCardioDay1/ArrayCardioDay1'));
const JS30FlexPanelGallery = React.lazy(() => import('./components/JavaScript30/FlexPanelGallery/FlexPanelGallery'));
const JS30TypeAhead = React.lazy(() => import('./components/JavaScript30/TypeAhead/TypeAhead'));
const JS30ArrayCardioDay2 = React.lazy(() => import('./components/JavaScript30/ArrayCardioDay2/ArrayCardioDay2'));
const JS30FunWithHTML5Canvas = React.lazy(() => import('./components/JavaScript30/FunWithHTML5Canvas/FunWithHTML5Canvas'));
const JS30DevToolsDomination = React.lazy(() => import('./components/JavaScript30/DevToolsDomination/DevToolsDomination'));
const JS30HoldShiftAndCheckCheckboxes = React.lazy(() => import('./components/JavaScript30/HoldShiftAndCheckCheckboxes/HoldShiftAndCheckCheckboxes'));
const JS30CustomVideoPlayer = React.lazy(() => import('./components/JavaScript30/CustomVideoPlayer/CustomVideoPlayer'));
const JS30KeySequenceDetection = React.lazy(() => import('./components/JavaScript30/KeySequenceDetection/KeySequenceDetection'));
const JS30SlideInOnScroll = React.lazy(() => import('./components/JavaScript30/SlideInOnScroll/SlideInOnScroll'));
const JS30JavaScriptReferencesVsCopying = React.lazy(() => import('./components/JavaScript30/JavaScriptReferencesVsCopying/JavaScriptReferencesVsCopying'));
const JS30LocalStorage = React.lazy(() => import('./components/JavaScript30/LocalStorage/LocalStorage'));
const JS30MouseMoveShadow = React.lazy(() => import('./components/JavaScript30/MouseMoveShadow/MouseMoveShadow'));
const JS30SortWithoutArticles = React.lazy(() => import('./components/JavaScript30/SortWithoutArticles/SortWithoutArticles'));
const JS30AddingUpTimesWithReduce = React.lazy(() => import('./components/JavaScript30/AddingUpTimesWithReduce/AddingUpTimesWithReduce'));
const JS30WebcamFun = React.lazy(() => import('./components/JavaScript30/WebcamFun/WebcamFun'));
const JS30SpeechDetection = React.lazy(() => import('./components/JavaScript30/SpeechDetection/SpeechDetection'));
const JS30Geolocation = React.lazy(() => import('./components/JavaScript30/Geolocation/Geolocation'));
const JS30FollowAlongLinkHighlighter = React.lazy(() => import('./components/JavaScript30/FollowAlongLinkHighlighter/FollowAlongLinkHighlighter'));
const JS30SpeechSynthesis = React.lazy(() => import('./components/JavaScript30/SpeechSynthesis/SpeechSynthesis'));
const JS30StickyNav = React.lazy(() => import('./components/JavaScript30/StickyNav/StickyNav'));
const JS30EventCapturePropogationBubblingAndOnce = React.lazy(() => import('./components/JavaScript30/EventCapturePropogationBubblingAndOnce/EventCapturePropogationBubblingAndOnce'));
const JS30StripeFollowAlongNav = React.lazy(() => import('./components/JavaScript30/StripeFollowAlongNav/StripeFollowAlongNav'));
const JS30ClickAndDrag = React.lazy(() => import('./components/JavaScript30/ClickAndDrag/ClickAndDrag'));
const JS30VideoSpeedController = React.lazy(() => import('./components/JavaScript30/VideoSpeedController/VideoSpeedController'));
const JS30CountdownTimer = React.lazy(() => import('./components/JavaScript30/CountdownTimer/CoutdownTimer'));
const JS30WhackAMole = React.lazy(() => import('./components/JavaScript30/WhackAMole/WhackAMole'));

const SiteIndexComponent = React.lazy(() => import('./components/SiteIndexComponent/SiteIndexComponent'));
const NotFoundComponent = React.lazy(() => import('./components/NotFoundComponent/NotFoundComponent'));

function Index() {
  return (
    <React.Fragment>
      <IndexBanner />
      <IndexIntro />

      <Section background="blue">
        <SkillOverview />
      </Section>

      <Section background="white">
        <IndexPortfolioSection />
      </Section>

      <Section background="black">
        <Button />
      </Section>
    </React.Fragment>
  );
}

function Portfolio() {
  let match = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        <Route 
          path={`${match.path}/javascript30`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
               <JavaScript30 />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/javascript-tetris`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <h3>JavaScript Tetris</h3>
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/cms-skillset`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <h3>CMS Skillset</h3>
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/responsive-email-template`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <h3>Responsive Email Template</h3>
            </Suspense>
          )} 
        />

        <Route 
          path={match.path} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <PortfolioBanner />
              <PortfolioProjects />
            </Suspense>
          )} 
        />
      </Switch>
    </React.Fragment>
  );
}

function JavaScript30() {
  let match = useRouteMatch();
  
  return (
    <React.Fragment>
      <Switch>
      <Route 
          path={`${match.path}/drum-kit`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30DrumKit />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/clock`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30Clock />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/update-css-variables`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30UpdateCSSVariables />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/array-cardio-day-1`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30ArrayCardioDay1 />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/flex-panel-gallery`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30FlexPanelGallery />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/type-ahead`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30TypeAhead />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/array-cardio-day-2`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30ArrayCardioDay2 />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/fun-with-html5-canvas`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30FunWithHTML5Canvas />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/dev-tools-domination`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30DevToolsDomination />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/hold-shift-and-check-checkboxes`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30HoldShiftAndCheckCheckboxes />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/custom-video-player`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30CustomVideoPlayer />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/key-sequence-detection`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30KeySequenceDetection />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/slide-in-on-scroll`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30SlideInOnScroll />
            </Suspense>
          )} 
        />
        
        <Route 
          path={`${match.path}/javascript-references-vs-copying`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30JavaScriptReferencesVsCopying />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/localstorage`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30LocalStorage />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/mouse-move-shadow`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30MouseMoveShadow />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/sort-without-articles`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30SortWithoutArticles />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/adding-up-times-with-reduce`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30AddingUpTimesWithReduce />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/webcam-fun`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30WebcamFun />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/speech-detection`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30SpeechDetection />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/geolocation`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30Geolocation />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/follow-along-link-highlighter`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30FollowAlongLinkHighlighter />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/speech-synthesis`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30SpeechSynthesis />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/sticky-nav`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30StickyNav />
            </Suspense>
          )} 
        />
        
        <Route 
          path={`${match.path}/event-capture-propogation-bubbling-and-once`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30EventCapturePropogationBubblingAndOnce />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/stripe-follow-along-nav`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30StripeFollowAlongNav />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/click-and-drag`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30ClickAndDrag />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/video-speed-controller`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30VideoSpeedController />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/countdown-timer`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30CountdownTimer />
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/whack-a-mole`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30WhackAMole />
            </Suspense>
          )} 
        />

        <Route 
          path={match.path} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <JS30Component />
            </Suspense>
          )} 
        />
      </Switch>
    </React.Fragment>
  );
}

function About() {
  return (
    <React.Fragment>
      <AboutBanner />
      <AboutIntro />

      <Section background="white">
        <AboutContent />
      </Section>
    </React.Fragment>
  );
}

function Blog() {
  let match = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        <Route 
          path={`${match.path}/search-engine-optimisation`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <h3>Search Engine Optimisation (SEO)</h3>
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/web-content-accessibility-guidelines`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <h3>Web Content Accessibility Guidelines (WCAG)</h3>
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/aspirations`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <h3>My Aspirations</h3>
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/web-production-specialist`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <h3>My Previous Role as a Web Production Specialist at Thrillworks Inc.</h3>
            </Suspense>
          )} 
        />

        <Route 
          path={`${match.path}/blog-introduction`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <h3>Blog Introduction</h3>
            </Suspense>
          )} 
        />

        <Route 
          path={match.path} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <BlogEntries />
            </Suspense>
          )} 
        />
      </Switch>
    </React.Fragment>
  );
}

function Contact() {
  return (
    <React.Fragment>
      <ContactBanner />
      <ContactForm />
    </React.Fragment>
  );
}

function NotFound() {
  return (
    <NotFoundComponent />
  );
}

function SiteIndex() {
  return (
    <SiteIndexComponent />
  );
}

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration : 1000
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          {/* <BackToTop /> */}

          <Switch>
            <Route 
              path="/404" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <NotFound />
                </Suspense>
              )} 
            />

            <Route 
              path="/site-index" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <SiteIndex />
                </Suspense>
              )} 
            />

            <Route 
              path="/portfolio" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Portfolio />
                </Suspense>
              )} 
            />

            <Route 
              path="/about" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              )} 
            />

            <Route 
              path="/blog" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Blog />
                </Suspense>
              )} 
            />

            <Route 
              path="/contact" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Contact />
                </Suspense>
              )} 
            />

            <Route 
              path="/" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Index />
                </Suspense>
              )} 
            />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;