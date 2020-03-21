import React from 'react';
import classes from './Section.scss';

const section = props => {
  return (
    <div className={
      classes.Section, 
      props.BackgroundColour
    }>
      Section
    </div>
  );
};

export default section;