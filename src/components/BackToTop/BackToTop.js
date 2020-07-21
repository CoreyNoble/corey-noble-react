import React, { useEffect, useRef } from 'react';

import classes from './BackToTop.module.scss';

const BackToTop = props => {
  const backToTopButton = useRef();

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
  });

  const scrollFunction = () => {
    const footerElements = document.getElementsByTagName('footer');
    const footer = footerElements[0];
    const footerBounds = footer.getBoundingClientRect();

    if (window.pageYOffset > 1000) { // Show backToTopButton
      if(!backToTopButton.current.classList.contains(`${classes.btnEntrance}`)) {
        backToTopButton.current.style.display = "block";

        backToTopButton.current.classList.remove(`${classes.btnExit}`);
        backToTopButton.current.classList.add(`${classes.btnEntrance}`);
      }

      if (
        footerBounds.top >= 0 &&
        footerBounds.top <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        backToTopButton.current.classList.add(`${classes.bottomedOut}`);
        backToTopButton.current.style.top = `${footerBounds.top - 30}px`;
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