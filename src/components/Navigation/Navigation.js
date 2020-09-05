import React, { useRef } from 'react';
import { Link } from "react-router-dom";

import classes from './Navigation.module.scss';

import GitHubLogo from '../../assets/img/github-icon.png';
import LinkedInLogo from '../../assets/img/linkedin-icon.png';

const Navigation = props => {
  const nav = useRef();
  const navMenu = useRef();
  const homeLink = useRef();
  
  const desktopResolution = 940;
  let windowWidth;
  let navStyle;
  let isMobile;
  let mobileNavIsOpen = false;

  const initWindowSize = () => {
    windowWidth = window.screen.width;

    if (windowWidth < desktopResolution) {
      isMobile = true;

      navStyle = {
        transform: 'translateY(-16.9em)'
      }
    } else {
      isMobile = false;

      navStyle = {
        transform: 'translateY(0)'
      }
    }
  }
  
  const calculateWindowSize = () => {
    windowWidth = window.screen.width;
    
    mobileNavIsOpen = false;
    navMenu.current.innerHTML = 
      '<strong><span>&lsaquo;</span> corey-noble /<span>&rsaquo;</span></strong>';

    if (windowWidth < desktopResolution) {
      isMobile = true;
      nav.current.style.transform = 'translateY(-16.9em)';
    } else {
      isMobile = false;
      nav.current.style.transform = 'translateY(0)';
    }
  }

  const toggleMobileNav = () => {
    if (!isMobile) {
      return;
    } 

    if (mobileNavIsOpen) {
      nav.current.style.transform = 'translateY(-16.9em)';
      navMenu.current.innerHTML = 
      '<strong><span>&lsaquo;</span> corey-noble /<span>&rsaquo;</span></strong>';
      mobileNavIsOpen = false;
    } else {
      nav.current.style.transform = 'translateY(0)';
      navMenu.current.innerHTML = '&nbsp;';
      homeLink.current.focus();
      mobileNavIsOpen = true;
    }
  };

  window.onresize = calculateWindowSize;
  initWindowSize();

  return (
    <React.Fragment>
      <a href="#main" className={classes.SkipMain}>Skip to main content</a>

      <nav 
        className={classes.Nav}
        style={navStyle}
        ref={nav}
      >
        <ul>
          <li className={classes.NavIndex}>
            <Link 
              className={classes.NavHomeLink}
              to={`${process.env.PUBLIC_URL}/`}
              title="Visit the home page"
              onClick={toggleMobileNav}
              ref={homeLink}
            >
              <strong>&lsaquo; corey-noble /&rsaquo;</strong>
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/portfolio`}
              title="View my portfolio"
              onClick={toggleMobileNav}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/about`}
              title="Learn more about me"
              onClick={toggleMobileNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/blog`}
              title="Read my blog"
              onClick={toggleMobileNav}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/contact`}
              title="View my contact page"
              onClick={toggleMobileNav}
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
        <button 
          href="#" 
          className={classes.Pull} 
          title="Toggle the navigation menu" 
          aria-label="Navigation Menu"
          onClick={toggleMobileNav}
          ref={navMenu}
        >
          <strong><span>&lsaquo;</span> corey-noble /<span>&rsaquo;</span></strong>
        </button>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;