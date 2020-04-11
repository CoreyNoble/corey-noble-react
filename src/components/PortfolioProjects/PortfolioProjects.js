import React from 'react';
import { Link } from "react-router-dom";

import classes from './PortfolioProjects.module.scss';

import Section from '../../containers/Section/Section';

import MotusbankShowcase from '../../assets/img/showcase/Motusbank.jpg';
import PCFinancialNewDigitalExperienceShowcase from '../../assets/img/showcase/PC-Financial-New-Digital-Experience.jpg';
import ReactBurgerBuilderShowcase from '../../assets/img/showcase/react-burger-builder.gif';
import JavaScript30Showcase from '../../assets/img/showcase/JavaScript30.gif';
import JavaScriptTetrisShowcase from '../../assets/img/showcase/JavaScript-Tetris.gif';
import CMSShowcase from '../../assets/img/showcase/CMS-showcase.jpg';
import ResponsiveEmailShowcase from '../../assets/img/showcase/responsive-email-showcase.jpg';

const portfolioProjects = props => {
  return (
    <React.Fragment>
      <Section background="blue">
        <div className={`${classes.ShowcaseHead} row`}>
          <div className="small-12 column">
            <h2>Live Client Projects</h2>
            <p>Below are some live client projects that I have had the pleasure to help&nbsp;build.</p>
          </div>
        </div>

        <div className={`row ${classes.Showcase2} margin-bottom-6`}>
          <div className="small-12 large-5 columns">
            <h3>motusbank</h3>
            <p>I had the pleasure of working alongside many talented people at both Thrillworks and motusbank to help build
              the motusbank website from the ground-up. This project was custom built using SCSS and the Zurb Foundation for
              Sites framework on the front&#8209;end. Architected in ASP.NET on the back&#8209;end and implemented into the
              Kentico CMS platform. I assisted in all aspects of development for this&nbsp;website.</p>
            <Link className={`${classes.CTA} ${classes.ProjectCTA}`} to="https://www.motusbank.ca/" target="_blank" rel="noopener noreferrer"
              title="motusbank. View the website.">View the website</Link>
          </div>
          <div className="small-12 large-7 columns end">
            <Link to="https://www.motusbank.ca/" target="_blank" rel="noopener noreferrer"
              title="motusbank. View the website.">
              <div className={`${classes.ShowcaseExample} no-bottom-space margin-top-0-mobile-margin-top-2`}>
                <img src={MotusbankShowcase} alt="" role="presentation" />
              </div>
            </Link>
          </div>
        </div>
        <div className={`row ${classes.Showcase2}`}>
          <div className="small-12 large-5 large-push-7 columns" data-aos="fade-up" data-aos-delay="100">
            <h3><em>PC&nbsp;Financial</em></h3>
            <p>I have developed many aspects of the <em>PC&nbsp;Financial</em> website over the past few years. I was heavily
              involved in creating this page that helps users identify new changes in their mobile app. This website is built
              using raw CSS and vanilla JavaScript on the front&#8209;end. The back&#8209;end is ASP.NET, integrated with the
              Sitefinity CMS&nbsp;platform.</p>
            <Link className={`${classes.CTA} ${classes.ProjectCTA}`} to="https://www.pcfinancial.ca/en/campaign/new-digital-experience" target="_blank"
              rel="noopener noreferrer" title="PC Financial, New Digital Experience. View the project.">View the project</Link>
          </div>
          <div className="small-12 large-7 large-pull-5 columns end" data-aos="fade-up" data-aos-delay="100">
            <Link to="https://www.pcfinancial.ca/en/campaign/new-digital-experience" target="_blank" rel="noopener noreferrer"
              title="PC Financial, New Digital Experience. View the project.">
              <div className={`${classes.ShowcaseExample} margin-top-0-mobile-margin-top-2 no-bottom-space`}>
                <img src={PCFinancialNewDigitalExperienceShowcase} alt="" role="presentation" />
              </div>
            </Link>
          </div>
        </div>
      </Section>

      <Section background="black">
        <div className={`${classes.ShowcaseHead} row`}>
          <div className="small-12 column" data-aos="fade-right" data-aos-delay="100">
            <h2>Learning and Tinkering</h2>
            <p>Below are projects I have worked on when trying to better my understanding of specific web technologies.
              Whether it's through a course, tutorial or a GitHub repository. I try to find interesting project ideas and
              improve upon them, while also gaining a wealth of resources to draw from in my day-to-day&nbsp;use.</p>
          </div>
        </div>

        <div className={`row ${classes.Showcase2} margin-bottom-6`}>
          <div className="small-12 large-5 columns" data-aos="fade-up" data-aos-delay="100">
            <h3>React Burger Builder</h3>
            <p>A burger builder application built with React, following the Udemy course <Link
                to="https://www.udemy.com/react-the-complete-guide-incl-redux/" target="_blank" rel="noopener noreferrer"
                title="View the React - The Complete Guide (incl Hooks, React Router, Redux) course on Udemy.">React - The
                Complete Guide (incl Hooks, React Router, Redux)</Link> by Maximillian Schwarzmüller of&nbsp;Academind.</p>
            <Link className={`${classes.CTA} ${classes.ProjectCTA}`} to="https://burger-builder-corey-noble.netlify.com/" target="_blank"
              rel="noopener noreferrer" title="React Burger Builder. View the project.">View the project</Link>
            <Link className={`${classes.CTA} ${classes.CodeCTA}`} to="https://github.com/CoreyNoble/react-complete-guide" target="_blank"
              rel="noopener noreferrer" title="React Burger Builder. View the code.">Code repository</Link>
          </div>
          <div className="small-12 large-7 columns end aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <Link to="https://burger-builder-corey-noble.netlify.com/" target="_blank" rel="noopener noreferrer"
              title="React Burger Builder. View the project.">
              <div className={`${classes.ShowcaseExample} no-bottom-space margin-top-0-mobile-margin-top-2`}>
                <img src={ReactBurgerBuilderShowcase} alt="" role="presentation" />
              </div>
            </Link>
          </div>
        </div>

        <div className={`row ${classes.Showcase2} margin-bottom-6`}>
          <div className="small-12 large-5 large-push-7 columns" data-aos="fade-up" data-aos-delay="100">
            <h3>JavaScript 30</h3>
            <p>30 JavaScript (ES6) projects built and improved upon after following the <Link to="https://javascript30.com/"
                target="_blank" rel="noopener noreferrer" title="View the JavaSctipt30 course by Wes Bos.">JavaScript30
                course</Link> created by Wes&nbsp;Bos.</p>
            <Link className={`${classes.CTA} ${classes.ProjectCTA}`} to={`${process.env.PUBLIC_URL}/portfolio/javascript30`}
              title="JavaScript 30. View the projects and the code.">View the projects and code</Link>
          </div>
          <div className="small-12 large-7 large-pull-5 columns end aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <Link to={`${process.env.PUBLIC_URL}/portfolio/javascript30`} title="JavaScript 30. View the projects and the code.">
              <div className={`${classes.ShowcaseExample} no-bottom-space margin-top-0-mobile-margin-top-2`}>
                <img src={JavaScript30Showcase} alt="" role="presentation" />
              </div>
            </Link>
          </div>
        </div>

        <div className="row showcase-2">
          <div className="small-12 large-5 columns" data-aos="fade-up" data-aos-delay="100">
            <h3>JavaScript Tetris</h3>
            <p>A web version of the popular game Tetris. Developed with JavaScript. Built and improved upon after following a
              detailed <Link to="https://www.youtube.com/watch?v=H2aW5V46khA" target="_blank" rel="noopener noreferrer"
                title="Follow the lesson by Meth Meth Method that helped me create Tetris using JavaScript">lesson by
                Meth&nbsp;Meth&nbsp;Method</Link>.</p>
            <Link className={`${classes.CTA} ${classes.ProjectCTA}`} to={`${process.env.PUBLIC_URL}/portfolio/javascript-tetris`}
              title="JavaScript Tetris. View the project and the code.">View the project and code</Link>
          </div>
          <div className="small-12 large-7 columns end" data-aos="fade-up" data-aos-delay="100">
            <Link to={`${process.env.PUBLIC_URL}/portfolio/javascript-tetris`}
              title="JavaScript Tetris. View the project and the code.">
              <div className={`${classes.ShowcaseExample} no-bottom-space margin-top-0-mobile-margin-top-2`}>
                <img src={JavaScriptTetrisShowcase} alt="" role="presentation" />
              </div>
            </Link>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className={`${classes.ShowcaseHead} row`}>
          <div className="small-12 column" data-aos="fade-right" data-aos-delay="100">
            <h2>Other Skills</h2>
            <p>Below are examples of other relevant skills that I have accumulated throughout my&nbsp;career.</p>
          </div>
        </div>

        <div className={`row ${classes.Showcase2}`}>
          <div className="small-12 medium-6 columns" data-aos="fade-up" data-aos-delay="100">
            <Link to={`${process.env.PUBLIC_URL}/portfolio/cms/skillset.html`}
              title="A list and description of the content management systems I have development experience with.">
              <div className={`${classes.ShowcaseExample} no-bottom-space-desktop`}>
                <h3 className="h4 black">Content Management</h3>
                <img src={CMSShowcase}
                  alt="My Content Management Skills. Sitefinity. Kentico. Adobe Experience Manager. WordPress. RedDot. SiteCore." />
              </div>
            </Link>
          </div>
          <div className="small-12 medium-6 columns" data-aos="fade-up" data-aos-delay="100">
            <Link to={`${process.env.PUBLIC_URL}/portfolio/responsive-email-template-compiled`}
              title="A responsive email template I developed.">
              <div className={`${classes.ShowcaseExample} no-bottom-space`}>
                <h3 className="h4 black">Responsive Email</h3>
                <img src={ResponsiveEmailShowcase}
                  alt="Responsive email component development using Foundation for Emails" />
              </div>
            </Link>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

export default portfolioProjects;