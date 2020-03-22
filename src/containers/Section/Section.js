import React from 'react';
import './Section.scss';

const section = props => {
  return (
    <div className={'section ' + props.background}>
      <div className="row">
        <div className="small-12 column" data-aos="fade-right" data-aos-delay="100">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default section;