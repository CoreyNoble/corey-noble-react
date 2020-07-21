import React, { useEffect, useRef } from 'react';

import classes from './BackToTop.module.scss';

const BackToTop = props => {
  const backToTopButton = useRef();

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
  });

  const scrollFunction = () => {
    if (window.pageYOffset > 1000) { // Show backToTopButton
      if(!backToTopButton.current.classList.contains(`${classes.btnEntrance}`)) {
        backToTopButton.current.style.display = "block";

        backToTopButton.current.classList.remove(`${classes.btnExit}`);
        backToTopButton.current.classList.add(`${classes.btnEntrance}`);
      }
    }
    else { // Hide backToTopButton
      if(backToTopButton.current.classList.contains(`${classes.btnEntrance}`)) {
        backToTopButton.current.classList.remove(`${classes.btnEntrance}`);
        backToTopButton.current.classList.add(`${classes.btnExit}`);

        setTimeout(function() {
          backToTopButton.current.style.display = "none";
        }, 250);
      }
    }
  }

  const smoothScrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <React.Fragment>
      <a 
        href="javascript:" 
        className={classes.BackToTop} 
        title="Return to the top of this page" 
        role="button" aria-label="Back to top button"
        onClick={smoothScrollBackToTop}
        ref={backToTopButton}
      >
        <span className="fas fa-arrow-up"></span>
      </a>
    </React.Fragment>
  );
}

export default BackToTop;