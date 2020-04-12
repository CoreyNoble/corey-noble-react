import React from 'react';
import './ArrayCardioDay1.module.scss';

const arrayCardioDay1 = props => {
  // ## Array Cardio Day 1

  // Some data we can work with
  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Beck, Glenn',
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William'
  ];

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const fifteen = inventors.filter(
    inventor => inventor.year >= 1500 && inventor.year < 1600
  );

  console.log('Years 1500-1599:');
  console.table(fifteen);

  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
  // Map: takes in an array, does something with that array and then returns a NEW array with the SAME LENGTH. Like a machine that takes in a material, modifies it and outputs the modified material.
  // `${variable}` is an example of a template string.
  const fullNames = inventors.map(
    inventor => `${inventor.first} ${inventor.last}`
  );

  console.log('Full Names:');
  console.log(fullNames);

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  // Sort: Get two items, asked to sort those two items, if a > b, a++, b--. Bubbling the items up and down inside of the array.
  // Turnery operator ? 1 : -1 (short-hand if(),else())
  const ordered = inventors.sort((firstPerson, secondPerson) =>
    firstPerson.year > secondPerson.year ? 1 : -1
  );

  console.log('Oldest to Youngest:');
  console.table(ordered);

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?
  // Reduce: Easier way to do a for loop
  // Gives you a running total of what you've returned from this function last time.
  const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0); // passing in ,0 will ensure 'total' is never undefined.

  console.log('Total Years: ' + totalYears);

  // 5. Sort the inventors by years lived
  const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year; // how old did they live to be?
    const nextGuy = b.passed - b.year; // how old did they live to be?
    return lastGuy > nextGuy ? -1 : 1; // sort the inventors
  });

  console.log('Oldest to Youngest Lived:');
  console.table(oldest);

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  // Query the document for all classes .mw-category
  // const category = document.querySelector('.mw-category');

  // Query 'category' for a list of links. Convert from Node List to an Array
  // const links = Array.from(category.querySelectorAll('a'));

  // Map 'links' to create an array of 'textContent' strings.
  // Filter the array to only include strings with 'de'.
  // const de = links
  //             .map(link => link.textContent)
  //             .filter(streetName => streetName.includes('de'));

  // 7. sort Exercise
  // Takes in 'people' and sorts them alphabetically by last name
  const alpha = people.sort((lastOne, nextOne) => {
    // Create first name and last name constants (a + b), by splitting the string.
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    // Sort by 'people' by their last name constants
    return aLast > bLast ? 1 : -1;
  });

  console.log('Sort by Last Name, Alphabetically');
  console.log(alpha);

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck'
  ];

  // Reduce data into an array of vehicle types 'obj[]' with a counter 'item'.
  const transportation = data.reduce(function(obj, item) {
    // Chekcs if the obj[item] exists, if not, initializes the obj[item] to 0.
    if (!obj[item]) {
      obj[item] = 0;
    }
    // Increment the value
    obj[item]++;

    return obj;
  }, {}); // ,{} start with a blank object

  console.log('Reduce data into an array of objects:');
  console.log(transportation);

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
            <h1>Array Cardio Day 1</h1>
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
                  <p>In this lesson I am presented with some arrays[] of data. I use array methods to manipulate
                    the&nbsp;data.</p>
                  <p>Using <strong>.filter()</strong>&nbsp;- Pair down the array of inventors to return a new array, which
                    only contains the inventors who were born in the&nbsp;1500's.</p>
                  <p><strong>.map()</strong>&nbsp;- Takes in an array, does something with that array and returns a new array
                    of the same length. Like a machine that takes in a material, modifies it and outputs the modified
                    material. In this project I .map() an array of full names from the list of&nbsp;inventors.</p>
                  <p><strong>.sort()</strong>&nbsp;- Takes in an array, compares two items, and pushes one item up and the
                    other item down. In this project I .sort() the inventors by birthdate, from oldest to&nbsp;youngest.</p>
                  <p><strong>.reduce()</strong>&nbsp;- Takes in an array and returns only what is specified. In this project I
                    .reduce() the inventors array to return how many years all of the inventors lived&nbsp;for.</p>
                  <p>Using <strong>.map() and .filter()</strong>&nbsp;- Take in a list of &lt;a&gt; elements. .map() all of
                    the 'link.textContent' and .filter() out any items that&nbsp;.includes('de').</p>
                  <p>Using <strong>.sort()</strong>&nbsp;- Take in an array of people and .sort() them alphabetically after
                    splitting the string .split(', ') into 'First' and 'Last' name&nbsp;variables.</p>
                  <p>Using <strong>.reduce()</strong>&nbsp;- Initialize a 'transportation[]' array that takes in an array of
                    'data[]'. Use .reduce() to return an array containing only the unique vehicle types with a count for each
                    type that is passed in. For each item that's returned from the data, if it does not exist, initialize that
                    item. Increment the count and return the&nbsp;object.</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="mZKvVj"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 4 - Array Cardio Day 1">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/mZKvVj/">
                        JavaScript30 - 4 - Array Cardio Day 1</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 4 | Array Cardio Day 1 --> */}
      <div className="section blue">
        <div className="row">
          <div id="javascript30-4" className="small-12 column">
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

export default arrayCardioDay1;