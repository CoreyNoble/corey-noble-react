import React from 'react';

import { Row, Column } from 'react-foundation';

import './FollowAlongLinkHighlighter.module.scss';

const followAlongLinkHighlighter = props => {
  // Page. Parent <div>.
  const page = document.querySelector('#javascript30-22');
  // Grab every <a> on 'page'.
  const triggers = page.querySelectorAll('a');
  // <span> element that follows along.
  const highlight = document.createElement('span');
  // Add a class of 'highlight' to the <span>
  highlight.classList.add('highlight');
  // Append <span> as a child element to 'page'
  page.appendChild(highlight);

  // Moves the <span> to the position of the hovered <a> inside of 'page.
  function highlightLink() {
    this.classList.add('active');
    // The bounding client rectangle of the <a> (this).
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    // Coordinates object (Width, Height, Left, Top) populated from the 'linkCoords' bounding rectangle.
    const coords = {
      // Width / Height of the rectangle.
      width: linkCoords.width,
      height: linkCoords.height,
      // Position of the <a> from the (top/left) of the window, PLUS the scroll value (scrollY/scrollX).
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
    };

    // Set the Width / Height of the <span> to match the Width / Height of the <a> rectangle.
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    // Set the Position (scrollX, scrollY) of the <span> to match the position of the <a> rectangle.
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
  }

  function mouseLeave() {
    this.classList.remove('active');
  }

  // On each <a>, when mouse enters the element, highlightLink().
  triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
  triggers.forEach(a => a.addEventListener('mouseleave', mouseLeave));

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
            <h1>Follow Along Link Highlighter</h1>

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
                  <p>In this lesson I create a puppy &lt;div&gt; that follows along as the user hovers over links. The puppy
                    &lt;div&gt; re-sizes itself to match the width, height and position of the link the user is
                    hovering&nbsp;on.</p>
                  <p>First I grab the parent &lt;div&gt; 'page' and all of the &lt;a&gt; elements. I also create the puppy div
                    'highlight' and append it to&nbsp;'page'.</p>
                  <p>I <strong>listen</strong> for the following&nbsp;events:</p>
                  <ul>
                    <li>
                      <p><strong>&lt;a&gt;</strong></p>
                      <ul>
                        <li>'mouseenter', highlightLink().</li>
                        <li>'mouseleave', mouseLeave().</li>
                      </ul>
                    </li>
                  </ul>
                  <p>In <strong>hightlightLink()</strong>&nbsp;- Add a class of '.active' to 'this' (&lt;a&gt;). Then get the
                    bounding client rectangle for 'this' and set the coordinates to a 'coords'&nbsp;variable.</p>
                  <p>const linkCoords = this.getBoundingClientRect();</p>
                  <p>width: linkCoords.width,<br />
                    height: linkCoords.height,<br />
                    top: linkCoords.top +&nbsp;window.scrollY,<br />
                    left: linkCoords.left +&nbsp;window.scrollX
                  </p>
                  <p>Next inject the puppy div with the coordinates:<br />highlight.style.width = `coords.width px`;<br />
                    highlight.style.height = `coords.height px`;<br />
                    highlight.style.transform = `translate(coords.left px, coords.top px)`;</p>
                  <p>In <strong>mouseLeave()</strong> - Remove the '.active' class from the&nbsp;&lt;a&gt;.</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="ydEZPO"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 22 - Follow Along Link Highlighter">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/ydEZPO/">
                        JavaScript30 - 22 - Follow Along Link Highlighter</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 22 | Follow Along Link Highlighter --> */}
      <div id="javascript30-22" className="section">
        <Row className="nav">
          <Column small={6} large={3}>
            <a href="">Home</a>
          </Column>
          <Column small={6} large={3}>
            <a href="">Order Status</a>
          </Column>
          <Column small={6} large={3}>
            <a href="">Read Our History</a>
          </Column>
          <Column className="end" small={6} large={3}>
            <a href="">Contact Us</a>
          </Column>
        </Row>
        <Row>
          <Column small={12}>
            <div className="wrapper">
              <p>Lorem ipsum dolor sit amet, <a href="">consectetur</a> adipisicing elit. Est <a href="">explicabo</a> unde
                natus necessitatibus esse obcaecati distinctio, aut itaque, qui&nbsp;vitae!</p>
              <p>Aspernatur sapiente quae sint <a href="">soluta</a> modi, atque praesentium laborum pariatur earum <a
                  href="">quaerat</a> cupiditate consequuntur facilis ullam dignissimos, aperiam quam&nbsp;veniam.</p>
              <p>Cum ipsam quod, incidunt sit ex <a href="">tempore</a> placeat maxime <a href="">corrupti</a> possimus <a
                  href="">veritatis</a> ipsum fugit recusandae est doloremque? Hic, <a href="">quibusdam</a>,&nbsp;nulla.</p>
              <p>Esse quibusdam, ad, ducimus cupiditate <a href="">nulla</a>, quae magni odit <a href="">totam</a> ut
                consequatur eveniet sunt quam provident sapiente dicta neque&nbsp;quod.</p>
              <p>Aliquam <a href="">dicta</a> sequi culpa fugiat <a href="">consequuntur</a> pariatur optio ad minima, maxime
                <a href="">odio</a>, distinctio magni impedit tempore enim repellendus <a href="">repudiandae</a>&nbsp;quas!
              </p>
            </div>
          </Column>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default followAlongLinkHighlighter;