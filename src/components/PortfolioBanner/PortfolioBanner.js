import React from 'react';
import classes from './PortfolioBanner.module.scss';

const portfolioBanner = props => {
  return (
    <div className={`${classes.ParallaxHero3} ${classes.Parallax}`} data-stellar-background-ratio="0.4">
      <h1>My Portfolio</h1>
    </div>
  );
};

export default portfolioBanner;