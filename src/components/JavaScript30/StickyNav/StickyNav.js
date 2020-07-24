import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';
import { ShowForScreenSize } from 'react-foundation-components/lib/visibility';

import Section from '../../../containers/Section/Section';

import classes from './StickyNav.module.scss';

const stickyNav = props => {
  // // Scoping this exercise to the page ID. Parent <div>.
  // const page = document.querySelector('#javascript30-24');
  // // Grab the 'nav'. <div> inside of 'page'.
  // const nav = page.querySelector('#sticky-nav');
  // // The position of the 'nav' relative to the top of the page.
  // let topOfNav = nav.offsetTop;

  // // Determines if the nav is fixed on the page or not.
  // function fixNav() {
  //   // If the window scrollY position is >= the top of the 'nav' (topOfNav).
  //   if (window.scrollY >= topOfNav) {
  //     // Add padding to the top of the parent the 'page' Equal to the height of the 'nav'. This ensures the newly fixed 'nav' does not hide any content underneath of it.
  //     page.style.paddingTop = nav.offsetHeight + 'px';
  //     // Add the class that sets 'nav' to position: fixed;.
  //     page.classList.add('fixed-nav');
  //   } else {
  //     // If the window is not scrolled far enough.
  //     // Remove the class that sets 'nav' to position: fixed;.
  //     page.classList.remove('fixed-nav');
  //     // Remove the padding at the top of 'page'.
  //     page.style.paddingTop = 0;
  //   }
  // }

  // // When the window is scrolled, fixNav().
  // window.addEventListener('scroll', fixNav);

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/development/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Sticky Nav</h1>
          </Column>
        </Row>
      </Section>

      <div id="javascript30-24">
        <div id="sticky-nav">
          <ul>
            <li className="logo"><a href="#">LOGO</a></li>

            <ShowForScreenSize screenSize="large">
              <li><a href="#">Home</a></li>
            </ShowForScreenSize>

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