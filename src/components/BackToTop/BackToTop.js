import React from 'react';
import './BackToTop.scss';

const backToTop = props => {
  return (
    <a href="javascript:" id="return-to-top" title="Return to the top of this page" role="button" aria-label="Back to top button">
      <span class="fas fa-arrow-up"></span>
    </a>
  );
};

export default backToTop;