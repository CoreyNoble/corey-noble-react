import React from 'react';
import './Navigation.scss';

import GitHubLogo from '../../assets/img/github-icon.png';
import LinkedInLogo from '../../assets/img/linkedin-icon.png';

const navigation = props => {
  return (
    <nav className="clearfix">
      <a href="#main" className="skip-main">Skip to main content</a>

      <ul className="clearfix">
        <li id="nav-index">
          <a id="nav-home-link" href={`${process.env.PUBLIC_URL}/`} title="Visit the home page"><strong>&lsaquo; corey-noble
              /&rsaquo;</strong></a>
        </li>
        <li>
          <a href={`${process.env.PUBLIC_URL}/portfolio`} title="View my portfolio">Portfolio</a>
        </li>
        <li>
          <a href={`${process.env.PUBLIC_URL}/about`} title="Learn more about me">About</a>
        </li>
        <li>
          <a href={`${process.env.PUBLIC_URL}/blog`} title="Read my blog">Blog</a>
        </li>
        <li>
          <a href={`${process.env.PUBLIC_URL}/contact`} title="View my contact page">Contact</a>
        </li>
        <li id="nav-socials">
          <a id="nav-github-link" href="https://github.com/CoreyNoble" target="_blank" rel="noopener noreferrer"
            title="View my GitHub">
            <img src={GitHubLogo} alt="GitHub" />
          </a>
          <a id="nav-linkedin-link" href="https://ca.linkedin.com/in/corey-noble" target="_blank" rel="noopener noreferrer"
            title="View my LinkedIn">
            <img src={LinkedInLogo} alt="LinkedIn" />
          </a>
        </li>
      </ul>
      <a href="#" id="pull" onClick="viewSomething()" title="Toggle the navigation menu" aria-label="Navigation Menu">
        <strong><span>&lsaquo;</span> corey-noble /<span>&rsaquo;</span></strong>
      </a>
      
      {/* ~~~ <script>
        var action = 1;

        function viewSomething() {
          if (action == 1) {
            document.getElementById('pull').innerHTML = '&nbsp;';
            action = 2;
          } else {
            document.getElementById('pull').innerHTML = '<strong><span>&lsaquo;</span> corey-noble /<span>&rsaquo;</span></strong>';
            action = 1;
          }
        }
      </script> */}
    </nav>
  );
};

export default navigation;