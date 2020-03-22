import React from 'react';
import classes from './BlogArticle.scss';

const blogArticle = props => {
  return (
    <div class="row">
      <div class="small-12 column">
        {/* Back CTA */}
        <p><small><a href="{{root}}blog.html" title="Return to the blog landing page">Back to Blog</a></small></p>

        {/* Body */}
        
        {/* Back CTA */}
        <p data-aos="fade-up"  data-aos-delay="100"><small><a href="{{root}}blog.html" title="Return to the blog landing page">Back to Blog</a></small></p>
      </div>
    </div>
  );
};

export default blogArticle;