import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import classes from './Section.module.scss';

const section = props => {
  return (
    <div className={`${classes.Section} ${props.background} ${props.classProp}`}>
      <Row>
        <Column small={12}>
            {props.children}
        </Column>
      </Row>
    </div>
  );
};

export default section;