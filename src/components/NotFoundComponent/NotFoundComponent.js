import React from 'react';
import { Link } from "react-router-dom";

import classes from './NotFoundComponent.module.scss';

import Section from '../../containers/Section/Section';

const notFound = props => {
  return (
    <React.Fragment>
      <Section background="blue">
        <div className="row">
          <div className="small-12 column">
            <h1 className="header-no-parallax">404</h1>
            <p className="h3">Sorry, that page does not exist.</p>
          </div>
        </div>
      </Section>

      <Section background="black">
        <div className="row">
          <div className="small-12 column">
            <h2 className="h3">Please visit one of the pages below:</h2>
            <ul>
              <li className="h4"><Link to={`${process.env.PUBLIC_URL}/`} title="Visit the home page">Home</Link></li>
              <li className="h4"><Link to={`${process.env.PUBLIC_URL}/portfolio`} title="View my portfolio">Portfolio</Link></li>
              <li className="h4"><Link to={`${process.env.PUBLIC_URL}/about`} title="Learn more about me">About</Link></li>
              <li className="h4"><Link to={`${process.env.PUBLIC_URL}/blog`} title="Read my blog">Blog</Link></li>
              <li className="h4"><Link to={`${process.env.PUBLIC_URL}/contact`} title="View my contact page">Contact</Link></li>
            </ul>

            <div className={`${classes.ResumeCTA} ${classes.ResumeCTALeft}`}>
              <Link className={`${classes.Resume} h5`} to={`${process.env.PUBLIC_URL}/assets/pdf/CoreyNoble-Resume.pdf`}>View My CV / Resume</Link>
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

export default notFound;