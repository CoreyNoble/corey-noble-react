import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './LocalStorage.module.scss';

const localStorage = props => {
  // const addItems = document.querySelector('.add-items'); // <form>
  // const itemsList = document.querySelector('.plates'); // <ul>
  // // 'items' will try to grab an Array of JSON data parsed from an object in localStorage with a key of 'items'. If it does not find the data, fall back to an empty array.
  // const items = JSON.parse(localStorage.getItem('items')) || [];

  // // Adds an item to the list.
  // function addItem(e) {
  //   // passes in the event that fired on 'submit'.
  //   // stops the page from reloading, because we are doing everything client-site. By default, form submit will either re-load the page or submit to an external source.
  //   e.preventDefault();

  //   // Text inside of the input
  //   const text = this.querySelector('[name=item]').value;
  //   // Create the item object
  //   const item = {
  //     text, // es6 short hand of 'text: text,'
  //     done: false // not checked
  //   };

  //   // Push the item object into the items array.
  //   items.push(item);

  //   // Populate the list.
  //   populateList(items, itemsList);

  //   // Set the localStorage 'items' key as JSON data using 'items' variable.
  //   // JSON.stringify: when you pass in your items, it's going to convert your objects and arrays into a JSON string equivalent.
  //   localStorage.setItem('items', JSON.stringify(items));

  //   // localStorage API can also use these methods:
  //   // localStorage.getItem, localStorage.setItem, localStorage.removeItem (? deleteItem)

  //   // Clear the input
  //   this.reset();
  // }

  // // Populates the HTML list.
  // // plates[] starts of as an empty object to ensure it can use .map() even if you forget to pass in something.
  // // platesList, place to put the HTML.
  // // These names are unique so any object or list can be passed into this function, which makes it re-usable.
  // function populateList(plates = [], platesList) {
  //   // .map() will take in an array of raw data (plates), and return an array of some other data (platesList).
  //   // plate: object
  //   // i: index of the array item
  //   platesList.innerHTML = plates
  //     .map((plate, i) => {
  //       // Adds an <li> for each item in the array as it loops through
  //       // plate.done: if plate.done (checked), if not ('')
  //       return `
  //         <li>
  //             <input type="checkbox" data-index=${i} id="item${i}" ${
  //         plate.done ? 'checked' : ''
  //       } />
  //             <label for="item${i}">${plate.text}</label>
  //         </li>
  //         `;
  //     })
  //     .join(''); // .join('') takes the array that .map() makes, and turns it into one string.
  // }

  // function toggleDone(e) {
  //   // passes in the event that fired when <ul> clicked.
  //   // exit if it's not an input
  //   if (!e.target.matches('input')) return;
  //   // Get the element
  //   const el = e.target;
  //   // Get the index of the element
  //   const index = el.dataset.index;
  //   // Toggle the done state (Opposite of what it was)
  //   items[index].done = !items[index].done;
  //   // Save a JSON string from the 'items' array in into localStorage under the key 'items'.
  //   localStorage.setItem('items', JSON.stringify(items));
  //   // Populate the list
  //   populateList(items, itemsList);
  // }

  // // Form Submit, addItem(e).
  // addItems.addEventListener('submit', addItem);
  // // Item Click on <ul>, toggleDone(e).
  // itemsList.addEventListener('click', toggleDone);

  // // Initial population of list when loaded.
  // populateList(items, itemsList);

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/development/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>LocalStorage</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 15 | LocalStorage */}
      <Section id="javascript30-15" background="dark-blue">
        <Row>
          <Column small={12}>
            {/* Fish SVG Cred: https://thenounproject.com/search/?q=fish&i=589236 */}

            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
              viewBox="0 0 512 512" enable-background="new 0 0 512 512" xmlSpace="preserve">
              <g>
                <path
                  d="M495.9,425.3H16.1c-5.2,0-10.1,2.9-12.5,7.6c-2.4,4.7-2.1,10.3,0.9,14.6l39,56.4c2.6,3.8,7,6.1,11.6,6.1h401.7   c4.6,0,9-2.3,11.6-6.1l39-56.4c3-4.3,3.3-9.9,0.9-14.6C506,428.2,501.1,425.3,495.9,425.3z M449.4,481.8H62.6L43,453.6H469   L449.4,481.8z" />
                <path
                  d="M158.3,122c7.8,0,14.1-6.3,14.1-14.1V43.4c0-7.8-6.3-14.1-14.1-14.1c-7.8,0-14.1,6.3-14.1,14.1v64.5   C144.2,115.7,150.5,122,158.3,122z" />
                <path
                  d="M245.1,94.7c7.8,0,14.1-6.3,14.1-14.1V16.1c0-7.8-6.3-14.1-14.1-14.1C237.3,2,231,8.3,231,16.1v64.5   C231,88.4,237.3,94.7,245.1,94.7z" />
                <path
                  d="M331.9,122c7.8,0,14.1-6.3,14.1-14.1V43.4c0-7.8-6.3-14.1-14.1-14.1s-14.1,6.3-14.1,14.1v64.5   C317.8,115.7,324.1,122,331.9,122z" />
                <path
                  d="M9.6,385.2c5.3,2.8,11.8,1.9,16.2-2.2l50.6-47.7c56.7,46.5,126.6,71.9,198.3,71.9c0,0,0,0,0,0   c87.5,0,169.7-36.6,231.4-103.2c5-5.4,5-13.8,0-19.2c-61.8-66.5-144-103.2-231.4-103.2c-72,0-142.2,25.6-199,72.5l-50-47.1   c-4.4-4.1-10.9-5-16.2-2.2c-5.3,2.8-8.3,8.7-7.4,14.6l11.6,75L2.2,370.6C1.3,376.5,4.2,382.4,9.6,385.2z M380.9,230.8   c34.9,14.3,67.2,35.7,95.3,63.6c-10.1,10-20.8,19.2-31.9,27.5c-22.4-3.3-29.6-8.8-30.7-9.7c-4-5.7-11.8-7.7-18.1-4.4   c-6.9,3.6-9.5,12.2-5.9,19.1c1.9,3.5,7.3,10.3,22.4,16c-10.1,5.7-20.5,10.7-31.1,15.1C352.4,320.2,352.4,268.6,380.9,230.8z    M36.3,255.6l29.4,27.7c5.3,5,13.6,5.1,19.1,0.3c53.2-47.6,120.7-73.7,190-73.7c26.9,0,53.2,3.9,78.5,11.3   c-29.3,44.6-29.3,102,0,146.6c-25.3,7.4-51.6,11.3-78.5,11.3c-69,0-136.3-26-189.4-73.2c-2.7-2.4-13.4-6.3-19.1,0.3l-30.1,28.3   l5.7-40C42.2,293,36.3,255.6,36.3,255.6z" />
                <circle cx="398.8" cy="273.8" r="14.1" />
              </g>
            </svg>
          </Column>
          <Column small={12}>
            <div className="wrapper">
              <h2>LOCAL TAPAS</h2>
              <p></p>
              <ul className="plates">
                <li>Loading Tapas...</li>
              </ul>
              <form className="add-items">
                <input type="text" name="item" placeholder="Item Name" required />
                <input type="submit" value="+ Add Item" />
              </form>
            </div>
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default localStorage;