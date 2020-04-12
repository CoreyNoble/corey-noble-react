import React from 'react';
import classes from './speechDetection.module.scss';

const speechDetection = props => {
  // 'SpeechRecognition' is a global variable that lives in the browser. It lives on top of 'window'.
  // 'webkitSpeechRecognition' is the global variable for Chrome. Below we're normalizing both names to use the same naming convention.
  window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  // Create a new instance of SpeechRecognition().
  const recognition = new SpeechRecognition();
  // See what you are saying, as you are saying it. Without this, the text would only show when the line is finished.
  recognition.interimResults = true;

  // Create a new <p> element on the document.
  let p = document.createElement('p');
  // Select the parent div that we want to inject the words into.
  const words = document.querySelector('.words');
  // Append the <p> as a new child of the parent div.
  words.appendChild(p);

  // Look for the 'result' event on 'SpeechRecognition'. Pass in the event data (e).
  recognition.addEventListener('result', e => {
  // e.results returns a Node List of data that is received from the 'SpeechRecognition' event. We're converting it to an Array (Array.from()) so we can .map() over it.
  const transcript = Array.from(e.results)
    // We're looking for the 'transcript' but it is nested inside of [0: SpeechRecognitionResult] So we're mapping over that nested array.
    .map(result => result[0])
    // Find the 'transcript' data.
    .map(result => result.transcript)
    // Convert the array of data into one string.
    .join('');

  // Set the text content of the new <p> to equal the transcript result.
  p.textContent = transcript;

  // Is the result final?
  if (e.results[0].isFinal) {
    // Overwrite p variable, Create a new <p> element.
    p = document.createElement(p);
    // Append the <p> as a new child of the parent div.
    words.appendChild(p);
  }

  // check to see if the text includes key phrases
  if (transcript.includes('unicorn')) {
    console.log('UNICORN!!');
  }
  });

  // When the SpeechRecognition ends. Start listening again.
  recognition.addEventListener('end', recognition.start);

  // Start SpeechRecognition.
  recognition.start();

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
            <h1>Speech Detection</h1>

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
                  <p>In this lesson I detect speech in the browser and output the resulting string to the&nbsp;DOM.</p>
                  <p>First I initialize the speech recognition in the browser(window.SpeechRecognition&nbsp;=
                    window.SpeechRecognition || window.webkitspeechRecognition). Then create a new instance of speech
                    recognition (new SpeechRecognition()) and start it (recognition.start()).</p>
                  <p>I then create a &lt;p&gt; element and .appendChild(p) to '.words'. This outputs the text spoken to DOM
                    element the&nbsp;browser.</p>
                  <p>I <strong>listen</strong> for a 'result(e)' on 'recognition' which is where I transcribe the result into
                    text and output that string to the&nbsp;browser.</p>
                  <p>In <strong>result(e)</strong>&nbsp;- Create a 'transcript' array from 'e.results'. Then .map() over that
                    array to get inside of the first node that is returned (result => (.map()result[0])). Next .map() over the
                    'result.transcript' key and .join('') the array into one string. Then set
                    'p.textContent&nbsp;=&nbsp;transcript'.</p>
                  <p>Next check if the result is finished (e.results[0].isFinal). If so, create a new &lt;p&gt; element and
                    append it to&nbsp;'.words'.</p>
                  <p>It's also possible to check if the 'transcript' contains key phrases using .includes()
                    (transcript.includes('unicorn')).</p>
                  <p>I <strong>listen</strong> to the 'end' event on 'recognition' in-order to re-start it every time the line
                    ends ('end',&nbsp;recognition.start).</p>

                  {/* <!-- CodePen --> */}
                  <p class="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="YovBxj"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 20 - Speech Detection">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/YovBxj/">
                        JavaScript30 - 20 - Speech Detection</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 20 | Speech Detection --> */}
      <div id="javascript30-20" class="section">
        <div class="row">
          <div class="small-12 column">
            <div class="words" contenteditable></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default speechDetection;