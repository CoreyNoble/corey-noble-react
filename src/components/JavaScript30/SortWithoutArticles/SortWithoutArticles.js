import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './SortWithoutArticles.module.scss';

const sortWithoutArticles = props => {
  // // Data we're sorting
  // const bands = [
  //   'The Plot in You',
  //   'The Devil Wears Prada',
  //   'Pierce the Veil',
  //   'Norma Jean',
  //   'The Bled',
  //   'Say Anything',
  //   'The Midway State',
  //   'We Came as Romans',
  //   'Counterparts',
  //   'Oh, Sleeper',
  //   'A Skylit Drive',
  //   'Anywhere But Here',
  //   'An Old Dog'
  // ];

  // // Takes in a string, strips characters, and returns the string.
  // function strip(bandName) {
  //   // Regular Expression (Regex) that replaces the 'a ', 'the ', 'an ' with an empty character ''. This is insensitive (case) '/i'. .trim() removes spaces at the end.
  //   return bandName.replace(/^(a |the |an)/i, '').trim();
  // }

  // // Sort the bands array (a, b). When the data is stripped (strip(a), strip(b)), is a > b? yes +1, no -1.
  // const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

  // // Set the <ul> innerHTML to a list <li> of band names using the sortedBands array.
  // document.querySelector('#bands').innerHTML = sortedBands
  //   // Map over the array to create each <li> entry.
  //   .map(band => `<li>${band}</li>`)
  //   .join(''); // Convert to one string

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Sort Without Articles</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 17 | Sort Without Articles */}
      <Section classProp={classes.SortWithoutArticles}>
        <ul id="bands"></ul>
      </Section>
    </React.Fragment>
  );
};

export default sortWithoutArticles;