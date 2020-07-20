import React from 'react';
import { Link } from "react-router-dom";

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import classes from './SiteIndexComponent.module.scss';

import Section from '../../containers/Section/Section';

const siteIndex = props => {
  return (
    <React.Fragment>
      <Section background="blue">
        <Row>
          <Column small={12}>
            <h1 className="header-no-parallax">Site Index</h1>
          </Column>
        </Row>
      </Section>

      <Section background="black">
        <Row>
          <Column small={12}>
            <h2 className="h3">Below is my full website hierarchy:</h2>
            <ul>
              <li className="h4"><Link to={`${process.env.PUBLIC_URL}/`} title="Visit the home page">Home</Link></li>
              <li className="h4">
                <Link to={`${process.env.PUBLIC_URL}/portfolio`} title="View my portfolio">Portfolio</Link>
                <ul>
                  <li className="h4"><Link to="https://www.motusbank.ca/" target="_blank" rel="noopener noreferrer"
                      title="motusbank. View the website.">motusbank</Link></li>
                  <li className="h4"><Link to="https://www.pcfinancial.ca/en/campaign/new-digital-experience" target="_blank"
                      rel="noopener noreferrer"
                      title="PC Financial, New Digital Experience. View the project."><em>PC&nbsp;Financial</em></Link></li>
                  <li className="h4"><Link to="https://burger-builder.corey-noble.com" target="_blank" rel="noopener noreferrer"
                      title="React Burger Builder. View the project.">React Burger Builder</Link></li>
                  <li className="h4"><Link to={`${process.env.PUBLIC_URL}/portfolio/development/javascript30`}
                      title="JavaScript 30. View the projects and the code.">JavaScript 30</Link></li>
                  <li className="h4"><Link to={`${process.env.PUBLIC_URL}/portfolio/development/javascript-tetris`}
                      title="JavaScript Tetris. View the project and the code.">JavaScript Tetris</Link></li>
                  <li className="h4"><Link to={`${process.env.PUBLIC_URL}/portfolio/cms/skillset`}
                      title="A list and description of the content management systems I have development experience with.">Content
                      Management</Link></li>
                  <li className="h4"><Link to={`${process.env.PUBLIC_URL}/portfolio/development/responsive-email-template-compiled`}
                      title="A responsive email template I developed.">Responsive Email</Link></li>
                </ul>
              </li>
              <li className="h4"><Link to={`${process.env.PUBLIC_URL}/about`} title="Learn more about me">About</Link></li>
              <li className="h4"><Link to={`${process.env.PUBLIC_URL}/blog`} title="Read my blog">Blog</Link></li>
              <li className="h4"><Link to={`${process.env.PUBLIC_URL}/contact`} title="View my contact page">Contact</Link></li>
            </ul>

            <div className={`${classes.ResumeCTA} ${classes.ResumeCTALeft}`}>
              <Link className={`${classes.Resume} h5`} to={`${process.env.PUBLIC_URL}/assets/pdf/CoreyNoble-Resume.pdf`} target="_blank"
                rel="noopener noreferrer">View My CV / Resume</Link>
            </div>
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default siteIndex;