import React from 'react';
import classes from './ClickAndDrag.module.scss';

const clickAndDrag = props => {
  // The parent <div>.
  const slider = document.querySelector('.items');
  // Initialize variables
  // Flag variable, Are you clicking?
  let isDown = false;
  // Starting X position.
  // When someone clicks down, we need to record that initial x position.
  let startX;
  // Amount dragged (scroll) value.
  let scrollLeft;

  // Slider Event Listeners.
  // On mouse down.
  slider.addEventListener('mousedown', e => {
    // Flag. User is clicking.
    isDown = true;
    // Add a class to the slider to show that it's active.
    slider.classList.add('active');
    // Get the starting (x) position of the cursor by getting the event (e) .pageX value. We then minus slider.offsetLeft to anchor the value to the sliders position (offset).
    startX = e.pageX - slider.offsetLeft;
    // The current scrolled position (x) on the slider.
    scrollLeft = slider.scrollLeft;
  });

  // On mouse leave.
  slider.addEventListener('mouseleave', () => {
    // Flag. User is no longer on the element.
    isDown = false;
    // Remove the active class from the slider.
    slider.classList.remove('active');
  });

  // On mouse up.
  slider.addEventListener('mouseup', () => {
    // Flag. User is no longer holding the click.
    isDown = false;
  });

  // On mouse move. Pass in the event (e).
  slider.addEventListener('mousemove', e => {
    // Only fire the 'mousemove' event if the user is also 'mousedown'.
    if (!isDown) return;

    // Prevents all default behaviour on the event. Stopping the browser from trying to do something that you don't intend.
    e.preventDefault();

    // Where the cursor is (x) when they move it to the left and right.
    const x = e.pageX - slider.offsetLeft;
    // The Walk: How far have we deviated from that initial x value? (x - startX).
    // Multiplier: *# = for every pixel scrolled.
    const walk = (x - startX) * 3;

    // Scroll the <div>.
    slider.scrollLeft = scrollLeft - walk;
  });

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
            <h1>Click and Drag</h1>

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
                  <p>In this lesson I create click and drag&nbsp;functionality.</p>
                  <p>First I get 'slider' and initialize some variables: isDown&nbsp;=&nbsp;false, startX,&nbsp;scrollLeft.
                  </p>
                  <p>I <strong>listen</strong> for the following events which I immediately invoke functions&nbsp;to:</p>
                  <ul>
                    <li>
                      <strong>slider</strong>
                      <ul>
                        <li>
                          <p><strong>'mousedown', (e)&nbsp;=>&nbsp;{}</strong></p>
                          <p>First set 'isDown = true'. Then add an '.active' class to&nbsp;'slider'.</p>
                          <p>Next set 'startX' to match the events 'e.pageX' coordinates. Subtracting the 'slider.offsetLeft'
                            to anchor the value to the sliders&nbsp;position.</p>
                          <p>Set 'scrollLeft&nbsp;= slider.scrollLeft'</p>
                        </li>
                        <li>
                          <p><strong>'mouseleave', ()&nbsp;=>&nbsp;{}</strong></p>
                          <p>Set 'isDown = false'. Remove the class of '.active' from&nbsp;'slider'.</p>
                        </li>
                        <li>
                          <p><strong>'mouseup', ()&nbsp;=>&nbsp;{}</strong></p>
                          <p>Set 'isDown&nbsp;=&nbsp;false'.</p>
                        </li>
                        <li>
                          <p><strong>'mousemove', (e)&nbsp;=>&nbsp;{}</strong></p>
                          <p>Check if 'isDown' is false, if so, exit the function. Prevent the event from creating any default
                            behaviour (e.preventDefault();).</p>
                          <p>Get where the cursor is. Set 'x' to 'e.pageX&nbsp;- slider.offsetLeft;'.</p>
                          <p>Calculate the 'walk' ((x&nbsp;-&nbsp;startX) *&nbsp;3). The multiplier determines how many pixels
                            to scroll for each pixel the user scrolls. Then set the 'slider.scrollLeft'
                            (scrollLeft&nbsp;-&nbsp;walk).</p>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  {/* <!-- CodePen --> */}
                  <p class="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="JQZxLM"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 27 - Click And Drag">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/JQZxLM/">
                        JavaScript30 - 27 - Click And Drag</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 27 | Click and Drag --> */}
      <div id="javascript30-27">
        <div class="items">
          <div class="item item1">01</div>
          <div class="item item2">02</div>
          <div class="item item3">03</div>
          <div class="item item4">04</div>
          <div class="item item5">05</div>
          <div class="item item6">06</div>
          <div class="item item7">07</div>
          <div class="item item8">08</div>
          <div class="item item9">09</div>
          <div class="item item10">10</div>
          <div class="item item11">11</div>
          <div class="item item12">12</div>
          <div class="item item13">13</div>
          <div class="item item14">14</div>
          <div class="item item15">15</div>
          <div class="item item16">16</div>
          <div class="item item17">17</div>
          <div class="item item18">18</div>
          <div class="item item19">19</div>
          <div class="item item20">20</div>
          <div class="item item21">21</div>
          <div class="item item22">22</div>
          <div class="item item23">23</div>
          <div class="item item24">24</div>
          <div class="item item25">25</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default clickAndDrag;