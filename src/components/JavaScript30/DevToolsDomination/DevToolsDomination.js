import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import './DevToolsDomination.module.scss';

const devToolsDomination = props => {
  const dogs = [
    { name: 'Dante', age: 5 },
    { name: 'hugo', age: 8 }
  ];
  
  // Regular Console Log
  console.log('Regular console.log message:');
  
  // Interpolated Console Log (Inject data)
  const value = 'VALUE';
  console.log("Vanilla console.log with a %s in its' string!", 'VALUE');
  console.log(`ES6 console.log with a ${value} in its\' string`);
  
  // Styled Console Log
  console.log(
    '%c Styled console.log',
    'font-size: 3em; background: #6dbfbf; text-shadow: 2px 2px 0 #888'
  );
  
  // Warning! Console Log
  console.warn('WARNING console.log');
  
  // Error Console Log
  console.error('ERROR console.log');
  
  // Info Console Log
  console.info('Information console.log');
  
  // Console Log an error if something is false (assert)
  const p = document.querySelector('p');
  console.assert(
    p.classList.contains('ouch'),
    'Firing console.log when a test fails'
  );
  
  // clearing the console
  // console.clear();
  console.log('console.clear would clear the console.');
  
  // Viewing DOM Elements
  console.log('console.log a DOM element (p)');
  // .log: Display the element
  console.log(p);
  console.log(
    'console.dir will show you the dropdown of options for a DOM element (p)'
  );
  // .dir: display available methods and properties for that element
  console.dir(p);
  
  // Grouping together
  console.log('Looping Through, Grouping Together:');
  dogs.forEach(dog => {
    // Beginning of a group of logs for each dog. .groupCollapse would set them as collapsed data in the output.
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    // End a group log
    console.groupEnd(`${dog.name}`);
  });
  
  // Counting
  console.log('Counting # of occurrences:');
  // Corey: 1
  console.count('Corey');
  // Steve: 1
  console.count('Steve');
  // Corey: 2
  console.count('Corey');
  // Corey: 3
  console.count('Corey');
  // Steve: 2
  console.count('Steve');
  
  // Timing
  console.log('Find out how long something takes:');
  // Start timing how long until this is next returned.
  console.time('fetching data');
  // Fetch some data to demonstrate how to log how long it takes.
  fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
      // End the timer by returning the same value
      console.timeEnd('fetching data');
      console.log(data);
    });
  
  // Take an array of objects. Assuming they all have the same properties, display the data as a table in the console.
  console.log('console.table to display a table of data:');
  console.table(dogs);
  
  return (
    <React.Fragment>
      {/* <!-- Introduction --> */}
      <div className="js30-intro section white">
        <Row>
          <Column small={12}>
            {/* <!-- Back CTA --> */}
            <p className="back-cta"><small><strong><a href="{{root}}portfolio/development/javascript30.html"
                    title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small>
            </p>

            {/* <!-- Title --> */}
            <h1>Dev Tools Domination</h1>

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
                  <p>In this lesson I learned about the tools and methods that are available inside of the&nbsp;console.</p>
                  <p><strong>Regular console.log()</strong>&nbsp;- Outputs whatever you pass into it, String, variable,
                    array,&nbsp;etc.</p>
                  <p><strong>Interpolated console.log(`${value}`)</strong>&nbsp;- Injecting values into a string using es6
                    template&nbsp;strings.</p>
                  <p><strong>Styled console.log('%c&nbsp;Styled console.log', 'font-size:&nbsp;3em;')</strong>&nbsp;- A way to
                    style the console log with&nbsp;CSS.</p>
                  <p><strong>console.warn(), console.error(), console.info()</strong>&nbsp;- Various types of alerts you can
                    display in the&nbsp;console.</p>
                  <p><strong>console.assert(p.classList.contains('ouch'), 'Error Message')</strong>&nbsp;- log an error when a
                    test&nbsp;fails.</p>
                  <p><strong>console.clear()</strong>&nbsp;- Wipe the console&nbsp;clean.</p>
                  <p><strong>console.log(p)</strong>&nbsp;- Display the&nbsp;&lt;element&gt;</p>
                  <p><strong>console.dir(p)</strong>&nbsp;- display the available methods and properties for
                    an&nbsp;&lt;element&gt;.</p>
                  <p><strong>console.group(dog.name) / console.groupEnd(dog.name)</strong>&nbsp;- Creating a
                    collapsable group of logs in the&nbsp;console.</p>
                  <p><strong>console.count()</strong>&nbsp;- Each time the same item appears, it will log the item, and will
                    also increment the counter of occurrences from that logged&nbsp;item.</p>
                  <p><strong>console.time('fetching data') / console.timeEnd('fetching data')</strong>&nbsp;- Times how long
                    something takes to happen between the starting and ending&nbsp;methods.</p>
                  <p><strong>console.table()</strong>&nbsp;- Takes in an array of objects, assuming they all have the same
                    properties, displays the data in a table format inside of the&nbsp;console.</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="QXxYGL"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 9 - Dev Tools Domination">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/QXxYGL/">
                        JavaScript30 - 9 - Dev Tools Domination</a> by Corey Noble (<a
                        href="https://codepen.io/CoreyNoble">@CoreyNoble</a>)
                      on <a href="https://codepen.io">CodePen</a>.</span>
                  </p>
                  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
                </div>
              </li>
            </ul>
          </Column>
        </Row>
      </div>

      {/* <!-- JavaScript30 | 9 | Dev Tools Domination --> */}
      <div className="section blue">
        <Row>
          <Column id="javascript30-9" small={12}>
            <h2 className="h4">This project work is only visible within the JavaScript&nbsp;console.</h2>
            <Row>
              <Column small={12} medium={6} large={3}>
                <h3 className="h5">Chrome</h3>
                  <p>Windows: Ctrl + Shift +&nbsp;J.</p>
                  <p>Mac: Cmd + Opt +&nbsp;J.</p>
              </Column>
              <Column small={12} medium={6} large={3}>
                <h3 className="h5">Firefox</h3>
                  <p>Windows: Ctrl + Shift +&nbsp;K.</p>
                  <p>Mac: Cmd + Opt +&nbsp;K.</p>
              </Column>
              <Column small={12} medium={6} large={3}>
                <h3 className="h5">Safari</h3>
                <p>Cmd + Opt +&nbsp;C.</p>
              </Column>
              <Column small={12} medium={6} large={3}>
                <h3 className="h5">Edge&nbsp;/ Internet&nbsp;Explorer</h3>
                  <p>F12, then click on the “Console”&nbsp;tab.</p>
              </Column>
            </Row>
          </Column>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default devToolsDomination;