import React from 'react';

import './app.scss';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

import Section from './containers/Section/Section';

import AboutIntro from './components/AboutIntro/AboutIntro';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Navigation />
      <BackToTop />

      <AboutIntro />
      <Button />

      <Section background="blue">
        <h2>Skill Overview</h2>
        <h3 className="h4 index-header">A brief overview of what I bring to the&nbsp;table.</h3>
      </Section>
      <Section background="white"></Section>
      <Section background="black"></Section>
      <Section background="grey"></Section>

      <Footer />
    </div>
  );
}

export default App;