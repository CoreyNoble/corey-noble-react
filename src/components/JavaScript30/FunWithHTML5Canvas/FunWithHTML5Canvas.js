import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import './FunWithHTML5Canvas.module.scss';

const funWithHTML5Canvas = props => {
  const parent = document.querySelector('#parent');
  // Canvas element
  const canvas = document.querySelector('#draw');
  // The context of the canvas is what we draw onto. This can either be 2d or 3d space.
  const ctx = canvas.getContext('2d');
  // Size the canvas to fix the window.
  canvas.width = parent.offsetWidth;
  canvas.height = parent.offsetHeight;

  // Context properties
  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 80;
  ctx.globalCompositeOperation = 'multiply';

  // Initialize variables
  // currently drawing?
  let isDrawing = false;
  // where do you start the line from
  let lastX = 0;
  let lastY = 0;
  // colour of the line
  let hue = 0;
  // what direction
  let direction = true;

  // While drawing
  function draw(e) {
    // stop the function from running when they are not mouse down
    if (!isDrawing) return;
    console.log(e);
    // Set the colour of the line stroke
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // Start a path
    ctx.beginPath();
    // Start X and Y
    ctx.moveTo(lastX, lastY);
    // End X and Y
    ctx.lineTo(e.offsetX, e.offsetY);
    // Draw the line
    ctx.stroke();
    // Set lastX, lastY to the current cursors' position
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // Increase the hue (colour change)
    hue++;
    // Reset the hue to 0 when it makes a full rotation
    if (hue >= 360) {
      hue = 0;
    }

    // Change the line width while drawing
    // Min/Max values, flip direction
    if (ctx.lineWidth >= 80 || ctx.lineWidth <= 24) {
      direction = !direction;
    }
    // Increase/Decrease
    if (direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  }

  // Does the user have their mouse down?
  canvas.addEventListener('mousedown', e => {
    isDrawing = true;
    // Set lastX, lastY to the current cursors' position
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  // Is the user moving the mouse? draw(e)
  canvas.addEventListener('mousemove', draw);
  // Has the user stopped holding the click? !isDrawing
  canvas.addEventListener('mouseup', () => (isDrawing = false));
  // Has the mouse left the canvas? !isDrawing
  canvas.addEventListener('mouseout', () => (isDrawing = false));

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
            <h1>Fun with HTML5 Canvas</h1>

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
                  <p>In this lesson I a create a drawing application that draws brush strokes according to user input. The
                    brush transitions in size and colour as the user moves&nbsp;around.</p>
                  <p>First I get the &lt;canvas&gt; and its' context in 2d space 'ctx'. I assign initial values for:
                    'strokeStyle', 'lineJoin', 'lineCap', 'lineWidth' and 'globalCompositeOperation'. These help define the
                    look of the brush stroke. Then I initialize variables that will determine if the user 'isDrawing', their
                    'lastX' and 'lastY' positions, the current 'hue', and 'direction' to determine if the brush is supposed to
                    increase or decrease in&nbsp;size.</p>
                  <p>I <strong>listen</strong> on the &lt;canvas&gt; element for 'mousedown', mousemove', 'mouseup' and
                    'mouseout'&nbsp;events.</p>
                  <p>On <strong>'mousedown'</strong>&nbsp;- Pass the event into a function(e), set 'isDrawing' to true and set
                    the 'lastX' and 'lastY' values to match the current values from the event 'e.offsetX'
                    and&nbsp;'e.offsetY'.</p>
                  <p>On <strong>'mousemove'</strong>&nbsp;- Pass the event into a function Draw(e). If 'IsDrawing' is not
                    true, exit the function. Otherwise, inject the 'hue' into the context 'strokeStyle' using
                    template&nbsp;strings.</p>
                  <p>Then begin a path in the context (.beginPath()). Start the path at 'lastX' and 'lastY' (.moveTo()). Draw
                    a line to the current 'e.offsetX' and 'e.offsetY' (.lineTo()). Then fill out the line
                    stroke&nbsp;(.stroke()).</p>
                  <p>Next increment the 'hue' value, if it's >= 360, reset it to 0 to loop back around on the colour wheel.
                    Increase or decrease the 'lineWidth' in a range between two set values, If the 'lineWidth' hits the
                    bounds, flip the polarity of 'direction' and increment 'lineWidth' in the opposite&nbsp;direction.</p>
                  <p><strong>'mouseup' or 'mouseout'</strong>&nbsp;- Set 'isDrawing' to&nbsp;false.</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="qzKgaP"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 8 - Fun With HTML5 Canvas">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/qzKgaP/">
                        JavaScript30 - 8 - Fun With HTML5 Canvas</a> by Corey Noble (<a
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

      <div id="javascript30-8" className="section">
        <Row>
          <Column id="parent" small={12}>
            {/* <!-- JavaScript30 | 8 | Fun with HTML5 Canvas --> */}
            <canvas id="draw"></canvas>
          </Column>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default funWithHTML5Canvas;