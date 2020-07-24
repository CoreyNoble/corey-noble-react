import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './TypeAhead.module.scss';

const typeAhead = props => {
  // // JSON Data
  // const endpoint =
  // 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  // // Empty array to put our cities into.
  // const cities = [];

  // // fetch: browser API. Returns a promise. Something will eventually come back from this fetch.
  // fetch(endpoint)
  // // .then() is what you use when you're returning a promise.
  // // we are taking the blob data we receive through fetch, and convert it to JSON using the json() method. json() also returns a promise which we also call .then() on.
  // .then(blob => blob.json().then())
  // // .then() push the data into the array, We spread (...data) into the array to ensure it doesn't push an array into the array as an item, instead each item is put into the array individually (individual arguments).
  // .then(data => cities.push(...data));

  // // Takes in the word to match, and the cities array.
  // function findMatches(wordToMatch, cities) {
  // return cities.filter(place => {
  //   // here we need to figure out if the city or state matches what was searched
  //   // Regex variable 'wordToMatch' globally 'g' and insensitively (Lower/Upper) 'i'.
  //   const regex = new RegExp(wordToMatch, 'gi');
  //   // Return either the city, or state, when they match using the regex variable.
  //   return place.city.match(regex) || place.state.match(regex);
  // });
  // }

  // // Reusable function to convert numbers to strings with commas.
  // function numberWithCommas(x) {
  // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // }

  // function displayMatches() {
  // // Create an array of matches. The input 'this' is compared against the cities array in findMatches().
  // const matchArray = findMatches(this.value, cities);

  // // A new array of HTML Markup for each list item (City, State + Population).
  // const html = matchArray
  //   .map(place => {
  //     // Regex the search term, globally and insensitively (Upper/Lower)
  //     const regex = new RegExp(this.value, 'gi');
  //     // Find what it matched in the regex (City + State). Replace the characters with a surrounding <span> to highlight the search term.
  //     const cityName = place.city.replace(
  //       regex,
  //       `<span className="hl">${this.value}</span>`
  //     );
  //     const stateName = place.state.replace(
  //       regex,
  //       `<span className="hl">${this.value}</span>`
  //     );
  //     // Return the list item (City, State + Population).
  //     return `
  //           <li>
  //               <span className="name">${cityName}, ${stateName}</span>
  //               <span className="population">${numberWithCommas(
  //                 place.population
  //               )}</span>
  //           </li>
  //       `;
  //     // .join() returns a string from .map(), rather than an array with multiple items.
  //   })
  //   .join('');
  // // Add markup to the page (list)
  // suggestions.innerHTML = html;
  // }

  // const searchInput = document.querySelector('.search');
  // const suggestions = document.querySelector('.suggestions');

  // // Runs when you're off the input
  // searchInput.addEventListener('change', displayMatches);
  // // Runs with you key up on the input
  // searchInput.addEventListener('keyup', displayMatches);

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/development/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Type Ahead</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 6 | Type Ahead */}
      <Section id="javascript30-6">
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
      </Section>
    </React.Fragment>
  );
};

export default typeAhead;