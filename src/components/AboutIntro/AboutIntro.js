import React from 'react';

import { Row, Column } from 'react-foundation';

import classes from './AboutIntro.module.scss';

import CoreyNobleAboutPortrait from '../../assets/img/Corey-Noble-About-Portrait.png';

import ScrollableSection from '../ScrollableSection/ScrollableSection';

const aboutIntro = props => {
  return (
    <div id="about-me" className="section black">
      <Row className="introduction">
        <h2>Corey&nbsp;Noble<br />
          <em>Web&nbsp;Application&nbsp;Developer</em></h2>

        <Column id="portrait-suit" small={12} large={5}>
          <img src={CoreyNobleAboutPortrait} alt="" role="presentation" />
        </Column>

        <ScrollableSection />
      </Row>
    </div>
  );
};

export default aboutIntro;