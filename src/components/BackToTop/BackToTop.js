import React from 'react';
import classes from './BackToTop.module.scss';

const backToTop = props => {
  return (
    <a href="javascript:" id="return-to-top" title="Return to the top of this page" role="button" aria-label="Back to top button">
      <span className="fas fa-arrow-up"></span>
    </a>
  );
};

export default backToTop;