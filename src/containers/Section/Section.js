import React from 'react';

import { Row, Column } from 'react-foundation';

import classes from './Section.module.scss';

const section = props => {
  return (
    <div className={classes.Section + ' ' + props.background}>
      <Row>
        <Column 
          small={12} 
          data-aos={props.animStyle || 'fade-right'}
          data-aos-delay={props.animDelay || 100}
        >
            {props.children}
        </Column>
      </Row>
    </div>
  );
};

export default section;