import React, { Component } from 'react';

import { Column } from 'react-foundation-components/lib/grid-flex';

import classes from './BlogEntries.module.scss';

class BlogEntries extends Component {
  state = {
    blogEntries: [
      { title: `Search Engine Optimisation (SEO)`,
        paragraph: `Discussing the importance of search engine ranking and how to optimise a website to rank higher in a search&nbsp;index.`,
        url: `search-engine-optimisation`,
        class: ``,
      },
      { title: `Web Content Accessibility Guidelines (WCAG)`,
        paragraph: `Outlining the accessibility requirements that websites need to adhere&nbsp;to.`,
        url: `web-content-accessibility-guidelines`,
        class: ``,
      },
      { title: `My Aspirations`,
        paragraph: `Who I aspire to become. My&nbsp;goals.`,
        url: `aspirations`,
        class: ``,
      },
      { title: `My Previous Role as a Web Production Specialist at Thrillworks Inc.`,
        paragraph: `Detailing my role as a Web Production Specialist at Thrillworks&nbsp;Inc.`,
        url: `web-production-specialist`,
        class: ``,
      },
      { title: `Blog Introduction`,
        paragraph: `An introduction to my blog. A bit about me, and my intentions for this&nbsp;space.`,
        url: `blog-introduction`,
        class: `${classes.NoBottomSpace}`,
      },
    ]
  };

  

  render() {
    return (
      <React.Fragment>
        {this.state.blogEntries.map(entry => {
          return (
            <Column 
              className={`${classes.BlogEntry}`} 
              small={12}
              key={entry.url} 
              data-aos="fade-right" data-aos-delay="100"
            >
              <a href={`${window.location.href}/${entry.url}`} className={entry.class}>
                <h3 className="h4">{entry.title}</h3>
                <p dangerouslySetInnerHTML={{__html: entry.paragraph}}></p>
              </a>
            </Column>
          );
        })}
      </React.Fragment>
    );
  }
}

export default BlogEntries;