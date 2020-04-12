import React from 'react';
import classes from './MouseMoveShadow.module.scss';

const mouseMoveShadow = props => {
  const hero = document.querySelector('.hero'); // parent <div>
  const text = hero.querySelector('h2');
  // How many pixels at its' most should it be stretched?
  const walk = 50; // px

  function shadow(e) {
    // Get the height and width of the hero element:
    // const {} = hero <- es6 destructuring
    // Same as:
    // const width = hero.offsetWidth
    // const height = hero.offsetHeight
    const { offsetWidth: width, offsetHeight: height } = hero;
    // Get the position of the cursor based on the event offsetX, offsetY.
    let { offsetX: x, offsetY: y } = e;
    // This gets us the x,y of cursor for the element that is being hovered.

    // If we are no longer hovering on hero, say we're hovering over the <h1>, the offset would change to use the <h1> origin offset values, rather than the hero's values. This checks for that scenario.
    if (this !== e.target) {
      // Normalize: Calculate X,Y for hero by adding the previous x,y values and <h1> offset values together.
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    // This math makes sure we set a range (walk: 100, range: 50 to -50).
    // Math.round() whole numbers.
    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);

    console.log('xWalk: ', xWalk);
    console.log('yWalk: ', yWalk);

    // Dynamically setting the text-shadow position, based on xWalk (x), yWalk (y).
    // Each line here is a new shadow.
    text.style.textShadow = `
          ${xWalk}px ${yWalk}px 0 rgba(0,0,0,0.6)
      `;
  }

  // When mouse is moved on hero, shadow(e)
  hero.addEventListener('mousemove', shadow);

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
            <h1>Mouse Move Shadow</h1>

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
                  <p>In this lesson I manipulate the text-shadow 'style' of an element depending on where the mouse
                    is&nbsp;positioned.</p>
                  <p>First I grab the 'hero' &lt;div&gt; and 'text' element. I initialize the 'walk', which sets the bounds on
                    the shadow size. I <strong>listen</strong> for 'mousemove' on 'hero' and run&nbsp;shadow(e).</p>
                  <p>In <strong>shadow(e)</strong>&nbsp;- Set the width and height to match the hero 'offsetWidth' and
                    'offsetHeight' using es6 destructuring. (const&nbsp;{ offsetWidth:&nbsp;width, offsetHeight:&nbsp;height
                    }&nbsp;=&nbsp;hero). Also get the position of the cursor based on the event offset (let&nbsp;{
                    offsetX:&nbsp;x, offsetY:&nbsp;y }&nbsp;=&nbsp;e).</p>
                  <p>Next detect if the element is no longer equal to the original target (this&nbsp;!== e.target), this
                    checks if the user moved onto an overlapping element. If so, the X,Y values would then point to that
                    elements origin and would no longer be the same values as if the user was hovering over the 'hero'.
                    Because of this, calculate and set the X,Y values to match the new targets' offset plus the current X,Y
                    (x&nbsp;= x&nbsp;+ e.target.offsetLeft). This ensures the X,Y values are still the same as they would be
                    if there was no overlapping&nbsp;element.</p>
                  <p>Next create new 'xWalk' and 'yWalk' variables that converts the walk into the bounds for X and Y
                    (xWalk&nbsp;= Math.round((x&nbsp;/&nbsp;width *&nbsp;walk) - (walk&nbsp;/&nbsp;2))). Finally set the text
                    shadow value on the 'text' element by injecting xWalk and yWalk (text.style.textShadow&nbsp;=
                    `${xWalk}px&nbsp;${yWalk}px 0&nbsp;rgba(0,0,0,0.6)`).</p>
                  {/* <!-- CodePen --> */}
                  <p class="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="BgVMRE"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 16 - Mouse Move Shadow">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/BgVMRE/">
                        JavaScript30 - 16 - Mouse Move Shadow</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 16 | Mouse Move Shadow --> */}
      <div id="javascript30-16" class="section">
        <div class="row">
          <div class="small-12 column">
            <div class="hero">
              <h2 contenteditable>🔥</h2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default mouseMoveShadow;