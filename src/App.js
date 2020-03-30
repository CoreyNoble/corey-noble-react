import React, { Component } from 'react';
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

import PortfolioBanner from './components/PortfolioBanner/PortfolioBanner';
import PortfolioProjects from './components/PortfolioProjects/PortfolioProjects';

import AboutBanner from './components/AboutBanner/AboutBanner';
import AboutIntro from './components/AboutIntro/AboutIntro';
import AboutContent from './components/AboutContent/AboutContent';

import ContactBanner from './components/ContactBanner/ContactBanner';
import ContactForm from './components/ContactForm/ContactForm';

import JavaScript30 from './containers/JavaScript30/JavaScript30';

import SiteIndexComponent from './components/SiteIndexComponent/SiteIndexComponent';
import NotFoundComponent from './components/NotFoundComponent/NotFoundComponent';

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
        <Route path={`${match.path}/javascript30`}>
          <JavaScript30 />
        </Route>
        <Route path={`${match.path}/javascript-tetris`}>
          <h3>JavaScript Tetris</h3>
        </Route>
        <Route path={`${match.path}/cms-skillset`}>
          <h3>CMS Skillset</h3>
        </Route>
        <Route path={`${match.path}/responsive-email-template`}>
          <h3>Responsive Email Template</h3>
        </Route>
        <Route path={match.path}>
          <PortfolioBanner />
          <PortfolioProjects />
        </Route>
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
        <Route path={`${match.path}/search-engine-optimisation`}>
          <h3>Search Engine Optimisation (SEO)</h3>
        </Route>
        <Route path={`${match.path}/web-content-accessibility-guidelines`}>
          <h3>Web Content Accessibility Guidelines (WCAG)</h3>
        </Route>
        <Route path={`${match.path}/aspirations`}>
          <h3>My Aspirations</h3>
        </Route>
        <Route path={`${match.path}/web-production-specialist`}>
          <h3>My Previous Role as a Web Production Specialist at Thrillworks Inc.</h3>
        </Route>
        <Route path={`${match.path}/blog-introduction`}>
          <h3>Blog Introduction</h3>
        </Route>
        <Route path={match.path}>
          <h3>Portfolio</h3>
        </Route>
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
            <Route path="/404">
              <NotFound />
            </Route>

            <Route path="/site-index">
              <SiteIndex />
            </Route>

            <Route path="/portfolio">
              <Portfolio />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/">
              <Index />
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;