import React from 'react';
import { Link } from "react-router-dom";

import classes from './NotFound.module.scss';

import Section from '../../containers/Section/Section';

const notFound = props => {
  return (
    <React.Fragment>
      <Section background="blue">
        <div class="row">
          <div class="small-12 column">
            <h1 class="header-no-parallax">404</h1>
            <p class="h3">Sorry, that page does not exist.</p>
          </div>
        </div>
      </Section>

      <Section background="black">
        <div class="row">
          <div class="small-12 column">
            <h2 class="h3">Please visit one of the pages below:</h2>
            <ul>
              <li class="h4"><Link to={`${process.env.PUBLIC_URL}/`} title="Visit the home page">Home</Link></li>
              <li class="h4"><Link to={`${process.env.PUBLIC_URL}/portfolio`} title="View my portfolio">Portfolio</Link></li>
              <li class="h4"><Link to={`${process.env.PUBLIC_URL}/about`} title="Learn more about me">About</Link></li>
              <li class="h4"><Link to={`${process.env.PUBLIC_URL}/blog`} title="Read my blog">Blog</Link></li>
              <li class="h4"><Link to={`${process.env.PUBLIC_URL}/contact`} title="View my contact page">Contact</Link></li>
            </ul>

            <div class="resume-cta resume-cta-left">
              <Link id="resume" class="h5" to={`${process.env.PUBLIC_URL}/assets/pdf/CoreyNoble-Resume.pdf`}>View My CV / Resume</Link>
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

export default notFound;