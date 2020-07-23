import React, { useRef } from 'react';
import { Link } from "react-router-dom";

import classes from './Navigation.module.scss';

import GitHubLogo from '../../assets/img/github-icon.png';
import LinkedInLogo from '../../assets/img/linkedin-icon.png';

const Navigation = props => {
  const navButton = useRef();
  const homeLink = useRef();
  const mobileResolution = window.matchMedia("(max-width: 940px)");

  let navStyle;

  if (mobileResolution.matches) {
    navStyle = {
      transform: 'translateY(-16.9em)'
    };
  } else {
    navStyle = {
      transform: 'translateY(0)'
    };
  }

  let shouldOpenNav = true;

  const toggleMobileNav = () => {
    const nav = document.querySelector('nav');

    if (shouldOpenNav) {
      nav.style.removeProperty('transform');
      navButton.current.innerHTML = '&nbsp;';
      shouldOpenNav = false;
      homeLink.current.focus();
    } else {
      nav.style.transform = 'translateY(-16.9em)';
      navButton.current.innerHTML = 
      '<strong><span>&lsaquo;</span> corey-noble /<span>&rsaquo;</span></strong>';
      shouldOpenNav = true;
    }
  };

  return (
    <React.Fragment>
      <a href="#main" className={classes.SkipMain}>Skip to main content</a>

      <nav 
        className={classes.Nav}
        style={navStyle}
      >
        <ul>
          <li className={classes.NavIndex}>
            <Link 
              className={classes.NavHomeLink}
              to={`${process.env.PUBLIC_URL}/`}
              title="Visit the home page"
              onClick={mobileResolution.matches ? toggleMobileNav : ''}
              ref={homeLink}
            >
              <strong>&lsaquo; corey-noble /&rsaquo;</strong>
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/portfolio`}
              title="View my portfolio"
              onClick={mobileResolution.matches ? toggleMobileNav : ''}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/about`}
              title="Learn more about me"
              onClick={mobileResolution.matches ? toggleMobileNav : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/blog`}
              title="Read my blog"
              onClick={mobileResolution.matches ? toggleMobileNav : ''}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/contact`}
              title="View my contact page"
              onClick={mobileResolution.matches ? toggleMobileNav : ''}
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
          onClick={mobileResolution.matches ? toggleMobileNav : ''}
          ref={navButton}
        >
          <strong><span>&lsaquo;</span> corey-noble /<span>&rsaquo;</span></strong>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;