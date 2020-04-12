import React from 'react';
import './Geolocation.module.scss';

const geolocation = props => {
  const arrow = document.querySelector('.arrow'); // Compass
  const speed = document.querySelector('.speed-value'); // Speed

  // Listen for the users' updated position. 'watchPosition'.
  // 'getPosition' is static and is only called once.
  navigator.geolocation.watchPosition(
    data => {
      console.log(data);
      // Set the text content of 'speed' to the value of 'data.coords.speed' (Default is km/h).
      speed.textContent = data.coords.speed;
      // Rotate the Compass using the value from 'data.coords.heading' as the set degree of rotation (# of degrees relative to north).
      arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    },
    err => {
      // User denies the webcam request.
      console.error(err);
      alert(
        'This application requires access to your geo-location in-order to function'
      );
    }
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
            <h1>Geolocation</h1>

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
                  <p>In this lesson I am accessing the users' geolocation and displaying their current speed
                    and&nbsp;direction.</p>
                  <p>First I grab the elements I will be manipulating, 'arrow' and&nbsp;'speed'.</p>
                  <p>Next I request to watch the geolocation data (navigator.geolocation.watchPosition((data) =>&nbsp;{}). If
                    the user accepts the request, I change 'speed.textContent' to match the speed value provided by the
                    response (speed.textContent&nbsp;= data.coords.speed). For 'arrow' I rotate the image using the 'heading'
                    in the response (arrow.style.transform&nbsp;= `rotate(data.coords.heading deg)`).</p>
                  <p>If the user denies the request, I log an error to the console and alert the user that the application
                    requires geolocation permission to&nbsp;function.</p>

                  {/* <!-- CodePen --> */}
                  <p className="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="dBKaVe"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 21 - Geolocation">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/dBKaVe/">
                        JavaScript30 - 21 - Geolocation</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 21 | Geolocation --> */}
      <div id="javascript30-21" className="section">
        <div className="row">
          <div className="small-12 column">
            <div className="locator">
              <svg className="arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" version="1.1"
                x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve">
                <g>
                  <path fill="#fff"
                    d="M32,1.824C15.361,1.824,1.825,15.361,1.825,32c0,16.639,13.537,30.176,30.175,30.176   S62.175,48.639,62.175,32C62.175,15.361,48.639,1.824,32,1.824z M29.715,3.988h1.12l2.333,3.807V3.988h1.069v5.701h-1.155   l-2.298-3.718v3.718h-1.069V3.988z M9.323,33.917H8.102l-1.136-4.262l-1.132,4.262H4.587l-1.361-5.701h1.178l0.859,3.916   l1.042-3.916h1.369l0.999,3.982l0.875-3.982h1.159L9.323,33.917z M33.995,59.828c-0.181,0.285-0.438,0.497-0.77,0.636   c-0.332,0.139-0.745,0.208-1.241,0.208c-0.721,0-1.274-0.167-1.661-0.5c-0.386-0.333-0.617-0.819-0.692-1.456l1.12-0.109   c0.067,0.376,0.204,0.652,0.41,0.828c0.206,0.176,0.484,0.264,0.834,0.264c0.371,0,0.65-0.078,0.838-0.235   c0.188-0.157,0.282-0.34,0.282-0.55c0-0.135-0.04-0.25-0.119-0.344c-0.079-0.095-0.217-0.177-0.414-0.247   c-0.135-0.047-0.442-0.13-0.922-0.249c-0.617-0.153-1.05-0.341-1.299-0.564c-0.35-0.314-0.525-0.696-0.525-1.147   c0-0.29,0.082-0.562,0.247-0.815c0.165-0.253,0.402-0.445,0.712-0.577c0.31-0.132,0.684-0.198,1.122-0.198   c0.716,0,1.254,0.157,1.616,0.471c0.362,0.314,0.552,0.733,0.57,1.256l-1.151,0.051c-0.049-0.293-0.155-0.504-0.317-0.632   c-0.162-0.128-0.405-0.193-0.729-0.193c-0.334,0-0.596,0.069-0.786,0.206c-0.122,0.088-0.183,0.206-0.183,0.354   c0,0.135,0.057,0.25,0.171,0.346c0.145,0.122,0.498,0.249,1.058,0.381c0.56,0.132,0.974,0.269,1.243,0.41   c0.268,0.141,0.478,0.334,0.63,0.58c0.152,0.245,0.227,0.548,0.227,0.908C34.267,59.237,34.176,59.543,33.995,59.828z M32,52.795   c-11.466,0-20.795-9.329-20.795-20.795c0-11.466,9.329-20.795,20.795-20.795S52.795,20.534,52.795,32   C52.795,43.466,43.466,52.795,32,52.795z M55.014,33.917v-5.701h4.227v0.965h-3.076v1.264h2.862v0.96h-2.862v1.552h3.185v0.961   H55.014z" />
                  <g>
                    <path fill="#000"
                      d="M48.904,31.863c-4.074-1.358-8.148-2.717-12.226-4.066c-0.265-0.087-0.399-0.223-0.486-0.486    c-1.349-4.077-2.708-8.151-4.066-12.226c-0.029-0.087-0.074-0.169-0.132-0.3c-0.054,0.152-0.09,0.245-0.122,0.34    c-1.352,4.053-2.707,8.104-4.048,12.161c-0.096,0.292-0.246,0.428-0.532,0.522c-4.056,1.342-8.108,2.696-12.16,4.049    c-0.097,0.032-0.189,0.074-0.344,0.137c0.172,0.06,0.267,0.093,0.362,0.125c4.074,1.358,8.148,2.717,12.224,4.072    c0.204,0.068,0.337,0.158,0.412,0.386c1.243,3.757,2.498,7.511,3.75,11.265c0.144,0.432,0.291,0.862,0.463,1.373    c0.068-0.185,0.108-0.285,0.142-0.386c1.349-4.042,2.701-8.083,4.04-12.128c0.094-0.284,0.231-0.438,0.523-0.534    c4.056-1.341,8.108-2.696,12.161-4.048c0.099-0.033,0.195-0.076,0.347-0.137C49.067,31.925,48.987,31.891,48.904,31.863z     M37.475,32.038c-1.316,0.439-2.631,0.879-3.947,1.314c-0.095,0.031-0.139,0.081-0.17,0.173c-0.434,1.313-0.873,2.625-1.311,3.937    c-0.012,0.033-0.024,0.066-0.046,0.126c-0.056-0.166-0.104-0.306-0.15-0.446c-0.407-1.219-0.814-2.437-1.218-3.657    c-0.025-0.074-0.068-0.104-0.134-0.125c-1.323-0.44-2.646-0.881-3.968-1.322c-0.031-0.01-0.062-0.022-0.118-0.041    c0.05-0.02,0.081-0.034,0.112-0.045c1.315-0.439,2.631-0.879,3.947-1.314c0.093-0.03,0.142-0.075,0.173-0.17    c0.435-1.316,0.875-2.632,1.314-3.947c0.01-0.031,0.022-0.062,0.039-0.11c0.019,0.042,0.033,0.069,0.043,0.097    c0.441,1.323,0.882,2.645,1.321,3.969c0.028,0.085,0.072,0.129,0.158,0.158c1.324,0.438,2.646,0.879,3.969,1.32    c0.027,0.009,0.053,0.02,0.1,0.038C37.538,32.013,37.507,32.027,37.475,32.038z" />
                    <path fill="#000"
                      d="M24.436,27.633c-1.069-2.137-2.119-4.237-3.216-6.43c2.189,1.094,4.292,2.145,6.433,3.216    c-0.359,0.713-0.706,1.404-1.057,2.091c-0.023,0.045-0.078,0.082-0.127,0.106C25.807,26.949,25.143,27.28,24.436,27.633z" />
                    <path fill="#000"
                      d="M39.573,27.632c-0.696-0.348-1.351-0.673-2.002-1.005c-0.076-0.038-0.155-0.104-0.193-0.177    c-0.338-0.661-0.666-1.326-1.019-2.033c2.121-1.061,4.228-2.115,6.43-3.217C41.69,23.399,40.635,25.509,39.573,27.632z" />
                    <path fill="#000"
                      d="M24.436,36.339c0.712,0.357,1.394,0.698,2.074,1.043c0.046,0.024,0.088,0.073,0.113,0.121    c0.339,0.671,0.674,1.345,1.028,2.051c-2.126,1.063-4.232,2.117-6.43,3.216C22.317,40.577,23.37,38.472,24.436,36.339z" />
                    <path fill="#000"
                      d="M36.358,39.555c0.354-0.707,0.688-1.38,1.028-2.05c0.028-0.056,0.084-0.111,0.14-0.139    c0.67-0.339,1.343-0.674,2.047-1.026c1.066,2.131,2.118,4.235,3.215,6.43C40.601,41.676,38.503,40.628,36.358,39.555z" />
                  </g>
                </g>
              </svg>


              <h2 className="speed">
                <span className="speed-value">0</span>
                <span className="units">KM/H</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default geolocation;