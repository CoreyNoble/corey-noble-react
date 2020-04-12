import React, { Component } from 'react';

import classes from './BlogEntries.module.scss';

class blogEntries extends Component {
  state = {
    blogEntries: [
      { title: `Search Engine Optimisation (SEO)`,
        paragraph: `Discussing the importance of search engine ranking and how to optimise a website to rank higher in a search&nbsp;index.`,
        url: `/search-engine-optimisation`,
        class: ``,
        key: `blog-search-engine-optimisation`,
      },
      { title: `Web Content Accessibility Guidelines (WCAG)`,
        paragraph: `Outlining the accessibility requirements that websites need to adhere&nbsp;to.`,
        url: `/web-content-accessibility-guidelines`,
        class: ``,
        key: `blog-web-content-accessibility-guidelines`,
      },
      { title: `My Aspirations`,
        paragraph: `Who I aspire to become. My&nbsp;goals.`,
        url: `/aspirations`,
        class: ``,
        key: `blog-my-aspirations`,
      },
      { title: `My Previous Role as a Web Production Specialist at Thrillworks Inc.`,
        paragraph: `Detailing my role as a Web Production Specialist at Thrillworks&nbsp;Inc.`,
        url: `/web-production-specialist`,
        class: ``,
        key: `blog-web-production-specialist`,
      },
      { title: `Blog Introduction`,
        paragraph: `An introduction to my blog. A bit about me, and my intentions for this&nbsp;space.`,
        url: `/blog-introduction`,
        class: ``,
        key: `blog-introduction`,
      },
    ]
  };

  render() {
    return (
      <React.Fragment>
        {this.state.blogEntries.map(entry => {
          return (
            <div key={entry.key} className={`${classes.BlogEntry} small-12 column ${entry.class}`}>
              <a href={`%PUBLIC_URL%${entry.url}`}>
                <h3 className="h4">{entry.title}</h3>
                <p dangerouslySetInnerHTML={{__html: entry.paragraph}}></p>
              </a>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default blogEntries;