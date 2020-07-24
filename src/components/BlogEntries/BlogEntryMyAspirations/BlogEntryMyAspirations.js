import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

const blogEntryMyAspirations = props => {
  return (
    <React.Fragment>
      <Section background="blue">
        <Row>
          <Column small={12}>
            <h1 class="header-no-parallax">My Aspirations</h1>
          </Column>
        </Row>
      </Section>

      <Section background="white">
        <Row>
          <Column small={12}>
            <p><small><a href="/blog" title="Return to the blog landing page">Back to Blog</a></small></p>

            <h2 class="h3" data-aos="fade-up" data-aos-delay="100">Who I aspire to become</h2>
            <p data-aos="fade-up" data-aos-delay="100">In life, I aspire to become an expert at my craft. I aspire to be healthy and I aspire to maintain a strong connection to those who matter most.</p>
            <p data-aos="fade-up" data-aos-delay="100">I want to become a Full-Stack Web Developer. To me, that means I would be good at Web Graphics and Design, and an expert at Front-End Web Development and Back-End Web Development.</p>
            <p data-aos="fade-up" data-aos-delay="100">I want to be healthy. I want to work out at a martial arts club as a hobby and maintain a good balance of diet and exercise. I want to ensure I live a long life so I can produce more for the world. I want to be relied upon. I want to work on big projects that mean something to people.</p>
            <p data-aos="fade-up" data-aos-delay="100">I want to have a family and raise my kids to be intelligent, caring and passionate individuals.</p>

            <hr data-aos="fade-up" data-aos-delay="100" />

            <h2 class="h3" data-aos="fade-up" data-aos-delay="100">My career goals</h2>
            <p data-aos="fade-up" data-aos-delay="100">First I want to be an excellent Front-End Developer. I want to be better at understanding complexities in Source Control. I want to be able to write JavaScript with ease and develop complex functions. I want to completely understand .PHP and be fluent at hooking up data. I want to be the guy that other developers come to for help, and the developer that is sought after when a project needs efficiencies developed.</p>
            <p data-aos="fade-up" data-aos-delay="100">Later on I want to have extensive Back-End knowledge (PHP, .NET, MVC, Apache). I want to be able to set up and manipulate servers. I want to learn how to debug and fix CMS issues. I want be able to relate and converse with other Back-End Developers about issues and practices.</p>

            <hr data-aos="fade-up" data-aos-delay="100" />

            <h2 class="h3" data-aos="fade-up" data-aos-delay="100">Where do I see myself in 5 years?</h2>
            <p data-aos="fade-up" data-aos-delay="100">Full Front-End Developer, Extensive JS and PHP knowledge, Source Control Expert.</p>

            <hr data-aos="fade-up" data-aos-delay="100" />

            <h2 class="h3" data-aos="fade-up" data-aos-delay="100">Where do I see myself in 10 years?</h2>
            <p data-aos="fade-up" data-aos-delay="100">JavaScript Guru, PHP know-it-all, Extensive Back-End knowledge.</p>

            <hr data-aos="fade-up" data-aos-delay="100" />

            <h2 class="h3" data-aos="fade-up" data-aos-delay="100">Things I want to learn more about, eventually</h2>
            <p data-aos="fade-up" data-aos-delay="100">Quality Assurance Tools, Application Development.</p>

            <hr data-aos="fade-up" data-aos-delay="100" />

            <h2 class="h3" data-aos="fade-up" data-aos-delay="100">Where do I see myself in 25 years?</h2>
            <p data-aos="fade-up"  data-aos-delay="100">An expert at my craft, as well as maintaining a balanced Work/Health/Family lifestyle.</p>

            <p><small><a href="/blog" title="Return to the blog landing page">Back to Blog</a></small></p>
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default blogEntryMyAspirations;