import React from 'react';
import classes from './WebcamFun.module.scss';

const webcamFun = props => {
  const video = document.querySelector('#player'); // <video>
  const canvas = document.querySelector('#photo'); // <canvas>
  const ctx = canvas.getContext('2d'); // canvas context
  const strip = document.querySelector('.strip'); // photo strip
  const snap = document.querySelector('.snap'); // <audio>
  const photoCTA = document.querySelector('#photoCTA'); // Photo <button>
  const greenScreen = document.querySelector('input[value="greenScreen"]');
  const redShift = document.querySelector('input[value="redShift"]');
  const rgbShift = document.querySelector('input[value="rgbShift"]');
  // const ghosting = document.querySelector('input[name="ghosting"]');

  // Getting the video stream
  function getVideo() {
    // The way you get a user's video. Only getting video, not audio.
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(localMediaStream => {
        console.log(localMediaStream);

        // Set the <video> source to be the local media stream.
        video.srcObject = localMediaStream;
        // Play the <video>.
        video.play();
      })
      // User denies the webcam request.
      .catch(err => {
        // Error
        console.error(`OH NO!!!`, err);
      });
  }

  // Copying the video feed onto the <canvas> as image data so we can manipulate the pixels.
  function paintToCanvas() {
    // Set the <canvas> dimensions (width, height) to match the video dimensions.
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    // Uncheck other filters
    // Green Screen
    if (greenScreen.checked == true) {
      rgbShift.checked = false;
      redShift.checked = false;
    }
    // Red Effect
    else if (redShift.checked == true) {
      greenScreen.checked = false;
      rgbShift.checked = false;
    }
    // RGB Split
    else if (rgbShift.checked == true) {
      greenScreen.checked = false;
      redShift.checked = false;
    }

    // Paint less often than the video feed.
    return setInterval(() => {
      // Draw the image onto the canvas context using the video source, starting from origin (0,0) ending at the end of the canvas (width,height).
      ctx.drawImage(video, 0, 0, width, height);
      // Take the pixels out of the context. Each pixel has 4 values associated with it: red, green, blue, and alpha. 'pixels' represents an array of 'ImageData' which contains a number value for each channel(r,g,b,a) on each pixel (0(r), 1(g), 2(b), 3(a), 4(r), 5(g)...)
      let pixels = ctx.getImageData(0, 0, width, height);

      // Uncheck other filters
      // Green Screen
      if (greenScreen.checked == true) {
        pixels = pixelKnockout(pixels);
      }
      // Red Effect
      else if (redShift.checked == true) {
        pixels = redEffect(pixels);
      }
      // RGB Split
      else if (rgbShift.checked == true) {
        pixels = rgbSplit(pixels);
      }
      // Ghosting Effect
      // Sets the Alpha globally, will persist every frame (fade out effect) until the alpha is equal to 0.
      // if (ghosting.checked == true){
      //   ctx.globalAlpha = 0.8;
      // }

      // Put the pixels back into the context
      ctx.putImageData(pixels, 0, 0);
    }, 16); // interval delay.
  }

  // SET FILTERS
  function filter(pixels) {
    console.log('fired');
  }

  // Take a photo
  function takePhoto() {
    // Reset the <audio>
    snap.currentTime = 0;
    // Play the <audio>
    snap.play();

    // Take the data out of the canvas and convert it to an image .toDataURL('image/jpeg'). This creates a 'base64' string representation of an image.
    const data = canvas.toDataURL('image/jpeg');
    // Create an <a>
    const link = document.createElement('a');
    // <a> Path
    link.href = data;
    // Attributes on the <a>. 'download' to save the file, 'handsome' for the file name.
    link.setAttribute('download', 'handsome');
    // Inside of the <a>. create an <img> (thumbnail).
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
    // Insert the <a> before the first child of the strip.
    strip.insertBefore(link, strip.firstChild);
  }

  // FILTER FUNCTIONS
  // Create a red effect
  function redEffect(pixels) {
    // Loop over every single pixel. (+=4 to skip to the next pixel)
    for (let i = 0; i < pixels.data.length; i += 4) {
      // Manipulate the values for each channel
      // i+0 = Red (r)
      // Increase the value for Red.
      pixels.data[i + 0] = pixels.data[i + 0] + 200;
      // i+1 = Green (g)
      // Decrease the value for Green.
      pixels.data[i + 1] = pixels.data[i + 1] - 50;
      // i+2 = Blue (b)
      // Half the value for Blue.
      pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
    }
    // Return the manipulated pixel values.
    return pixels;
  }

  // Shift the RGB values
  function rgbSplit(pixels) {
    // Loop over every single pixel.
    for (let i = 0; i < pixels.data.length; i += 4) {
      // i+/- = move the pixel right(+) or left(-)
      // = i+0 = Red (r)
      pixels.data[i - 150] = pixels.data[i + 0];
      // i+1 = Green (g)
      pixels.data[i + 500] = pixels.data[i + 1];
      // i+2 = Blue (b)
      pixels.data[i - 550] = pixels.data[i + 2];
    }
    // Return the manipulated pixel values.
    return pixels;
  }

  // Make pixels transparent within a specified range.
  function pixelKnockout(pixels) {
    // Object that holds the min/max range
    const levels = {};

    // For each slider.
    document.querySelectorAll('.rgb input').forEach(input => {
      // Sets the attributes and their values as key:value in the object.
      // Eg. <input min=0, max=255 name="rmin">
      levels[input.name] = input.value;
    });

    // For each
    for (let i = 0; i < pixels.data.length; i = i + 4) {
      // Figure out what the (r,g,b,a) items are.
      const red = pixels.data[i + 0];
      const green = pixels.data[i + 1];
      const blue = pixels.data[i + 2];
      const alpha = pixels.data[i + 3];

      // If the pixel data for each channel is in-between the min and max values.
      if (
        red >= levels.rmin &&
        green >= levels.gmin &&
        blue >= levels.bmin &&
        red <= levels.rmax &&
        green <= levels.gmax &&
        blue <= levels.bmax
      ) {
        // turn the alpha for that pixel (i+3) to 0.
        pixels.data[i + 3] = 0;
      }
    }

    // Return the manipulated pixel values.
    return pixels;
  }
  // /FILTER FUNCTIONS

  // Initialize the video.
  getVideo();

  // If the video is allowed to play, paintToCanvas()
  video.addEventListener('canplay', paintToCanvas);

  // When <button> is clicked, takePhoto().
  photoCTA.addEventListener('click', takePhoto);

  // Filter Events
  greenScreen.addEventListener('click', paintToCanvas);
  redShift.addEventListener('click', paintToCanvas);
  rgbShift.addEventListener('click', paintToCanvas);
  // ghosting.addEventListener('click', paintToCanvas);

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
            <h1>Webcam Fun</h1>

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
                  <p>In this lesson I stream a users' webcam and output that video feed to the browser, I then copy the pixel
                    data from the video feed into a &lt;canvas&gt; element. From there I can run various filter functions that
                    manipulate the pixel data to create video effects. I also allow the user to take a photo of the
                    &lt;canvas&gt; which adds a photograph to the page, with the option to download&nbsp;it.</p>
                  <p>First I grab all of the elements I will need, including: &lt;video&gt;, &lt;canvas&gt;, Canvas context
                    'ctx', '.strip', &lt;audio&gt;, the photo&nbsp;&lt;button&gt;.</p>
                  <p>I <strong>listen</strong> for the following&nbsp;events:</p>
                  <ul>
                    <li>
                      <strong>&lt;video&gt;</strong>
                      <ul>
                        <li>'canplay', paintToCanvas()</li>
                      </ul>
                    </li>
                    <li>
                      <strong>&lt;button&gt;</strong>
                      <ul>
                        <li>'click', takePhoto()</li>
                      </ul>
                    </li>
                  </ul>
                  <p>I also initialize a function&nbsp;getVideo().</p>
                  <p>In <strong>getVideo()</strong>&nbsp;- Get the users' webcam feed
                    (navigator.mediaDevices.getUserMedia({&nbsp;video:&nbsp;true, audio:&nbsp;false&nbsp;}) When it receives
                    the promise .then() set the 'video.srcObject' to the feed, and .play() the&nbsp;&lt;video&gt;.</p>
                  <p>In <strong>paintToCanvas()</strong>&nbsp;- Set the 'width' and 'height' of the &lt;canvas&gt; element
                    equal to the resolution of the video stream (width&nbsp;=&nbsp;video.videoWidth).</p>
                  <p>Next at a setInterval(()&nbsp;=> {},&nbsp;16), draw an image to the 'ctx' using the video as the data,
                    painting to the 'width' and 'height' (ctx.drawImage(video, 0,&nbsp;0,&nbsp;width,&nbsp;height)). Then get
                    an array of 'pixels' data from the 'ctx' (ctx.getImageData(0, 0,&nbsp;width,&nbsp;height)).</p>
                  <p>With the 'pixels' data, It can be run through any type of filter that will manipulate that data, and put
                    the data back into the array. For example, redEffect(pixels) shifts the values in 'pixels' so red becomes
                    more prominent. When it is returned, paintToCanvas() will put 'pixels' back into the 'ctx'
                    (ctx.putImageData(pixels, 0,&nbsp;0).</p>
                  <p>In <strong>takePhoto()</strong>&nbsp;- Set the &lt;audio&gt; 'currentTime' to 0 to reset the
                    &lt;audio&gt; if it is currently playing. Then .play() the &lt;audio&gt;. Next create a variable 'data'
                    that uses 'toDataURL('image/jpeg')' and a variable 'link' that creates an &lt;a&gt; element. Set the
                    'link' to equal the&nbsp;'data'</p>
                  <p>On the link also 'setAttribute' to ensure the link downloads the image, with a specific name. Then set
                    the .innerHTML to an &lt;img&gt; with a 'src="${data}". This creates both the image thumbnail, and the
                    download link for that&nbsp;image.</p>
                  <p>Finally, insert the image at the beginning of the 'strip' buy using .insertBefore
                    (strip.insertBefore(link, strip.firstChild)).</p>

                  {/* <!-- CodePen --> */}
                  <p class="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="pXKGrj"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 19 - Webcam Fun">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/pXKGrj/">
                        JavaScript30 - 19 - Webcam Fun</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 19 | Webcam Fun --> */}
      <div id="javascript30-19" class="section">
        <div class="row">
          <div class="small-12 column">
            <div id="photobooth">
              <div class="row">
                <div class="small-12 large-6 columns">
                  <canvas id="photo"></canvas>
                  <video id="player"></video>
                </div>

                <div class="controls small-12 large-6 columns">
                  <h2 class="h4">Controls:</h2>
                  <ul class="accordion" data-accordion data-allow-all-closed="true">
                    <li class="accordion-item" data-accordion-item="">
                      {/* <!-- Title --> */}
                      <a href="#" class="accordion-title" aria-controls="green-screen" role="tab" aria-expanded="false" aria-selected="false">
                        <h3 class="h5">Green Screen Colour Knockout</h3>
                      </a>

                      <div class="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby="green-screen"
                        aria-hidden="true" id="green-screen" style="display: none;">
                        {/* <!-- Content --> */}
                        <div class="row rgb">
                          <div class="small-12 columns">
                            <label for="greenScreen">Knockout Colour</label>
                            <input id="greenScreen" type="radio" name="filterInput" value="greenScreen" />
                          </div>

                          <div class="small-6 medium-4 columns">
                            <label for="rmin">Red Min:</label>
                            <input id="rmin" type="range" min="0" max="255" name="rmin" />
                            <label for="rmax">Red Max:</label>
                            <input id="rmax" type="range" min="0" max="255" name="rmax" />
                          </div>

                          <div class="small-6 medium-4 columns">
                            <label for="gmin">Green Min:</label>
                            <input id="gmin" type="range" min="0" max="255" name="gmin" />
                            <label for="gmax">Green Max:</label>
                            <input id="gmax" type="range" min="0" max="255" name="gmax" />
                          </div>

                          <div class="small-6 medium-4 columns end">
                            <label for="bmin">Blue Min:</label>
                            <input id="bmin" type="range" min="0" max="255" name="bmin" />
                            <label for="bmax">Blue Max:</label>
                            <input id="bmax" type="range" min="0" max="255" name="bmax" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="accordion-item" data-accordion-item="">
                      {/* <!-- Title --> */}
                      <a href="#" class="accordion-title" aria-controls="filters" role="tab" aria-expanded="false" aria-selected="false">
                        <h3 class="h5">Filters</h3>
                      </a>

                      <div class="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby="filters"
                        aria-hidden="true" id="filters" style="display: none;">
                        {/* <!-- Content --> */}
                        <div class="row">
                          <div class="small-12 medium-6 columns">
                            <label for="redShift">Red Shift</label>
                            <input id="redShift" type="radio" name="filterInput" value="redShift" />
                          </div>
                          <div class="small-12 medium-6 columns">
                            <label for="rgbShift">RGB Split</label>
                            <input id="rgbShift" type="radio" name="filterInput" value="rgbShift" />
                          </div>
                          {/* <!-- <div class="small-12 medium-4 columns">
                              <label for="ghosting">Ghosting</label>
                              <input id="ghosting" type="checkbox" name="ghosting">
                          </div> --> */}
                        </div>
                      </div>
                    </li>
                  </ul>

                  <button id="photoCTA">Take Photo</button>
                </div>
              </div>

              <div class="row">
                <div class="small-12 columns">
                  <div class="strip"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <audio class="snap" src="{{root}}assets/sounds/javascript30/19-webcam-fun/snap.mp3" hidden></audio>
    </React.Fragment>
  );
};

export default webcamFun;