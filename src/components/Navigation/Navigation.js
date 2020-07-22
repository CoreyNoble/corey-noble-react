import React from 'react';
import { Link } from "react-router-dom";

import classes from './Navigation.module.scss';

import GitHubLogo from '../../assets/img/github-icon.png';
import LinkedInLogo from '../../assets/img/linkedin-icon.png';

const navigation = props => {
  let action = 1;

  function viewSomething() {
    if (action === 1) {
      document.getElementById('pull').innerHTML = '&nbsp;';
      action = 2;
    } else {
      document.getElementById('pull').innerHTML = '<strong><span>&lsaquo;</span> corey-noble /<span>&rsaquo;</span></strong>';
      action = 1;
    }
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
            >
              <strong>&lsaquo; corey-noble /&rsaquo;</strong>
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/portfolio`}
              title="View my portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/about`}
              title="Learn more about me"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/blog`}
              title="Read my blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to={`${process.env.PUBLIC_URL}/contact`}
              title="View my contact page"
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
        <a href="#" className={classes.Pull} onClick={() => {viewSomething()}} title="Toggle the navigation menu" aria-label="Navigation Menu">
          <strong><span>&lsaquo;</span> corey-noble /<span>&rsaquo;</span></strong>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default navigation;