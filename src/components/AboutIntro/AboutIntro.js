import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import classes from './AboutIntro.module.scss';

import CoreyNobleAboutPortrait from '../../assets/img/Corey-Noble-About-Portrait.png';

import ScrollableSection from '../ScrollableSection/ScrollableSection';

const aboutIntro = props => {
  return (
    <div id="about-me" className="section black">
      <Row className="introduction">
        <Column id="portrait-suit" small={12}>
          <h2>Corey&nbsp;Noble<br /><em>Web&nbsp;Application&nbsp;Developer</em></h2>
        </Column>

        <Column id="portrait-suit" small={12} large={5}>
          <img src={CoreyNobleAboutPortrait} alt="" role="presentation" />
        </Column>

        <Column 
          id="icon-container" className="icon-container" 
          small={12} large={7}
        >
          <ScrollableSection />
        </Column>
      </Row>
    </div>
  );
};

export default aboutIntro;