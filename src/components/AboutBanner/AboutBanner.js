import React from 'react';
import classes from './AboutBanner.module.scss';

const aboutBanner = props => {
  return (
    <div className={`${classes.ParallaxHero3} ${classes.Parallax}`} data-stellar-background-ratio="0.4">
      <h1>About Me</h1>
    </div>
  );
};

export default aboutBanner;