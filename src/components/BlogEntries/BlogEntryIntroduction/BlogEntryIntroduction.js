import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

const blogEntryIntroduction = props => {
  return (
    <React.Fragment>
      <Section background="blue">
            <Row>
              <Column small={12}>
                <h1 className="header-no-parallax">Blog Introduction</h1>
              </Column>
            </Row>
          </Section>

          <Section background="white">
          <Row>
            <Column small={12}>
              <p><small><a href="/blog" title="Return to the blog landing page">Back to Blog</a></small></p>

              <h2 data-aos="fade-up" data-aos-delay="100">Welcome to my blog</h2>
              <p data-aos="fade-up" data-aos-delay="100">This is a space for me to talk about the work I do, communicate ideas that I have, discuss topics that are on my mind, and share the processes I use to create beautiful websites and graphics.</p>
              <p data-aos="fade-up" data-aos-delay="100">As I learn throughout my career and continue to post to this archive, I hope that this blog will turn into a resource for me to look back on, reflect, and grow.</p>
              <p data-aos="fade-up" data-aos-delay="100">At the time of writing this I am 23 years old. I have been through 3 extensive years of college study; I have worked as a game developer, started a web development company, and I am now a <strong>Web&nbsp;Production&nbsp;Specialist</strong> at <a href="https://thrillworks.com/" className="thrillworks-text" target="_blank" rel="noopener noreferrer"><strong>Thrillworks&nbsp;Inc.</strong></a></p>
              <p data-aos="fade-up" data-aos-delay="100"> I love working on the web because it provides a wealth of job opportunities and varying types of technologies to learn in and challenge myself. I consider myself lucky to have found a career that I love this early in life. I enjoy the work that I do and I try not to take that for granted.</p>
              <p data-aos="fade-up" data-aos-delay="100">This blog is an expression of myself, a way for me to take a snapshot in time and save my thoughts. I try to be an open person, so please continue through my blog if you are interested in the things I have to say and the work I have to show.</p>
            </Column>
          </Row>
        </Section>
    </React.Fragment>
  );
};

export default blogEntryIntroduction;