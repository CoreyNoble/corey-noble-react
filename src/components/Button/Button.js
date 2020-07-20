import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import classes from './Button.module.scss';

import CoreyNobleResume from '../../assets/pdf/CoreyNoble-Resume.pdf';

const button = props => {
  return (
    <Row>
      <Column className={classes.AboutMoreInfo} small={12}>
        <h3 data-aos="fade-right" data-aos-delay="100">Want to Know More About&nbsp;Me?</h3>
        <div className={classes.ResumeCTA} data-aos="fade-up" data-aos-delay="100">
          <a className={`${classes.Resume} h5`} href={CoreyNobleResume} target="_blank"
            rel="noopener noreferrer">View My CV / Resume</a>
        </div>
      </Column>
    </Row>
  );
};

export default button;