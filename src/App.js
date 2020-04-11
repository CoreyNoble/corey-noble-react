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

const ContactBanner = React.lazy(() => import('./components/ContactBanner/ContactBanner'));
const ContactForm = React.lazy(() => import('./components/ContactForm/ContactForm'));

const JavaScript30 = React.lazy(() => import('./containers/JavaScript30/JavaScript30'));

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
      <ul>
        <li>
          <Link to={`${match.url}/search-engine-optimisation`}>Search Engine Optimisation (SEO)</Link>
        </li>
        <li>
          <Link to={`${match.url}/web-content-accessibility-guidelines`}>Web Content Accessibility Guidelines (WCAG)</Link>
        </li>
        <li>
          <Link to={`${match.url}/aspirations`}>My Aspirations</Link>
        </li>
        <li>
          <Link to={`${match.url}/web-production-specialist`}>My Previous Role as a Web Production Specialist at Thrillworks Inc.</Link>
        </li>
        <li>
          <Link to={`${match.url}/blog-introduction`}>Blog Introduction</Link>
        </li>
      </ul>

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
              <h3>My Blog</h3>
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