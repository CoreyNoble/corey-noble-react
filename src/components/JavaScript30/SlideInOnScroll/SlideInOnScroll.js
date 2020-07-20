import React from 'react';

import { Row, Column } from 'react-foundation';

import './SlideInOnScroll.module.scss';

const slideInOnScroll = props => {
  // debounce: for performance. Pass a function through debounce to minimize how often the function can be run (wait = 20(milliseconds)).
  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Grab all elements with .slide-in
  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide(e) {
    // Loop over each image
    sliderImages.forEach(sliderImage => {
      // The pixel level for where you are at the bottom of the viewport.
      const slideInAt =
        window.scrollY + window.innerHeight - sliderImage.height / 2;
      // Where the bottom of the image is.
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      // When the viewport is halfway scrolled through the height of the image.
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      // Have not scrolled past the image.
      const isNotScrolledPast = window.scrollY < imageBottom;

      // When we toggle the visibility classes
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active'); // Show
      } else {
        sliderImage.classList.remove('active'); // Hide
      }
    });
  }

  // Every time the window is scrolled, debounce(checkslide(e))
  window.addEventListener('scroll', debounce(checkSlide));

  return (
    <React.Fragment>
      {/* <!-- Introduction --> */}
      <div className="js30-intro section black">
        <Row>
          <Column small={12}>
            {/* <!-- Back CTA --> */}
            <p className="back-cta"><small><strong><a href="{{root}}portfolio/development/javascript30.html"
                    title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small>
            </p>

            {/* <!-- Title --> */}
            <h1>Slide in on Scroll</h1>

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
                  <p>In this lesson I learn how to create a slide in on scroll effect on&nbsp;elements.</p>
                  <p>First I create a variable that finds all '.slide-in'&nbsp;elements.</p>
                  <p>I <strong>listen</strong> on the 'window' object for a 'scroll' event and run checkSlide(e). This event
                    ends up firing way too often so I wrap the call in a debounce() function to delay it from firing as often
                    ('scroll',&nbsp;debounce(checkSlide(e))).</p>
                  <p>In <strong>checkSlide(e)</strong>&nbsp;- For each '.slide-in' element, detect the scroll depth when the
                    image should slide in ((window.scrollY&nbsp;+ window.innerHeight) - sliderImage.height&nbsp;/&nbsp;2).
                    Also detect the bottom of the image, if the image is half shown, and if the image has not been scrolled
                    past. Finally if the image is half shown, and is not scrolled past, add an '.active' class to the element.
                    Otherwise remove the '.active' class. This transitions the&nbsp;element.</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="rEKPyW"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 13 - Slide In On Scroll">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/rEKPyW/">
                        JavaScript30 - 13 - Slide In On Scroll</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 13 | Slide in on Scroll --> */}
      <div className="section white">
        <Row>
          <Column id="javascript30-13" small={12}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis
              a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis
              quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni,
              ut,&nbsp;dignissimos.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis
              a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis
              quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni,
              ut,&nbsp;dignissimos.</p>

            <img className="align-left slide-in" src="https://unsplash.it/400/400" alt="" role="presentation" />

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt facilis et iste corrupti omnis
              tenetur est. Iste ut est dicta dolor itaque adipisci, dolorum minima, veritatis earum provident error molestias.
              Ratione magni illo sint vel velit ut excepturi consectetur suscipit, earum modi accusamus voluptatem nostrum,
              praesentium numquam, reiciendis voluptas sit id quisquam. Consequatur in quis reprehenderit modi perspiciatis
              necessitatibus saepe, quidem, suscipit iure natus dignissimos ipsam, eligendi deleniti accusantium, rerum
              quibusdam fugit perferendis et optio recusandae sed ratione. Culpa, dolorum reprehenderit harum ab voluptas
              fuga, nisi eligendi natus maiores illum quas quos et aperiam aut doloremque optio maxime fugiat doloribus. Eum
              dolorum expedita quam,&nbsp;nesciunt</p>

            <img className="align-right slide-in" src="https://unsplash.it/400/401" alt="" role="presentation" />

            <p> at provident praesentium atque quas rerum optio dignissimos repudiandae ullam illum quibusdam. Vel ad error
              quibusdam, illo ex totam placeat. Quos excepturi fuga, molestiae ea quisquam minus, ratione dicta consectetur
              officia omnis, doloribus voluptatibus? Veniam ipsum veritatis architecto, provident quas consequatur doloremque
              quam quidem earum expedita, ad delectus voluptatum, omnis praesentium nostrum qui aspernatur ea eaque adipisci
              et cumque ab? Ea voluptatum dolore itaque odio. Eius minima distinctio harum, officia ab nihil exercitationem.
              Tempora rem nemo nam temporibus molestias facilis minus ipsam quam doloribus consequatur debitis nesciunt
              tempore officiis aperiam quisquam, molestiae voluptates cum, fuga culpa. Distinctio accusamus quibusdam, tempore
              perspiciatis dolorum optio facere consequatur quidem ullam beatae architecto, ipsam sequi officiis dignissimos
              amet impedit natus necessitatibus tenetur repellendus dolor rem! Dicta dolorem, iure, facilis illo ex nihil ipsa
              amet officia, optio temporibus eum autem odit repellendus nisi. Possimus modi, corrupti error debitis doloribus
              dicta libero earum, sequi porro ut excepturi nostrum ea voluptatem nihil culpa? Ullam expedita eligendi
              obcaecati reiciendis velit provident omnis quas qui in corrupti est dolore facere ad hic, animi soluta assumenda
              consequuntur reprehenderit! Voluptate dolor nihil veniam laborum voluptas nisi pariatur sed optio accusantium
              quam consectetur, corrupti, sequi et consequuntur, excepturi doloremque. Tempore quis velit corporis neque fugit
              non sequi eaque rem hic. Facere, inventore, aspernatur. Accusantium modi atque, asperiores qui nobis soluta
              cumque suscipit excepturi possimus doloremque odit saepe perferendis temporibus molestiae nostrum voluptatum
              quis id sint quidem nesciunt culpa. Rerum labore dolor beatae blanditiis praesentium explicabo velit optio esse
              aperiam similique, voluptatem cum, maiores ipsa tempore. Reiciendis sed culpa atque inventore, nam ullam enim
              expedita consectetur id velit iusto alias vitae explicabo nemo neque odio reprehenderit soluta sint eaque.
              Aperiam, qui ut tenetur, voluptate doloremque officiis dicta quaerat voluptatem rerum natus magni. Eum amet
              autem dolor&nbsp;ullam.</p>

            <img className="align-left slide-in" src="https://unsplash.it/200/500" alt="" role="presentation" />

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae
              dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus
              expedita quia vero perferendis, deserunt et incidunt eveniet <img className="align-right slide-in" src="https://unsplash.it/200/200" alt="" role="presentation" /> temporibus doloremque possimus facilis. Possimus labore, officia dolore! Eaque
              ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore
              iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi. Asperiores
              laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt.
              Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at
              cupiditate commodi expedita in, quae blanditiis. Deserunt labore sequi, repellat laboriosam est, doloremque
              culpa reiciendis tempore excepturi. Enim nostrum fugit itaque vel corporis ullam sed tenetur ipsa qui rem quam
              error sint, libero. Laboriosam rem, ratione. Autem&nbsp;blanditiis</p>


            <p>laborum neque repudiandae quam, cumque, voluptate veritatis itaque, placeat veniam ad nisi. Expedita, laborum
              reprehenderit ratione soluta velit natus, odit mollitia. Corporis rerum minima fugiat in nostrum. Assumenda
              natus cupiditate hic quidem ex, quas, amet ipsum esse dolore facilis beatae maxime qui inventore, iste? Maiores
              dignissimos dolore culpa debitis voluptatem harum, excepturi enim reiciendis, tempora ab ipsam illum aspernatur
              quasi qui porro saepe iure sunt eligendi tenetur quaerat ducimus quas sequi omnis aperiam suscipit! Molestiae
              obcaecati officiis quo, ratione eveniet, provident pariatur. Veniam quasi expedita distinctio, itaque molestiae
              sequi, dolorum nisi repellendus quia facilis iusto dignissimos nam? Tenetur fugit quos autem nihil, perspiciatis
              expedita enim tempore, alias ab maiores quis necessitatibus distinctio molestias eum, quidem. Delectus impedit
              quidem laborum, fugit vel neque quo, ipsam, quasi aspernatur quas odio nihil? Veniam amet reiciendis blanditiis
              quis reprehenderit repudiandae neque, ab ducimus, odit excepturi voluptate saepe ipsam. Voluptatem eum error
              voluptas porro officiis, amet! Molestias, fugit, ut! Tempore non magnam, amet, facere ducimus accusantium eos
              veritatis&nbsp;neque.</p>

            <img className="align-right slide-in" src="https://unsplash.it/400/400" alt="" role="presentation" />

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae
              dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus
              expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis. Possimus
              labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo
              placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis
              eligendi. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum
              non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid
              laboriosam architecto at cupiditate commodi expedita in, quae blanditiis. Deserunt labore sequi, repellat
              laboriosam est, doloremque culpa reiciendis tempore excepturi. Enim nostrum fugit itaque vel corporis ullam sed
              tenetur ipsa qui rem quam error sint, libero. Laboriosam rem, ratione. Autem blanditiis laborum neque
              repudiandae quam, cumque, voluptate veritatis itaque, placeat veniam ad nisi. Expedita, laborum reprehenderit
              ratione soluta velit natus, odit mollitia. Corporis rerum minima fugiat in nostrum. Assumenda natus cupiditate
              hic quidem ex, quas, amet ipsum esse dolore facilis beatae maxime qui inventore, iste? Maiores dignissimos
              dolore culpa debitis voluptatem harum, excepturi enim reiciendis, tempora ab ipsam illum aspernatur quasi qui
              porro saepe iure sunt eligendi tenetur quaerat ducimus quas sequi omnis aperiam suscipit! Molestiae obcaecati
              officiis quo, ratione eveniet, provident pariatur. Veniam quasi expedita distinctio, itaque molestiae sequi,
              dolorum nisi repellendus quia facilis iusto dignissimos nam? Tenetur fugit quos autem nihil, perspiciatis
              expedita enim tempore, alias ab maiores quis necessitatibus distinctio molestias eum, quidem. Delectus impedit
              quidem laborum, fugit vel neque quo, ipsam, quasi aspernatur quas odio nihil? Veniam amet reiciendis blanditiis
              quis reprehenderit repudiandae neque, ab ducimus, odit excepturi voluptate saepe ipsam. Voluptatem eum error
              voluptas porro officiis, amet! Molestias, fugit, ut! Tempore non magnam, amet, facere ducimus accusantium eos
              veritatis&nbsp;neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae
              dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus
              expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis. Possimus
              labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo
              placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis
              eligendi. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum
              non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid
              laboriosam architecto at cupiditate commodi expedita in, quae blanditiis. Deserunt labore sequi, repellat
              laboriosam est, doloremque culpa reiciendis tempore excepturi. Enim nostrum fugit itaque vel corporis ullam sed
              tenetur ipsa qui rem quam error sint, libero. Laboriosam rem, ratione. Autem blanditiis laborum neque
              repudiandae quam, cumque, voluptate veritatis itaque, placeat veniam ad nisi. Expedita, laborum reprehenderit
              ratione soluta velit natus, odit mollitia. Corporis rerum minima fugiat in nostrum. Assumenda natus cupiditate
              hic quidem ex, quas, amet ipsum esse dolore facilis beatae maxime qui inventore, iste? Maiores dignissimos
              dolore culpa debitis voluptatem harum, excepturi enim reiciendis, tempora ab ipsam illum aspernatur quasi qui
              porro saepe iure sunt eligendi tenetur quaerat ducimus quas sequi omnis aperiam suscipit! Molestiae obcaecati
              officiis quo, ratione eveniet, provident pariatur. Veniam quasi expedita distinctio, itaque molestiae sequi,
              dolorum nisi repellendus quia facilis iusto dignissimos nam? Tenetur fugit quos autem nihil, perspiciatis
              expedita enim tempore, alias ab maiores quis necessitatibus distinctio molestias eum, quidem. Delectus impedit
              quidem laborum, fugit vel neque quo, ipsam, quasi aspernatur quas odio nihil? Veniam amet reiciendis blanditiis
              quis reprehenderit repudiandae neque, ab ducimus, odit excepturi voluptate saepe ipsam. Voluptatem eum error
              voluptas porro officiis, amet! Molestias, fugit, ut! Tempore non magnam, amet, facere ducimus accusantium eos
              veritatis&nbsp;neque.</p>
          </Column>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default slideInOnScroll;