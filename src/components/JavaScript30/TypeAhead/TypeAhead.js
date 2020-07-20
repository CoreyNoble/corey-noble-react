import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import './TypeAhead.module.scss';

const typeAhead = props => {
  // JSON Data
  const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  // Empty array to put our cities into.
  const cities = [];

  // fetch: browser API. Returns a promise. Something will eventually come back from this fetch.
  fetch(endpoint)
  // .then() is what you use when you're returning a promise.
  // we are taking the blob data we receive through fetch, and convert it to JSON using the json() method. json() also returns a promise which we also call .then() on.
  .then(blob => blob.json().then())
  // .then() push the data into the array, We spread (...data) into the array to ensure it doesn't push an array into the array as an item, instead each item is put into the array individually (individual arguments).
  .then(data => cities.push(...data));

  // Takes in the word to match, and the cities array.
  function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    // Regex variable 'wordToMatch' globally 'g' and insensitively (Lower/Upper) 'i'.
    const regex = new RegExp(wordToMatch, 'gi');
    // Return either the city, or state, when they match using the regex variable.
    return place.city.match(regex) || place.state.match(regex);
  });
  }

  // Reusable function to convert numbers to strings with commas.
  function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function displayMatches() {
  // Create an array of matches. The input 'this' is compared against the cities array in findMatches().
  const matchArray = findMatches(this.value, cities);

  // A new array of HTML Markup for each list item (City, State + Population).
  const html = matchArray
    .map(place => {
      // Regex the search term, globally and insensitively (Upper/Lower)
      const regex = new RegExp(this.value, 'gi');
      // Find what it matched in the regex (City + State). Replace the characters with a surrounding <span> to highlight the search term.
      const cityName = place.city.replace(
        regex,
        `<span className="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span className="hl">${this.value}</span>`
      );
      // Return the list item (City, State + Population).
      return `
            <li>
                <span className="name">${cityName}, ${stateName}</span>
                <span className="population">${numberWithCommas(
                  place.population
                )}</span>
            </li>
        `;
      // .join() returns a string from .map(), rather than an array with multiple items.
    })
    .join('');
  // Add markup to the page (list)
  suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  // Runs when you're off the input
  searchInput.addEventListener('change', displayMatches);
  // Runs with you key up on the input
  searchInput.addEventListener('keyup', displayMatches);

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
            <h1>Type Ahead</h1>

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
                  <p>In this lesson I am taking in JSON data and am using .filter() on the search &lt;input&gt; to display and
                    pair down the&nbsp;list.</p>
                  <p>First I create a variable 'endpoint' that holds the URL for the JSON data. I also initialize an empty
                    'cities[]'&nbsp;array.</p>
                  <p>I <strong>fetch()</strong> the JSON data (fetch(endpoint)). fetch() is a promise, which I return .then()
                    on. .then() takes the blob data I receive through the fetch, and converts it to JSON using the .json()
                    method. .json() itself is also a promise which I return another .then() on. The second .then() spreads the
                    data into 'cities[]'' (cities.push(...data)).</p>
                  <p>I <strong>listen</strong> for a 'change' or 'keyup' event on the search input, and
                    run&nbsp;displayMatches().</p>
                  <p>In <strong>displayMatches()</strong>&nbsp;- Take the value of the search input, and find matches in
                    'cities[]' (findMatches(this.value, cities)). Then .map() over the array, using a regular expression on
                    the 'city' and 'state' to find matches from the search. Then .replace() the search text, nesting it in a
                    &lt;span&gt; to create the highlight effect on the search&nbsp;term.</p>
                  <p>Finally, return a &lt;li&gt; for each match into the array. Inject each &lt;li&gt; with values from the
                    JSON using es6 template strings. Finally .join('') the array into one string and pass the string into the
                    .innerHTML of the 'suggestions'&nbsp;element.</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="LKrqZz"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 6 - Type Ahead">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/LKrqZz/">
                        JavaScript30 - 6 - Type Ahead</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 6 | Type Ahead --> */}
      <div id="javascript30-6" className="section">
        <Row>
          <Column small={12}>
            <form className="search-form">
              <input type="text" className="search" placeholder="City or State" />
              <ul className="suggestions">
                <li>Filter for a&nbsp;city</li>
                <li>or a state</li>
              </ul>
            </form>
          </Column>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default typeAhead;