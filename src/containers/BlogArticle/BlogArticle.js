import React from 'react';
import classes from './BlogArticle.scss';

const blogArticle = props => {
  return (
    <div className="row">
      <div className="small-12 column">
        {/* Back CTA */}
        <p><small><a href="%PUBLIC_URL%/blog" title="Return to the blog landing page">Back to Blog</a></small></p>

        {/* Body */}
        
        {/* Back CTA */}
        <p data-aos="fade-up"  data-aos-delay="100"><small><a href="%PUBLIC_URL%/blog" title="Return to the blog landing page">Back to Blog</a></small></p>
      </div>
    </div>
  );
};

export default blogArticle;