import React from 'react';
import classes from './Button.scss';

const button = props => {
  return (
    <div className="row">
      <div id="about-more-info" className="small-12 column">
        <h3 data-aos="fade-right" data-aos-delay="100">Want to Know More About&nbsp;Me?</h3>
        <div className="resume-cta" data-aos="fade-up" data-aos-delay="100">
          <a id="resume" className="h5" href="{{root}}assets/pdf/CoreyNoble-Resume.pdf" target="_blank"
            rel="noopener noreferrer">View My CV / Resume</a>
        </div>
      </div>
    </div>
  );
};

export default button;