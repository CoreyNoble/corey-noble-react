import React from 'react';
import './ArrayCardioDay2.module.scss';

const arrayCardioDay2 = props => {
  // ## Array Cardio Day 2

  // Some data we can work with
  const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // some: At least one.
  // Array.prototype.every() // every: All of them.

  // One adult is >= 19
  const oneAdult = people.some(
    person => new Date().getFullYear() - person.year >= 19
  );

  console.log('Is there an adult in this group?');
  console.log(oneAdult);

  // All adults are >= 19
  const allAdults = people.every(
    person => new Date().getFullYear() - person.year >= 19
  );

  console.log('Are all people in this group adults?');
  console.log(allAdults);

  // Array.prototype.find()
  // Find is like filter, but instead of returning a subset of the array, it is going to return the first one that it finds.
  // find the comment with the ID of 823423
  const comment = comments.find(comment => comment.id === 823423);

  console.log('Find a specific comment in an array:');
  console.table(comment);

  // Array.prototype.findIndex()
  // Find the index of the comment with this ID
  const index = comments.findIndex(comment => comment.id === 823423);

  // Now delete the comment with the ID of 823423

  // comments.splice(index, 1); //splice: removes the item in the array.

  // new array of updated comments.
  const newComments = [
    // ... spread the items into the new array
    // Start at 0, go until index
    ...comments.slice(0, index),
    // start at index + 1
    ...comments.slice(index + 1)
  ];

  console.log('Delete the comment with an id of: 823423');
  console.table(comments);

  return (
    <React.Fragment>
      {/* <!-- Introduction --> */}
      <div className="js30-intro section white">
        <div className="row">
          <div className="small-12 column">
            {/* <!-- Back CTA --> */}
            <p className="back-cta"><small><strong><a href="{{root}}portfolio/development/javascript30.html"
                    title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small>
            </p>

            {/* <!-- Title --> */}
            <h1>Array Cardio Day 2</h1>

            {/* <!-- Accordion --> */}
            <ul className="accordion" data-accordion data-allow-all-closed="true">
              <li className="accordion-item" data-accordion-item="">
                {/* <!-- Title --> */}
                <a href="#" className="accordion-title" aria-controls="project-synopsis" role="tab"  aria-expanded="false"
                  aria-selected="false">
                  <h2 className="h5">Project Synopsis and&nbsp;Code</h2>
                </a>
                {/* <!-- Content --> */}
                <div className="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby="Project Synopsis and Code"
                  aria-hidden="true" id="project-synopsis" style="display: none;">
                  <p>In continuation of <a href="{{root}}portfolio/development/javascript30/4-array-cardio-day-1.html">Array
                      Cardio Day 1</a> I am presented with some arrays[] of data. I use array methods to manipulate
                    the&nbsp;data.</p>
                  <p><strong>.some()</strong>&nbsp;- Method to check if <strong>one</strong> of the items is true. In this
                    project I check if one person is&nbsp;>=&nbsp;19.</p>
                  <p><strong>.every()</strong>&nbsp;- Method to check if <strong>all</strong> of the items are true. In this
                    project I check if every person is&nbsp;>=&nbsp;19.</p>
                  <p><strong>.find()</strong>&nbsp;- Find is like .filter(), but instead of returning a subset of the array,
                    it only returns the first one it finds. In this project I find a comment with a specific ID (comment.id
                    ===&nbsp;823423).</p>
                  <p><strong>.findIndex()</strong>&nbsp;- Finds the index value of the item in an array. In this project I
                    find the index of the comment ID that is to be&nbsp;removed.</p>
                  <p><strong>... spread</strong>&nbsp;- Spreading items into an array. In this project I spread all of the
                    comments back into the array and slice out the 'index' that is to be&nbsp;removed.</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="bPKzeJ"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 7 - Array Cardio Day 2">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/bPKzeJ/">
                        JavaScript30 - 7 - Array Cardio Day 2</a> by Corey Noble (<a
                        href="https://codepen.io/CoreyNoble">@CoreyNoble</a>)
                      on <a href="https://codepen.io">CodePen</a>.</span>
                  </p>
                  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- JavaScript30 | 7 | Array Cardio Day 2 --> */}
      <div className="section blue">
        <div className="row">
          <div id="javascript30-7" className="small-12 column">
            <h2 className="h4">This project work is only visible within the JavaScript&nbsp;console.</h2>
            <div className="row">
              <div className="small-12 medium-6 large-3 columns">
                <h3 className="h5">Chrome</h3>
                  <p>Windows: Ctrl + Shift +&nbsp;J.</p>
                  <p>Mac: Cmd + Opt +&nbsp;J.</p>
              </div>
              <div className="small-12 medium-6 large-3 columns">
                <h3 className="h5">Firefox</h3>
                  <p>Windows: Ctrl + Shift +&nbsp;K.</p>
                  <p>Mac: Cmd + Opt +&nbsp;K.</p>
              </div>
              <div className="small-12 medium-6 large-3 columns">
                <h3 className="h5">Safari</h3>
                <p>Cmd + Opt +&nbsp;C.</p>
              </div>
              <div className="small-12 medium-6 large-3 columns">
                <h3 className="h5">Edge&nbsp;/ Internet&nbsp;Explorer</h3>
                  <p>F12, then click on the “Console”&nbsp;tab.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default arrayCardioDay2;