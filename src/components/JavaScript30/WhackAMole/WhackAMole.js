import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './WhackAMole.module.scss';

const whackAMole = props => {
  // // A Node List of each '.hole' <element>.
  // const holes = document.querySelectorAll('.hole');
  // // Score <span>.
  // const scoreBoard = document.querySelector('.score');
  // // A Node List of each '.mole' <element>. Child <div> of '.hole.'
  // const moles = document.querySelectorAll('.mole');
  // // Start <button>.
  // const startCTA = document.getElementById('start-cta');
  // // Initialize variables.
  // let lastHole;
  // let timeUp = false;
  // let score = 0;

  // // Creates a random time, using 'min' and 'max' values.
  // function randomTime(min, max) {
  //   // Return a random number between the 'min' and 'max' values. Round the number.
  //   return Math.round(Math.random() * (max - min) + min);
  // }

  // // Get me a random DOM element 'hole' using a Node List 'holes'.
  // function randomHole(holes) {
  //   // A random index of holes.
  //   const idx = Math.floor(Math.random() * holes.length);
  //   // Set the 'hole' using the index.
  //   const hole = holes[idx];

  //   // If 'hole' is the same as 'lastHole'.
  //   if (hole === lastHole) {
  //     // Re-run this function.
  //     return randomHole(holes);
  //   }

  //   // Save the 'hole' that popped up the last time this function was called.
  //   lastHole = hole;
  //   // Return the hole.
  //   return hole;
  // }

  // // Pop up a mole.
  // function peep() {
  //   // Get a random time, passing min/max time.
  //   const time = randomTime(200, 1000);
  //   // Get a random 'hole' using all of the 'holes'.
  //   const hole = randomHole(holes);
  //   // Animate in the mole. Add a class to pop it up.
  //   hole.classList.add('up');
  //   // The time the mole spends popped up.
  //   setTimeout(() => {
  //     // Hide the mole. Remove the class that pops it up.
  //     hole.classList.remove('up');
  //     // If the time is not up, pop up another mole, peep().
  //     if (!timeUp) peep();
  //   }, time); // Duration, random 'time'.
  // }

  // // Start the game.
  // function startGame() {
  //   // Reset the board and game variables.
  //   scoreBoard.textContent = 0;
  //   timeUp = false;
  //   score = 0;

  //   // Pop up a mole, peep().
  //   peep();
  //   // Set 'timeUp'. Will become true after the provided interval.
  //   setTimeout(() => (timeUp = true), 10000);
  // }

  // // Hit a mole.
  // function bonk(e) {
  //   // Is the event a trusted event? We want to check for cheat clicks using JavaScript.
  //   if (!e.isTrusted) return; // cheater! Exit the function.

  //   // Increase the score.
  //   score++;
  //   // Remove the 'up' class to hide the mole.
  //   this.parentNode.classList.remove('up');
  //   // Update the 'score' on the 'scoreBoard'.
  //   scoreBoard.textContent = score;
  // }

  // // Event Listeners.
  // // For each 'mole' inside of the 'moles' Node list, on 'click', bonk(e).
  // moles.forEach(mole => mole.addEventListener('click', bonk));
  // // When the Start <button> is clicked, startGame().
  // startCTA.addEventListener('click', startGame);

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Whack A Mole</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 30 | Whack A Mole */}
      <Section classProp={classes.WhackAMole}>
        <Row>
          <Column small={12}>
            <h2 className="h3">Whack-a-mole! <span className="score">0</span></h2>
            <button id="start-cta">Start!</button>

            <div className="game">
              <div className="hole hole1">
                <div className="mole"></div>
              </div>
              <div className="hole hole2">
                <div className="mole"></div>
              </div>
              <div className="hole hole3">
                <div className="mole"></div>
              </div>
              <div className="hole hole4">
                <div className="mole"></div>
              </div>
              <div className="hole hole5">
                <div className="mole"></div>
              </div>
              <div className="hole hole6">
                <div className="mole"></div>
              </div>
            </div>
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default whackAMole;