import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './FunWithHTML5Canvas.module.scss';

const funWithHTML5Canvas = props => {
  // const parent = document.querySelector('#parent');
  // // Canvas element
  // const canvas = document.querySelector('#draw');
  // // The context of the canvas is what we draw onto. This can either be 2d or 3d space.
  // const ctx = canvas.getContext('2d');
  // // Size the canvas to fix the window.
  // canvas.width = parent.offsetWidth;
  // canvas.height = parent.offsetHeight;

  // // Context properties
  // ctx.strokeStyle = '#BADA55';
  // ctx.lineJoin = 'round';
  // ctx.lineCap = 'round';
  // ctx.lineWidth = 80;
  // ctx.globalCompositeOperation = 'multiply';

  // // Initialize variables
  // // currently drawing?
  // let isDrawing = false;
  // // where do you start the line from
  // let lastX = 0;
  // let lastY = 0;
  // // colour of the line
  // let hue = 0;
  // // what direction
  // let direction = true;

  // // While drawing
  // function draw(e) {
  //   // stop the function from running when they are not mouse down
  //   if (!isDrawing) return;
  //   console.log(e);
  //   // Set the colour of the line stroke
  //   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  //   // Start a path
  //   ctx.beginPath();
  //   // Start X and Y
  //   ctx.moveTo(lastX, lastY);
  //   // End X and Y
  //   ctx.lineTo(e.offsetX, e.offsetY);
  //   // Draw the line
  //   ctx.stroke();
  //   // Set lastX, lastY to the current cursors' position
  //   [lastX, lastY] = [e.offsetX, e.offsetY];

  //   // Increase the hue (colour change)
  //   hue++;
  //   // Reset the hue to 0 when it makes a full rotation
  //   if (hue >= 360) {
  //     hue = 0;
  //   }

  //   // Change the line width while drawing
  //   // Min/Max values, flip direction
  //   if (ctx.lineWidth >= 80 || ctx.lineWidth <= 24) {
  //     direction = !direction;
  //   }
  //   // Increase/Decrease
  //   if (direction) {
  //     ctx.lineWidth++;
  //   } else {
  //     ctx.lineWidth--;
  //   }
  // }

  // // Does the user have their mouse down?
  // canvas.addEventListener('mousedown', e => {
  //   isDrawing = true;
  //   // Set lastX, lastY to the current cursors' position
  //   [lastX, lastY] = [e.offsetX, e.offsetY];
  // });

  // // Is the user moving the mouse? draw(e)
  // canvas.addEventListener('mousemove', draw);
  // // Has the user stopped holding the click? !isDrawing
  // canvas.addEventListener('mouseup', () => (isDrawing = false));
  // // Has the mouse left the canvas? !isDrawing
  // canvas.addEventListener('mouseout', () => (isDrawing = false));

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Fun with HTML5 Canvas</h1>
          </Column>
        </Row>
      </Section>

      <Section classProp={classes.FunWithHTML5Canvas}>
        <Row>
          <Column id="parent" small={12}>
            {/* JavaScript30 | 8 | Fun with HTML5 Canvas */}
            <canvas id="draw"></canvas>
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default funWithHTML5Canvas;