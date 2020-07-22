import React, { useRef } from 'react';
import { Link } from "react-router-dom";

import classes from './Navigation.module.scss';

import GitHubLogo from '../../assets/img/github-icon.png';
import LinkedInLogo from '../../assets/img/linkedin-icon.png';

const Navigation = props => {
  const navButton = useRef();
  const homeLink = useRef();

  let shouldOpenNav = true;

  /**
  * SlideUp
  *
  * @param {HTMLElement} element
  * @param {Number} duration
  * @returns {Promise<boolean>}
  */
  const slideUp = (element, duration = 500) => {
    return new Promise(function (resolve, reject) {
      element.style.height = element.offsetHeight + 'px';
      element.style.transitionProperty = `height, margin, padding`;
      element.style.transitionDuration = duration + 'ms';
      element.offsetHeight;
      element.style.overflow = 'hidden';
      element.style.height = 0;
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;
      element.style.marginTop = 0;
      element.style.marginBottom = 0;

      window.setTimeout(function () {
          element.style.display = 'none';
          element.style.removeProperty('height');
          element.style.removeProperty('padding-top');
          element.style.removeProperty('padding-bottom');
          element.style.removeProperty('margin-top');
          element.style.removeProperty('margin-bottom');
          element.style.removeProperty('overflow');
          element.style.removeProperty('transition-duration');
          element.style.removeProperty('transition-property');
          resolve(false);
      }, duration)
    })
  };

  /**
  * SlideDown
  *
  * @param {HTMLElement} element
  * @param {Number} duration
  * @returns {Promise<boolean>}
  */
  const slideDown = (element, duration = 500) => {
    return new Promise(function (resolve, reject) {
      element.style.removeProperty('display');
      let display = window.getComputedStyle(element).display;

      if (display === 'none') 
          display = 'block';

      element.style.display = display;
      let height = element.offsetHeight;
      element.style.overflow = 'hidden';
      element.style.height = 0;
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;
      element.style.marginTop = 0;
      element.style.marginBottom = 0;
      element.offsetHeight;
      element.style.transitionProperty = `height, margin, padding`;
      element.style.transitionDuration = duration + 'ms';
      element.style.height = height + 'px';
      element.style.removeProperty('padding-top');
      element.style.removeProperty('padding-bottom');
      element.style.removeProperty('margin-top');
      element.style.removeProperty('margin-bottom');

      window.setTimeout(function () {
          element.style.removeProperty('height');
          element.style.removeProperty('overflow');
          element.style.removeProperty('transition-duration');
          element.style.removeProperty('transition-property');
      }, duration)
    })
  };

  /**
  * SlideToggle
  *
  * @param {HTMLElement} element
  * @param {Number} duration
  * @returns {Promise<boolean>}
  */
  const slideToggle = (element, duration = 500) => {
    if (window.getComputedStyle(element).display === 'none') {
        return slideDown(element, duration);
    } else {
        return slideUp(element, duration);
    }
  };

  const viewSomething = () => {
    if (shouldOpenNav) {
      navButton.current.innerHTML = '&nbsp;';
      shouldOpenNav = false;
    } else {
      navButton.current.innerHTML = 
      '<strong><span>&lsaquo;</span> corey-noble /<span>&rsaquo;</span></strong>';
      shouldOpenNav = true;
    }

    const navList = document.querySelector('nav').childNodes[0];

    slideToggle(navList);
  }

  return (
    <React.Fragment>
      <a href="#main" className={classes.SkipMain}>Skip to main content</a>

      <nav className={classes.Nav}>
        <ul>
          <li className={classes.NavIndex}>
            <Link 
              className={classes.NavHomeLink}
              to={`${process.env.PUBLIC_URL}/`}
              title="Visit the home page"
              onClick={viewSomething}
              ref={homeLink}
            >
              <strong>&lsaquo; corey-noble /&rsaquo;</strong>
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/portfolio`}
              title="View my portfolio"
              onClick={viewSomething}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/about`}
              title="Learn more about me"
              onClick={viewSomething}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/blog`}
              title="Read my blog"
              onClick={viewSomething}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/contact`}
              title="View my contact page"
              onClick={viewSomething}
            >
              Contact
            </Link>
          </li>
          <li className={classes.NavSocials}>
            <a 
              className={classes.NavGithubLink}
              href="https://github.com/CoreyNoble"
              target="_blank"
              rel="noopener noreferrer"
              title="View my GitHub"
            >
              <img src={GitHubLogo} alt="GitHub" />
            </a>
            <a 
              className={classes.NavLinkedInLink}
              href="https://ca.linkedin.com/in/corey-noble"
              target="_blank"
              rel="noopener noreferrer"
              title="View my GitHub"
            >
              <img src={LinkedInLogo} alt="LinkedIn" />
            </a>
          </li>
        </ul>
        <a 
          href="#" 
          className={classes.Pull} 
          title="Toggle the navigation menu" 
          aria-label="Navigation Menu"
          onClick={viewSomething}
          ref={navButton}
        >
          <strong><span>&lsaquo;</span> corey-noble /<span>&rsaquo;</span></strong>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;