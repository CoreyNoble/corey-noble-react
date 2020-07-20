import React from 'react';

import { Row, Column } from 'react-foundation';

import classes from './BlogArticle.scss';

const blogArticle = props => {
  return (
    <Row>
      <Column small={12}>
        {/* Back CTA */}
        <p><small><a href="%PUBLIC_URL%/blog" title="Return to the blog landing page">Back to Blog</a></small></p>

        {/* Body */}
        
        {/* Back CTA */}
        <p data-aos="fade-up"  data-aos-delay="100"><small><a href="%PUBLIC_URL%/blog" title="Return to the blog landing page">Back to Blog</a></small></p>
      </Column>
    </Row>
  );
};

export default blogArticle;