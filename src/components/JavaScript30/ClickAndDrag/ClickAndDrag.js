import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './ClickAndDrag.module.scss';

const clickAndDrag = props => {
  // // The parent <div>.
  // const slider = document.querySelector('.items');
  // // Initialize variables
  // // Flag variable, Are you clicking?
  // let isDown = false;
  // // Starting X position.
  // // When someone clicks down, we need to record that initial x position.
  // let startX;
  // // Amount dragged (scroll) value.
  // let scrollLeft;

  // // Slider Event Listeners.
  // // On mouse down.
  // slider.addEventListener('mousedown', e => {
  //   // Flag. User is clicking.
  //   isDown = true;
  //   // Add a class to the slider to show that it's active.
  //   slider.classList.add('active');
  //   // Get the starting (x) position of the cursor by getting the event (e) .pageX value. We then minus slider.offsetLeft to anchor the value to the sliders position (offset).
  //   startX = e.pageX - slider.offsetLeft;
  //   // The current scrolled position (x) on the slider.
  //   scrollLeft = slider.scrollLeft;
  // });

  // // On mouse leave.
  // slider.addEventListener('mouseleave', () => {
  //   // Flag. User is no longer on the element.
  //   isDown = false;
  //   // Remove the active class from the slider.
  //   slider.classList.remove('active');
  // });

  // // On mouse up.
  // slider.addEventListener('mouseup', () => {
  //   // Flag. User is no longer holding the click.
  //   isDown = false;
  // });

  // // On mouse move. Pass in the event (e).
  // slider.addEventListener('mousemove', e => {
  //   // Only fire the 'mousemove' event if the user is also 'mousedown'.
  //   if (!isDown) return;

  //   // Prevents all default behaviour on the event. Stopping the browser from trying to do something that you don't intend.
  //   e.preventDefault();

  //   // Where the cursor is (x) when they move it to the left and right.
  //   const x = e.pageX - slider.offsetLeft;
  //   // The Walk: How far have we deviated from that initial x value? (x - startX).
  //   // Multiplier: *# = for every pixel scrolled.
  //   const walk = (x - startX) * 3;

  //   // Scroll the <div>.
  //   slider.scrollLeft = scrollLeft - walk;
  // });

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/development/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Click and Drag</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 27 | Click and Drag */}
      <div id="javascript30-27">
        <div className="items">
          <div className="item item1">01</div>
          <div className="item item2">02</div>
          <div className="item item3">03</div>
          <div className="item item4">04</div>
          <div className="item item5">05</div>
          <div className="item item6">06</div>
          <div className="item item7">07</div>
          <div className="item item8">08</div>
          <div className="item item9">09</div>
          <div className="item item10">10</div>
          <div className="item item11">11</div>
          <div className="item item12">12</div>
          <div className="item item13">13</div>
          <div className="item item14">14</div>
          <div className="item item15">15</div>
          <div className="item item16">16</div>
          <div className="item item17">17</div>
          <div className="item item18">18</div>
          <div className="item item19">19</div>
          <div className="item item20">20</div>
          <div className="item item21">21</div>
          <div className="item item22">22</div>
          <div className="item item23">23</div>
          <div className="item item24">24</div>
          <div className="item item25">25</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default clickAndDrag;