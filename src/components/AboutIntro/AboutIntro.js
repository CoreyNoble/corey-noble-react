import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import classes from './AboutIntro.module.scss';

import Section from '../../containers/Section/Section';
import ScrollableSection from '../ScrollableSection/ScrollableSection';

import CoreyNobleAboutPortrait from '../../assets/img/Corey-Noble-About-Portrait.png';

const aboutIntro = props => {
  return (
    <Section background="black" classProp={classes.AboutIntro}>
      <Row className={classes.Introduction}>
        <Column small={12}>
          <h2>Corey&nbsp;Noble<br /><em>Web&nbsp;Application&nbsp;Developer</em></h2>
        </Column>

        <Column 
          className={classes.PortraitSuit} 
          small={12} large={5}
        >
          <img src={CoreyNobleAboutPortrait} alt="" role="presentation" />
        </Column>

        <Column 
          className={classes.IconContainer} 
          small={12} large={7}
        >
          <ScrollableSection />
        </Column>
      </Row>
    </Section>
  );
};

export default aboutIntro;