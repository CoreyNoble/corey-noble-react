import React from 'react';
import classes from './ContactBanner.module.scss';

const contactBanner = props => {
  return (
    <div className={`${classes.ParallaxHero2} ${classes.Parallax}`} data-stellar-background-ratio="0.4">
      <h1>Contact Me</h1>
    </div>
  );
};

export default contactBanner;