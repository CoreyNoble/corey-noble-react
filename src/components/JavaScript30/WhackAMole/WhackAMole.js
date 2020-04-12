import React from 'react';
import classes from './WhackAMole.module.scss';

const whackAMole = props => {
  // A Node List of each '.hole' <element>.
  const holes = document.querySelectorAll('.hole');
  // Score <span>.
  const scoreBoard = document.querySelector('.score');
  // A Node List of each '.mole' <element>. Child <div> of '.hole.'
  const moles = document.querySelectorAll('.mole');
  // Start <button>.
  const startCTA = document.getElementById('start-cta');
  // Initialize variables.
  let lastHole;
  let timeUp = false;
  let score = 0;

  // Creates a random time, using 'min' and 'max' values.
  function randomTime(min, max) {
    // Return a random number between the 'min' and 'max' values. Round the number.
    return Math.round(Math.random() * (max - min) + min);
  }

  // Get me a random DOM element 'hole' using a Node List 'holes'.
  function randomHole(holes) {
    // A random index of holes.
    const idx = Math.floor(Math.random() * holes.length);
    // Set the 'hole' using the index.
    const hole = holes[idx];

    // If 'hole' is the same as 'lastHole'.
    if (hole === lastHole) {
      // Re-run this function.
      return randomHole(holes);
    }

    // Save the 'hole' that popped up the last time this function was called.
    lastHole = hole;
    // Return the hole.
    return hole;
  }

  // Pop up a mole.
  function peep() {
    // Get a random time, passing min/max time.
    const time = randomTime(200, 1000);
    // Get a random 'hole' using all of the 'holes'.
    const hole = randomHole(holes);
    // Animate in the mole. Add a class to pop it up.
    hole.classList.add('up');
    // The time the mole spends popped up.
    setTimeout(() => {
      // Hide the mole. Remove the class that pops it up.
      hole.classList.remove('up');
      // If the time is not up, pop up another mole, peep().
      if (!timeUp) peep();
    }, time); // Duration, random 'time'.
  }

  // Start the game.
  function startGame() {
    // Reset the board and game variables.
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;

    // Pop up a mole, peep().
    peep();
    // Set 'timeUp'. Will become true after the provided interval.
    setTimeout(() => (timeUp = true), 10000);
  }

  // Hit a mole.
  function bonk(e) {
    // Is the event a trusted event? We want to check for cheat clicks using JavaScript.
    if (!e.isTrusted) return; // cheater! Exit the function.

    // Increase the score.
    score++;
    // Remove the 'up' class to hide the mole.
    this.parentNode.classList.remove('up');
    // Update the 'score' on the 'scoreBoard'.
    scoreBoard.textContent = score;
  }

  // Event Listeners.
  // For each 'mole' inside of the 'moles' Node list, on 'click', bonk(e).
  moles.forEach(mole => mole.addEventListener('click', bonk));
  // When the Start <button> is clicked, startGame().
  startCTA.addEventListener('click', startGame);

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
            <h1>Whack A Mole</h1>

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
                  <p>In this lesson I create Whack&nbsp;A&nbsp;Mole.</p>
                  <p>First I get the following elements: 'holes', 'scoreBoard', 'moles' and 'startCTA'. I also initialize
                    'lastHole', 'timeUp&nbsp;=&nbsp;false' and 'score&nbsp;=&nbsp;0'.</p>
                  <p>I <strong>listen</strong> for the following&nbsp;events:</p>
                  <ul>
                    <li>
                      <strong>moles.forEach(mole&nbsp;=>&nbsp;())</strong>
                      <ul>
                        <li>'click', bonk(e)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>'startCTA'</strong>
                      <ul>
                        <li>'click', startGame()</li>
                      </ul>
                    </li>
                  </ul>
                  <p>In <strong>startGame()</strong>&nbsp;- First initialize the game values: 'scoreBoard.textContent
                    =&nbsp;0', 'timeUp&nbsp;=&nbsp;false', 'score&nbsp;=&nbsp;0'. Then run peep(). Also set the duration of
                    the game (setTimeout(()&nbsp;=> timeUp&nbsp;=&nbsp;true, 10000)).</p>
                  <p>In <strong>peep()</strong>&nbsp;- First set a random 'time' that each mole will pop up for. Then choose a
                    random 'hole' inside of 'holes'. Add a class of '.up' to that hole which pops up the mole. Check if 'time'
                    is up, if not, run peep() again. After 'time' is up (setTimeout(() {},&nbsp;time) remove the class
                    of&nbsp;'.up'.</p>
                  <p><strong>randomTime(min, max)</strong>&nbsp;- A function that takes in a 'min' and 'max' parameter, and
                    returns a random value between the 'min' and 'max'&nbsp;bounds.</p>
                  <p>In <strong>randomHole(holes)</strong>&nbsp;- Gets a random DOM element using a node list&nbsp;'holes'.
                  </p>
                  <p>In <strong>bonk(e)</strong>&nbsp;- First I check if the event is trusted, if not exit the function
                    (!e.isTrusted). This makes sure the clicks are genuine and are not generated by an external source. If the
                    click is genuine, increase the 'score', remove the class of '.up' from the element, and update the 'score'
                    in the&nbsp;'scoreboard'.</p>

                  {/* <!-- CodePen --> */}
                  <p class="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="qzKgYo"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 30 - Whack A Mole">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/qzKgYo/">
                        JavaScript30 - 30 - Whack A Mole</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 30 | Whack A Mole --> */}
      <div id="javascript30-30" class="section">
        <div class="row">
          <div class="small-12 column">
            <h2 class="h3">Whack-a-mole! <span class="score">0</span></h2>
            <button id="start-cta">Start!</button>

            <div class="game">
              <div class="hole hole1">
                <div class="mole"></div>
              </div>
              <div class="hole hole2">
                <div class="mole"></div>
              </div>
              <div class="hole hole3">
                <div class="mole"></div>
              </div>
              <div class="hole hole4">
                <div class="mole"></div>
              </div>
              <div class="hole hole5">
                <div class="mole"></div>
              </div>
              <div class="hole hole6">
                <div class="mole"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default whackAMole;