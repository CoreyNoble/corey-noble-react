import React, { useEffect, useRef } from 'react';

import classes from './BackToTop.module.scss';

const BackToTop = props => {
  const backToTopButton = useRef();

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
  });

  const scrollFunction = () => {
    const footerBounds = document.querySelector('footer').getBoundingClientRect();
    const notMobileResolution = window.matchMedia("(min-width: 64em)");
    let backToTopOffset,
        footerOffset;

    if (notMobileResolution.matches) {
      backToTopOffset = -30;
      footerOffset = 0;
    } else {
      backToTopOffset = 60
      footerOffset = -80;
    }

    if (window.pageYOffset > 1000) { // Show backToTopButton
      if(!backToTopButton.current.classList.contains(`${classes.btnEntrance}`)) {
        backToTopButton.current.style.display = "block";

        backToTopButton.current.classList.remove(`${classes.btnExit}`);
        backToTopButton.current.classList.add(`${classes.btnEntrance}`);
      }

      if (
        footerBounds.top >= 0 &&
        footerBounds.top <= (window.innerHeight || document.documentElement.clientHeight) + footerOffset
      ) {
        backToTopButton.current.classList.add(`${classes.bottomedOut}`);
        backToTopButton.current.style.top = `${footerBounds.top + backToTopOffset}px`;
      } else {
        backToTopButton.current.classList.remove(`${classes.bottomedOut}`);
        backToTopButton.current.style.removeProperty('top');
      }

    } else { // Hide backToTopButton
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
      <button 
        className={classes.BackToTop} 
        title="Return to the top of this page" 
        aria-label="Back to top button"
        onClick={smoothScrollBackToTop}
        ref={backToTopButton}
      >
        <span className="fas fa-arrow-up"></span>
      </button>
    </React.Fragment>
  );
}

export default BackToTop;