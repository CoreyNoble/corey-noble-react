import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './ArrayCardioDay2.module.scss';

const arrayCardioDay2 = props => {
  // // ## Array Cardio Day 2

  // // Some data we can work with
  // const people = [
  //   { name: 'Wes', year: 1988 },
  //   { name: 'Kait', year: 1986 },
  //   { name: 'Irv', year: 1970 },
  //   { name: 'Lux', year: 2015 }
  // ];

  // const comments = [
  //   { text: 'Love this!', id: 523423 },
  //   { text: 'Super good', id: 823423 },
  //   { text: 'You are the best', id: 2039842 },
  //   { text: 'Ramen is my fav food ever', id: 123523 },
  //   { text: 'Nice Nice Nice!', id: 542328 }
  // ];

  // // Some and Every Checks
  // // Array.prototype.some() // some: At least one.
  // // Array.prototype.every() // every: All of them.

  // // One adult is >= 19
  // const oneAdult = people.some(
  //   person => new Date().getFullYear() - person.year >= 19
  // );

  // console.log('Is there an adult in this group?');
  // console.log(oneAdult);

  // // All adults are >= 19
  // const allAdults = people.every(
  //   person => new Date().getFullYear() - person.year >= 19
  // );

  // console.log('Are all people in this group adults?');
  // console.log(allAdults);

  // // Array.prototype.find()
  // // Find is like filter, but instead of returning a subset of the array, it is going to return the first one that it finds.
  // // find the comment with the ID of 823423
  // const comment = comments.find(comment => comment.id === 823423);

  // console.log('Find a specific comment in an array:');
  // console.table(comment);

  // // Array.prototype.findIndex()
  // // Find the index of the comment with this ID
  // const index = comments.findIndex(comment => comment.id === 823423);

  // // Now delete the comment with the ID of 823423

  // // comments.splice(index, 1); //splice: removes the item in the array.

  // // new array of updated comments.
  // const newComments = [
  //   // ... spread the items into the new array
  //   // Start at 0, go until index
  //   ...comments.slice(0, index),
  //   // start at index + 1
  //   ...comments.slice(index + 1)
  // ];

  // console.log('Delete the comment with an id of: 823423');
  // console.table(comments);

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Array Cardio Day 2</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 7 | Array Cardio Day 2 */}
      <Section background="blue">
        <Row>
          <Column className={classes.ArrayCardioDay2} small={12}>
            <h2 className="h4">This project work is only visible within the JavaScript&nbsp;console.</h2>
            <Row>
              <Column small={12} medium={6} large={3}>
                <h3 className={`h5 ${classes.h5}`}>Chrome</h3>
                  <p>Windows: Ctrl + Shift +&nbsp;J.</p>
                  <p>Mac: Cmd + Opt +&nbsp;J.</p>
              </Column>
              <Column small={12} medium={6} large={3}>
                <h3 className={`h5 ${classes.h5}`}>Firefox</h3>
                  <p>Windows: Ctrl + Shift +&nbsp;K.</p>
                  <p>Mac: Cmd + Opt +&nbsp;K.</p>
              </Column>
              <Column small={12} medium={6} large={3}>
                <h3 className={`h5 ${classes.h5}`}>Safari</h3>
                <p>Cmd + Opt +&nbsp;C.</p>
              </Column>
              <Column small={12} medium={6} large={3}>
                <h3 className={`h5 ${classes.h5}`}>Edge&nbsp;/ Internet&nbsp;Explorer</h3>
                  <p>F12, then click on the “Console”&nbsp;tab.</p>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default arrayCardioDay2;