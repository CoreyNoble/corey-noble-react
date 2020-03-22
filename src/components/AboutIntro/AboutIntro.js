import React from 'react';
import './AboutIntro.scss';

import CoreyNobleAboutPortrait from '../../assets/img/Corey-Noble-About-Portrait.png';

import ScrollableSection from '../ScrollableSection/ScrollableSection';

const aboutIntro = props => {
  return (
    <div id="about-me" className="section black">
      <div className="row introduction">
        <h2>Corey&nbsp;Noble<br />
          <em>Web&nbsp;Application&nbsp;Developer</em></h2>

        <div id="portrait-suit" className="small-12 medium-12 large-5 columns">
          <img src={CoreyNobleAboutPortrait} alt="" role="presentation" />
        </div>

        <ScrollableSection />
      </div>
    </div>
  );
};

export default aboutIntro;