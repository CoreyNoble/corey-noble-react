import React from 'react';
import classes from './Navigation.scss';

const navigation = props => {
  return (
    <a href="#main" className="skip-main">Skip to main content</a>

    <nav className="clearfix">
      <ul className="clearfix">
        <li id="nav-index">
          <a id="nav-home-link" href="{{root}}index.html" title="Visit the home page"><strong>&lsaquo; corey-noble
              /&rsaquo;</strong></a>
        </li>
        <li>
          <a href="{{root}}portfolio.html" title="View my portfolio">Portfolio</a>
        </li>
        <li>
          <a href="{{root}}about.html" title="Learn more about me">About</a>
        </li>
        <li>
          <a href="{{root}}blog.html" title="Read my blog">Blog</a>
        </li>
        <li>
          <a href="{{root}}contact.html" title="View my contact page">Contact</a>
        </li>
        <li id="nav-socials">
          <a id="nav-github-link" href="https://github.com/CoreyNoble" target="_blank" rel="noopener noreferrer"
            title="View my GitHub">
            <img src="{{root}}assets/img/github-icon.png" alt="GitHub" />
          </a>
          <a id="nav-linkedin-link" href="https://ca.linkedin.com/in/corey-noble" target="_blank" rel="noopener noreferrer"
            title="View my LinkedIn">
            <img src="{{root}}assets/img/linkedin-icon.png" alt="LinkedIn" />
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