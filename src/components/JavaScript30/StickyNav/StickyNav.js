import React from 'react';

import { Row, Column } from 'react-foundation';

import './StickyNav.module.scss';

const stickyNav = props => {
  // Scoping this exercise to the page ID. Parent <div>.
  const page = document.querySelector('#javascript30-24');
  // Grab the 'nav'. <div> inside of 'page'.
  const nav = page.querySelector('#sticky-nav');
  // The position of the 'nav' relative to the top of the page.
  let topOfNav = nav.offsetTop;

  // Determines if the nav is fixed on the page or not.
  function fixNav() {
    // If the window scrollY position is >= the top of the 'nav' (topOfNav).
    if (window.scrollY >= topOfNav) {
      // Add padding to the top of the parent the 'page' Equal to the height of the 'nav'. This ensures the newly fixed 'nav' does not hide any content underneath of it.
      page.style.paddingTop = nav.offsetHeight + 'px';
      // Add the class that sets 'nav' to position: fixed;.
      page.classList.add('fixed-nav');
    } else {
      // If the window is not scrolled far enough.
      // Remove the class that sets 'nav' to position: fixed;.
      page.classList.remove('fixed-nav');
      // Remove the padding at the top of 'page'.
      page.style.paddingTop = 0;
    }
  }

  // When the window is scrolled, fixNav().
  window.addEventListener('scroll', fixNav);

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
            <h1>Sticky Nav</h1>

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
                  <p>In this lesson I create a sticky navigation that starts partway down the page but sticks to the top when
                    the page is scrolled and the &lt;div&gt; hits the top of the&nbsp;viewport.</p>
                  <p>First I grab the 'nav' and get the top of the it (topOfNav&nbsp;= nav.offsetTop). I
                    <strong>listen</strong> on the 'window' for a 'scroll' event and run&nbsp;fixNav().</p>
                  <p>In <strong>fixNav()</strong>&nbsp;- Look for if (window.scrollY&nbsp;>= topOfNav), <strong>If
                      true</strong>, add a class of '.fixed-nav' to the element to give it fixed positioning on the top of the
                    page. Also offset the page by giving it padding on top, equivalent to the offset height of the &lt;div&gt;
                    (page.style.paddingTop&nbsp;= nav.offsetHeight&nbsp;+&nbsp;'px'). <strong>If false</strong>, remove the
                    '.fixed-nav' class and remove the padding that was added to the top of the&nbsp;page.</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="JQZxMM"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 24 - Sticky Nav">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/JQZxMM/">
                        JavaScript30 - 24 - Sticky Nav</a> by Corey Noble (<a
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

      <div id="javascript30-24">
        <div id="sticky-nav">
          <ul>
            <li className="logo"><a href="#">LOGO</a></li>
            <li className="show-for-medium"><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Locations</a></li>
          </ul>
        </div>

        <div className="site-wrap">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a
            qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis
            quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni,
            ut,&nbsp;dignissimos.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a
            qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis
            quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni,
            ut,&nbsp;dignissimos.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt facilis et iste corrupti omnis
            tenetur est. Iste ut est dicta dolor itaque adipisci, dolorum minima, veritatis earum provident error molestias.
            Ratione magni illo sint vel velit ut excepturi consectetur suscipit, earum modi accusamus voluptatem nostrum,
            praesentium numquam, reiciendis voluptas sit id quisquam. Consequatur in quis reprehenderit modi perspiciatis
            necessitatibus saepe, quidem, suscipit iure natus dignissimos ipsam, eligendi deleniti accusantium, rerum
            quibusdam fugit perferendis et optio recusandae sed ratione. Culpa, dolorum reprehenderit harum ab voluptas fuga,
            nisi eligendi natus maiores illum quas quos et aperiam aut doloremque optio maxime fugiat doloribus. Eum dolorum
            expedita quam,&nbsp;nesciunt</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a
            qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis
            quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni,
            ut,&nbsp;dignissimos.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a
            qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis
            quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni,
            ut,&nbsp;dignissimos.</p>
          <p>at provident praesentium atque quas rerum optio dignissimos repudiandae ullam illum quibusdam. Vel ad error
            quibusdam, illo ex totam placeat. Quos excepturi fuga, molestiae ea quisquam minus, ratione dicta consectetur
            officia omnis, doloribus voluptatibus? Veniam ipsum veritatis architecto, provident quas consequatur doloremque
            quam quidem earum expedita, ad delectus voluptatum, omnis praesentium nostrum qui aspernatur ea eaque adipisci et
            cumque ab? Ea voluptatum dolore itaque odio. Eius minima distinctio harum, officia ab nihil exercitationem.
            Tempora rem nemo nam temporibus molestias facilis minus ipsam quam doloribus consequatur debitis nesciunt tempore
            officiis aperiam quisquam, molestiae voluptates cum, fuga culpa. Distinctio accusamus quibusdam, tempore
            perspiciatis dolorum optio facere consequatur quidem ullam beatae architecto, ipsam sequi officiis dignissimos
            amet impedit natus necessitatibus tenetur repellendus dolor rem! Dicta dolorem, iure, facilis illo ex nihil ipsa
            amet officia, optio temporibus eum nemo neque odio reprehenderit soluta sint eaque. Aperiam, qui ut tenetur,
            voluptate doloremque officiis dicta quaerat voluptatem rerum natus magni. Eum amet autem dolor&nbsp;ullam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a
            qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis
            quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni,
            ut,&nbsp;dignissimos.</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default stickyNav;