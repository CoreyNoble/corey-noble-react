import React from 'react';
import classes from './SpeechSynthesis.module.scss';

const speechSynthesis = props => {
  // Create a new SpeechSynthesisUtterance().
  const msg = new SpeechSynthesisUtterance();
  // Initialize an array of available voices.
  let voices = [];
  // <select> of all of the voices.
  const voicesDropdown = document.querySelector('[name="voice"]');
  // All <input> elements.
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  // Speak <button>.
  const speakButton = document.querySelector('#speak');
  // Stop <button>.
  const stopButton = document.querySelector('#stop');
  // Make the SpeechSynthesisUtterance.text attribute equal to the copy inside of <textarea>.
  msg.text = document.querySelector('[name="text"]').value;

  // Creates the list of voice <options>.
  function populateVoices() {
    // Get all of the voices that are available on speechSynthesis (this).
    voices = this.getVoices();
    // Populate a list of <options> for each voice.
    // Set the innerHTML of voicesDropdown <select>.
    voicesDropdown.innerHTML = voices
      // Only show the english 'en' voices.
      .filter(voice => voice.lang.includes('en'))
      // Map to create an array item for each voice <option>.
      .map(
        voice =>
          `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
      )
      // Convert to one string.
      .join('');
  }

  // Change the voice to the newly selected voice <option>.
  function setVoice() {
    // Set the new voice by looping over every voice in the voices array. .find() the voice where the voice.name is the same as the <option> value.
    msg.voice = voices.find(voice => voice.name === this.value);
    // Toggle the speech.
    toggle();
  }

  // Toggle the speech.
  // startOver = true: By default we start the speech over again, but can choose to just stop the speech if we pass startOver = false.
  function toggle(startOver = true) {
    // Cancel any current speech.
    speechSynthesis.cancel();
    // If we want to startOver.
    if (startOver) {
      // Restart the speech.
      speechSynthesis.speak(msg);
    }
  }

  // Set the Options
  function setOption() {
    // The name and value of the <option>
    console.log(this.name, this.value);
    // For the message attribute that matches the <option> name, set its' value to match the value that was set inside of that <option>.
    msg[this.name] = this.value;
    // Toggle the speech.
    toggle();
  }

  // When the 'voiceschanged' event fires, populateVoices(). This is needed before populating the voices in-order to give the browser enough time to have this event ready.
  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  // When the <select> changes, setVoice().
  voicesDropdown.addEventListener('change', setVoice);
  // On each <option>, when it changes, setOption().
  options.forEach(option => option.addEventListener('change', setOption));
  // On 'Speak' <button> click, toggle() the speech.
  speakButton.addEventListener('click', toggle);
  // On 'Stop' <button> click, toggle() the speech, but don't restart the speech (false).
  // Passing an attribute into toggle() should happen every time the button is clicked, not just on page load. That's why we're using an arrow function, to pass 'false' every time the event is fired.
  stopButton.addEventListener('click', () => toggle(false));

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
            <h1>Speech Synthesis</h1>

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
                  <p>In this lesson I convert text to a new speech synthesis utterance from the&nbsp;browser.</p>
                  <p>First I create a new speech synthesis utterance (const&nbsp;msg&nbsp;=
                    new&nbsp;SpeechSynthesisUtterance()). I get the following elements: &lt;select&gt;, 'speak'
                    &lt;button&gt;, 'stop' &lt;button&gt; All &lt;input&gt; elements. I initialize an empty 'voices[]' array,
                    as well as set what 'msg' text will be spoken by grabbing the [name="text"]&nbsp;element.</p>
                  <p>I <strong>listen</strong> for the following&nbsp;events:</p>
                  <ul>
                    <li>
                      <strong>speechSynthesis</strong>
                      <ul>
                        <li>'voiceschanged', populateVoices()</li>
                        <li>This event is needed before populating the voices in-order to give the browser enough time to have
                          the required event&nbsp;ready.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>&lt;select&gt;</strong>
                      <ul>
                        <li>'change', setVoice()</li>
                      </ul>
                    </li>
                    <li>
                      <strong>&lt;option&gt;</strong>
                      <ul>
                        <li>'change', setOption()</li>
                      </ul>
                    </li>
                    <li>
                      <strong>speakButton</strong>
                      <ul>
                        <li>toggle</li>
                        <li>This will start the speech&nbsp;synthesis.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>stopButton</strong>
                      <ul>
                        <li>'click', () => toggle(false)</li>
                        <li>This will stop the speech&nbsp;synthesis.</li>
                      </ul>
                    </li>
                  </ul>
                  <p>In <strong>populateVoices()</strong>&nbsp;- First to get the 'voices' use .getVoices() from 'this'
                    (speechSynthesis). Then set the 'innerHTML' of &lt;select&gt; to the list of 'voices'. Next .filter() over
                    each voice to only include voices with a language of 'en'. Then .map() over each voice to add
                    &lt;option&gt; HTML to each entry. Lastly .join('') to convert the array into one&nbsp;string.</p>
                  <p>In <strong>setVoice()</strong>&nbsp;- First set 'msg.voice' to the 'voice' that matches the
                    &lt;select&gt; item (msg.voice&nbsp;= voices.fint(voice&nbsp;=> voice.name&nbsp;=== this.value)). Then
                    run&nbsp;toggle().</p>
                  <p>In <strong>toggle(true/false)</strong>&nbsp;- First stop any currently playing speech
                    (speechSynthesis.cancel();). Then check if either true or false was passed into the function. If false, do
                    nothing more. If true (default), restart the speech synthesis (speechSynthesis.speak(msg);).</p>
                  <p>In <strong>setOption()</strong>&nbsp;- This sets the 'msg' voice to the &lt;option&gt; that was selected.
                    Then run&nbsp;toggle().</p>

                  {/* <!-- CodePen --> */}
                  <p class="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="PraVOL"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 23 - Speech Synthesis">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/PraVOL/">
                        JavaScript30 - 23 - Speech Synthesis</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 23 | Speech Synthesis --> */}
      <div id="javascript30-23" class="section">
        <div class="row">
          <div class="small-12 column">
            <div class="voiceinator">
              <h2>The Voiceinator 5000</h2>

              <select name="voice" id="voices">
                <option value="">Select A Voice</option>
              </select>

              <div class="row">
                <div class="small-6 columns">
                  <label for="rate">Rate:</label>
                  <input id="rate" name="rate" type="range" min="0" max="3" value="1" step="0.1" />
                </div>

                <div class="small-6 columns">
                  <label for="pitch">Pitch:</label>
                  <input id="pitch" name="pitch" type="range" min="0" max="2" step="0.1" />
                </div>
              </div>

              <textarea name="text">Hello! I love JavaScript 👍</textarea>
              <button id="stop">Stop!</button>
              <button id="speak">Speak</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default speechSynthesis;