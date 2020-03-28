import React from 'react';
import classes from './BlogEntry.module.scss';

const blogEntry = props => {
  return (
    <div className="blog-entry small-12 column">
      <a href="%PUBLIC_URL%/blog/search-engine-optimisation">
        <h3 className="h4">Search Engine Optimisation</h3>
        <p>Discussing the importance of search engine ranking and how to optimise a website to rank higher in a
          search&nbsp;index.</p>
      </a>
    </div>
  );
};

export default blogEntry;