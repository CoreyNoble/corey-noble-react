import React from 'react';
import classes from './Button.module.scss';

import CoreyNobleResume from '../../assets/pdf/CoreyNoble-Resume.pdf';

const button = props => {
  return (
    <div className="row">
      <div className={`${classes.AboutMoreInfo} small-12 column`}>
        <h3 data-aos="fade-right" data-aos-delay="100">Want to Know More About&nbsp;Me?</h3>
        <div className={classes.ResumeCTA} data-aos="fade-up" data-aos-delay="100">
          <a className={`${classes.Resume} h5`} href={CoreyNobleResume} target="_blank"
            rel="noopener noreferrer">View My CV / Resume</a>
        </div>
      </div>
    </div>
  );
};

export default button;