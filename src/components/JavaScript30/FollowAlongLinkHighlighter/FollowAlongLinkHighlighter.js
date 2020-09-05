import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './FollowAlongLinkHighlighter.module.scss';

const followAlongLinkHighlighter = props => {
  // // Page. Parent <div>.
  // const page = document.querySelector('#javascript30-22');
  // // Grab every <a> on 'page'.
  // const triggers = page.querySelectorAll('a');
  // // <span> element that follows along.
  // const highlight = document.createElement('span');
  // // Add a class of 'highlight' to the <span>
  // highlight.classList.add('highlight');
  // // Append <span> as a child element to 'page'
  // page.appendChild(highlight);

  // // Moves the <span> to the position of the hovered <a> inside of 'page.
  // function highlightLink() {
  //   this.classList.add('active');
  //   // The bounding client rectangle of the <a> (this).
  //   const linkCoords = this.getBoundingClientRect();
  //   console.log(linkCoords);
  //   // Coordinates object (Width, Height, Left, Top) populated from the 'linkCoords' bounding rectangle.
  //   const coords = {
  //     // Width / Height of the rectangle.
  //     width: linkCoords.width,
  //     height: linkCoords.height,
  //     // Position of the <a> from the (top/left) of the window, PLUS the scroll value (scrollY/scrollX).
  //     top: linkCoords.top + window.scrollY,
  //     left: linkCoords.left + window.scrollX
  //   };

  //   // Set the Width / Height of the <span> to match the Width / Height of the <a> rectangle.
  //   highlight.style.width = `${coords.width}px`;
  //   highlight.style.height = `${coords.height}px`;
  //   // Set the Position (scrollX, scrollY) of the <span> to match the position of the <a> rectangle.
  //   highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
  // }

  // function mouseLeave() {
  //   this.classList.remove('active');
  // }

  // // On each <a>, when mouse enters the element, highlightLink().
  // triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
  // triggers.forEach(a => a.addEventListener('mouseleave', mouseLeave));

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Follow Along Link Highlighter</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 22 | Follow Along Link Highlighter */}
      <Section classProp={classes.FollowAlongLinkHighlighter}>
        <Row className="nav">
          <Column small={6} large={3}>
            <button>Home</button>
          </Column>
          <Column small={6} large={3}>
            <button>Order Status</button>
          </Column>
          <Column small={6} large={3}>
            <button>Read Our History</button>
          </Column>
          <Column small={6} large={3}>
            <button>Contact Us</button>
          </Column>
        </Row>
        <Row>
          <Column small={12}>
            <div className="wrapper">
              <p>Lorem ipsum dolor sit amet, <button>consectetur</button> adipisicing elit. Est <button>explicabo</button> unde natus necessitatibus esse obcaecati distinctio, aut itaque, qui&nbsp;vitae!</p>
              <p>Aspernatur sapiente quae sint <button>soluta</button> modi, atque praesentium laborum pariatur earum <button>quaerat</button> cupiditate consequuntur facilis ullam dignissimos, aperiam quam&nbsp;veniam.</p>
              <p>Cum ipsam quod, incidunt sit ex <button>tempore</button> placeat maxime <button>corrupti</button> possimus <button>veritatis</button> ipsum fugit recusandae est doloremque? Hic, <button>quibusdam</button>,&nbsp;nulla.</p>
              <p>Esse quibusdam, ad, ducimus cupiditate <button>nulla</button>, quae magni odit <button>totam</button> ut consequatur eveniet sunt quam provident sapiente dicta neque&nbsp;quod.</p>
              <p>Aliquam <button>dicta</button> sequi culpa fugiat <button>consequuntur</button> pariatur optio ad minima, maxime <button>odio</button>, distinctio magni impedit tempore enim repellendus <button>repudiandae</button>&nbsp;quas! </p>
            </div>
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default followAlongLinkHighlighter;