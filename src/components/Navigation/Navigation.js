import React from 'react';
import { Link } from "react-router-dom";

import './Navigation.scss';

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
    <nav className="clearfix">
      <a href="#main" className="skip-main">Skip to main content</a>

      <ul className="clearfix">
        <li id="nav-index">
          <Link 
            id="nav-home-link"
            to={`${process.env.PUBLIC_URL}/`}
            title="Visit the home page"
          >
            <strong>&lsaquo; corey-noble/&rsaquo;</strong>
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
        <li id="nav-socials">
          <Link 
            id="nav-github-link"
            to="https://github.com/CoreyNoble"
            target="_blank"
            rel="noopener noreferrer"
            title="View my GitHub"
          >
            <img src={GitHubLogo} alt="GitHub" />
          </Link>
          <Link 
            id="nav-linkedin-link"
            to="https://ca.linkedin.com/in/corey-noble"
            target="_blank"
            rel="noopener noreferrer"
            title="View my GitHub"
          >
            <img src={LinkedInLogo} alt="LinkedIn" />
          </Link>
        </li>
      </ul>
      <a href="#" id="pull" onClick={() => {viewSomething()}} title="Toggle the navigation menu" aria-label="Navigation Menu">
        <strong><span>&lsaquo;</span> corey-noble /<span>&rsaquo;</span></strong>
      </a>
    </nav>
  );
};

export default navigation;