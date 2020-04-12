import React from 'react';
import classes from './SortWithoutArticles.module.scss';

const sortWithoutArticles = props => {
  // Data we're sorting
  const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
  ];

  // Takes in a string, strips characters, and returns the string.
  function strip(bandName) {
    // Regular Expression (Regex) that replaces the 'a ', 'the ', 'an ' with an empty character ''. This is insensitive (case) '/i'. .trim() removes spaces at the end.
    return bandName.replace(/^(a |the |an)/i, '').trim();
  }

  // Sort the bands array (a, b). When the data is stripped (strip(a), strip(b)), is a > b? yes +1, no -1.
  const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

  // Set the <ul> innerHTML to a list <li> of band names using the sortedBands array.
  document.querySelector('#bands').innerHTML = sortedBands
    // Map over the array to create each <li> entry.
    .map(band => `<li>${band}</li>`)
    .join(''); // Convert to one string

  return (
    <React.Fragment>
      {/* <!-- Introduction --> */}
      <div class="js30-intro section white">
        <div class="row">
          <div class="small-12 column">
            {/* <!-- Back CTA --> */}
            <p class="back-cta"><small><strong><a href="{{root}}portfolio/development/javascript30.html"
                    title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small>
            </p>

            {/* <!-- Title --> */}
            <h1>Sort Without Articles</h1>

            {/* <!-- Accordion --> */}
            <ul class="accordion" data-accordion data-allow-all-closed="true">
              <li class="accordion-item" data-accordion-item="">
                {/* <!-- Title --> */}
                <a href="#" class="accordion-title" aria-controls="project-synopsis" role="tab"  aria-expanded="false"
                  aria-selected="false">
                  <h2 class="h5">Project Synopsis and&nbsp;Code</h2>
                </a>
                {/* <!-- Content --> */}
                <div class="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby="Project Synopsis and Code"
                  aria-hidden="true" id="project-synopsis" style="display: none;">
                  <p>In this lesson I learned how sort an array while stripping out specific phrases to ignore those phrases
                    in the&nbsp;sort.</p>
                  <p>First I grab the array of 'bands'. I then sort the bands alphabetically using a ternary operator
                    (bands.sort((a, b)&nbsp;=> a&nbsp;>&nbsp;b&nbsp;?&nbsp;1&nbsp;:&nbsp;-1)). In-order to strip out the
                    phrases I run a function strip() on both 'a' and 'b'. ((a,b)&nbsp;=>&nbsp;sort(a)&nbsp;>&nbsp;sort(b)
                    ?&nbsp;1&nbsp;:&nbsp;-1).</p>
                  <p>In <strong>strip(bandName)</strong>&nbsp;- Return a .replace().trim() string that removes all of the set
                    phrases using a regex and trims off extra spaces (.replace(/^(a |the |an)/i, '').trim()).</p>
                  <p>Finally set the .innerHTML of the &lt;ul&gt; to 'sortedBands' and output an &lt;li&gt; element for each
                    item in the array with .map(). join() to convert it all into one&nbsp;string.</p>

                  {/* <!-- CodePen --> */}
                  <p class="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="MMXLoy"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 17 - Sort Without Articles">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/MMXLoy/">
                        JavaScript30 - 17 - Sort Without Articles</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 17 | Sort Without Articles --> */}
      <div id="javascript30-17" class="section">
        <ul id="bands"></ul>
      </div>
    </React.Fragment>
  );
};

export default sortWithoutArticles;