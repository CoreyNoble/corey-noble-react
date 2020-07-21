import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import classes from './IndexPortfolioSection.module.scss';

import PortfolioShowcase from '../../assets/img/showcase/portfolio-showcase.gif'

const indexPortfolioSection = props => {
  return (
    <Row>
      <Column small={12} data-aos="fade-right" data-aos-delay="100">
        <h2>My Work</h2>
        <h3 className={`h4 ${classes.IndexHeader}`}>Want to see what I can do? Check out my <a href="%PUBLIC_URL%/portfolio">Portfolio</a> page</h3>
      </Column>

        <Column small={12} data-aos="fade-up" data-aos-delay="100">
          <div className={classes.Showcase2}>
            <a href="%PUBLIC_URL%/portfolio">
              <div className={`${classes.ShowcaseExample} ${classes.NoBottomSpace}`}>
                <h3 className="h4 black">My Portfolio</h3>
                <img src={PortfolioShowcase} alt="View My Portfolio" />
              </div>
            </a>
          </div>
        </Column>
    </Row>
  );
};

export default indexPortfolioSection;