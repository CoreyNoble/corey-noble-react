import React from 'react';
import './StripeFollowAlongNav.module.scss';

const stripeFollowAlongNav = props => {
  // All of the <li> that are direct descendants > of '.cool'.
  const triggers = document.querySelectorAll('.cool > li');
  // Puppy div. Absolutely positioned background <div>.
  // Using .querySelecor, not .querySelecorAll because we just want that one element.
  const background = document.querySelector('.dropdownBackground');
  // Navigation <ul>.
  const nav = document.querySelector('.top');

  // When the mouse enters the <li>.
  function handleEnter() {
    // Staged approach to the animation. First we display: block; then opacity: 1; This will step in the animation.

    // 'this': <li>
    // Add a class of '.trigger-enter'.
    // The class changes display:none; to display:block;.
    this.classList.add('trigger-enter');

    // We create an arrow function to keep <li> as (this).
    // 'this' in an arrow function () =>: <li>.
    // 'this' in a normal function(): window.

    // Because this class is added on a delay, we use an arrow function to check that the class is there first.
    // () => this.classlist.contains
    // If 'this' is true (()=> this, ), Run the the next line (&&).
    // Add a class of '.trigger-enter-active'.
    setTimeout(
      () =>
        this.classList.contains('trigger-enter') &&
        this.classList.add('trigger-enter-active'),
      150
    ); // Time delay.

    // Show the dropdown background.
    background.classList.add('open');

    // The <element> (this) with a class of '.dropdown'.
    const dropdown = this.querySelector('.dropdown');
    // The bounding rectangle of the 'dropdown' <element>.
    // Inside of .getBoundingClientRect() is the data we need to determine the position of the element on the page (top,left), as well as the size of the element (width, height).
    const dropdownCoords = dropdown.getBoundingClientRect();
    // The bounding rectangle of the 'nav' <element>.
    // We get the coordinates of the 'nav' to ensure the puppy div 'background' follows the 'nav' position.
    const navCoords = nav.getBoundingClientRect();

    // The coordinates we will move and size the puppy div, 'background'.
    const coords = {
      // Width and height are the same as the 'dropdownCoords' width and height.
      width: dropdownCoords.width,
      height: dropdownCoords.height,
      // Top and left = 'dropdown' top and left, (-) 'nav' top and left.
      // Here we are taking our dropdownCoords and we are offsetting them with the top of the nav. So if the nav moves, so do the coordinates that we will be setting on 'background'.
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };

    // Set the 'width', 'height' and 'transform' (position) of the puppy div 'background'.
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty(
      'transform',
      `translate(${coords.left}px, ${coords.top}px)`
    );
  }

  // When the mouse leaves the <li>.
  function handleLeave() {
    // Remove (this) <li> from view. Set back to 'display: none;', 'opacity: 0;'.
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    // Hide the dropdown background.
    background.classList.remove('open');
  }

  // On each <li>, listen for the Mouse to enter, handleEnter().
  triggers.forEach(trigger =>
    trigger.addEventListener('mouseenter', handleEnter)
  );
  // On each <li>, listen for the Mouse to leave, handleLeave().
  triggers.forEach(trigger =>
    trigger.addEventListener('mouseleave', handleLeave)
  );

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
            <h1>Stripe Follow Along Nav</h1>

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
                  <p>In continuation of <a href="{{root}}portfolio/development/javascript30/4-array-cardio-day-1.html">Follow
                      Along Link Highlighter</a>, I create a flexible dropdown navigation in-which the size of any dropdown
                    item can be dynamic. As the user hovers on each dropdown item, a puppy &lt;div&gt; follows along in both
                    size and position to transition into the background for that newly shown dropdown&nbsp;item.</p>
                  <p>First I get the 'nav' and the 'triggers' (&lt;li&gt;) as well as the puppy &lt;div&gt;&nbsp;'background'.
                  </p>
                  <p>I <strong>listen</strong>&nbsp;for:</p>
                  <ul>
                    <li>
                      <strong>triggers.forEach(trigger => trigger.addEventListener)</strong>
                      <ul>
                        <li>'mouseenter', handleEnter()</li>
                        <li>'mouseleave', handleLeave()</li>
                      </ul>
                    </li>
                  </ul>
                  <p>In <strong>handleEnter()</strong>&nbsp;- First add a class of '.trigger-enter' to the trigger. This class
                    changes 'display:none' to 'display:block'. The class is added on a delay, so use an arrow function to
                    check if the class is there. If so, add a second class of '.trigger-enter-active'. This is known as
                    stepping in an animation. First display it, then transition it. (setTimeout(()&nbsp;=>
                    this.classList.contains('trigger-enter' && this.classList.add('trigger-enter-active', 150);). Then add a
                    class of '.open' to&nbsp;'background'.</p>
                  <p>Next get the 'dropdown' and its' bounding rectangle, also get the bounding rectangle of the 'nav'. Using
                    the 'dropdown' bounding rectangle, calculate the 'width' and 'height values that 'background'
                    will&nbsp;need.</p>
                  <p>Using 'nav' and 'dropdown' bounding rectangles, calculate the height, width, and position that
                    'background' will need. Use 'nav' as an anchor for&nbsp;positioning.</p>
                  <p>const coords&nbsp;=&nbsp;<br />
                    &nbsp;&nbsp;width: dropdownCoords.width,<br />
                    &nbsp;&nbsp;height: dropdownCoords.height,<br />
                    &nbsp;&nbsp;top: dropdownCoords.top&nbsp;- navCoords.top,<br />
                    &nbsp;&nbsp;left: dropdownCoords.left&nbsp;- navCoords.left<br />
                    </p>
                  <p>Finally set the 'background' styles by injecting the 'coords' into the style attributes of 'background'
                    using es6 template strings. (background.style.setProperty('width', 'coords.width px')).</p>
                  <p>In <strong>handleLeave()</strong>&nbsp;- Hide the elements. Remove the classes '.trigger-enter' and
                    '.trigger-enter-active' from the trigger. Remove the class of '.open' from&nbsp;'background'.</p>

                  {/* <!--
                   CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="ydEZKJ"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 26 - Stripe Follow Along Nav">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/ydEZKJ/">
                        JavaScript30 - 26 - Stripe Follow Along Nav</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 26 | Stripe Follow Along Nav --> */}
      <div id="javascript30-26" className="section">
        <div className="row">
          <div className="small-12 column">
            <div className="top">
              <div className="dropdownBackground">
                <span className="arrow"></span>
              </div>

              <ul className="cool">
                <li>
                  <a href="#">My Portfolio</a>
                  <div className="dropdown">
                    <a href="https://www.motusbank.ca/" title="motusbank, A website I helped architect and build."
                      target="_blank" rel="noopener noreferrer">Motusbank</a>
                    <a href="https://www.pcfinancial.ca/en/campaign/new-digital-experience"
                      title="A page I built for PC Financial." target="_blank"
                      rel="noopener noreferrer"><em>PC&nbsp;Financial</em></a>
                    <a href="{{root}}portfolio/development/javascript30.html"
                      title="30 es6 JavaScript projects">JavaScript30</a>
                    <a href="{{root}}portfolio/development/javascript-tetris.html"
                      title="Tetris, Developed with JavaScript.">JavaScript Tetris</a>
                    <a href="https://react-weather-app.corey-noble.com" target="_blank" rel="noopener noreferrer"
                      title="A Weather Application, Developed with React and the Weather API.">React Weather App</a>
                    <a href="{{root}}portfolio/development/javascript-to-do-list.html"
                      title="A To-Do list application, Developed with JavaScript.">JavaScript To-Do List</a>
                    <a href="{{root}}portfolio/cms/skillset.html"
                      title="A list and description of the content management systems I have development experience with.">Content
                      Management</a>
                    <a href="{{root}}portfolio/development/responsive-email-template-compiled.html"
                      title="A responsive email template I developed.">Responsive Email</a>
                  </div>
                </li>
                <li>
                  <a href="#">Contact Info</a>
                  <div className="dropdown">
                    <a href="https://github.com/CoreyNoble" target="_blank" rel="noopener noreferrer"
                      title="View my GitHub projects">GitHub</a>
                    <a href="https://ca.linkedin.com/in/corey-noble" title="View my LinkedIn profile" target="_blank"
                      rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default stripeFollowAlongNav;