import React from 'react';

import './app.scss';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

import AboutIntro from './components/AboutIntro/AboutIntro';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Navigation />
      <BackToTop />

      <AboutIntro />
      <Button />

      <Footer />
    </div>
  );
}

export default App;