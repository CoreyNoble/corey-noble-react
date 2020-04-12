import React from 'react';
import classes from './AddingUpTimesWithReduce.module.scss';

const addingUpTimesWithReduce = props => {
  const total = document.querySelector('.total-time');

  // Select all nodes with a data-time attribute. Returns a 'Node List' so we're converting it into an array so we can use .map().
  const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
  const seconds = timeNodes
    // will get data-time string '0:00'.
    .map(node => node.dataset.time)

    .map(timeCode => {
      // An array with mins, secs for each entry. Split string at ':' to separate mins and secs. .map(parseFloat) to map the strings to an array of numbers.
      const [mins, secs] = timeCode.split(':').map(parseFloat);
      // Return the timecode.
      return mins * 60 + secs;
    })
    // .reduce(): Takes in an array, and return what you want.
    // Take all of the numbers and reduce them down to one big number.
    // Takes in each videos' seconds and adds them to the total.
    .reduce((total, vidSeconds) => total + vidSeconds);

  let secondsLeft = seconds;
  // Calculate hours remaining (seconds / 3600) to a round number (Math.floor()).
  const hours = Math.floor(seconds / 3600);
  // Get the remainder (%) after we calculate hours (3600).
  secondsLeft = secondsLeft % 3600;

  // Calculate minutes remaining (secondsLeft / 60) to a round number (Math.floor()).
  const mins = Math.floor(secondsLeft / 60);
  // Get the remainder (%) after we calculate minutes (60).
  secondsLeft = secondsLeft % 60;

  // Output: Hours, Minutes, Seconds
  console.log(hours, mins, secondsLeft);

  total.innerHTML = hours + ':' + mins + ':' + secondsLeft;

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
            <h1>Adding Up Times with Reduce</h1>

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
                  <p>In this lesson I am taking an array of elements with a data attribute of [data-time]. With that array I
                    calculate the 'total' amount of time in 'hours', 'minutes' and&nbsp;'secondsLeft'.</p>
                  <p>First to get the total 'seconds', .map() over each node to get the 'dataset.time'. Then .map() over
                    each&nbsp;'timeCode'.</p>
                  <p>.split(':') the string into a sub array of 'mins' and 'secs' (const&nbsp;[mins,&nbsp;secs]&nbsp;=
                    timeCode.split(':').map(parseFloat)). Then return the total amount of 'seconds' for that item by counting
                    all minutes and seconds as 'seconds' ((mins&nbsp;*&nbsp;60) +&nbsp;secs).</p>
                  <p>Next .reduce() the array to get the total number of 'seconds' by adding up each items' 'seconds'
                    (.reduce((total,&nbsp;vidSeconds)&nbsp;=> total&nbsp;+&nbsp;vidSeconds). Then calculate 'hours', 'mins'
                    and&nbsp;'secondsLeft'.</p>
                  <p>let secondsLeft =&nbsp;seconds;<br />
                    const hours&nbsp;= Math.floor(seconds /&nbsp;3600);<br />
                    secondsLeft&nbsp;= secondsLeft %&nbsp;3600;<br />
                    const mins&nbsp;= Math.floor(secondsLeft /&nbsp;60);<br />
                    secondsLeft&nbsp;= secondsLef %&nbsp;60;</p>
                  <p>Finally output the values to the 'innerHTML' of&nbsp;'total'.</p>

                  {/* <!-- CodePen --> */}
                  <p class="codepen" data-height="330" data-theme-id="dark" data-default-tab="js" data-user="CoreyNoble"
                    data-slug-hash="qzKgjV"
                    style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
                    data-pen-title="JavaScript30 - 18 - Adding Up Times With Reduce">
                    <span>See the Pen <a href="https://codepen.io/CoreyNoble/pen/qzKgjV/">
                        JavaScript30 - 18 - Adding Up Times With Reduce</a> by Corey Noble (<a
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

      {/* <!-- JavaScript30 | 18 | Adding Up Times with Reduce --> */}
      <div id="javascript30-18" class="section">
        <div class="row">
          <div class="small-12 column">
            <h2 class="total">Total&nbsp;Time: <span class="total-time"></span></h2>
            <ul class="videos">
              <li data-time="5:43">
                Video&nbsp;1: <strong>5:43</strong>
              </li>
              <li data-time="2:33">
                Video&nbsp;2: <strong>2:33</strong>
              </li>
              <li data-time="3:45">
                Video&nbsp;3: <strong>3:45</strong>
              </li>
              <li data-time="0:47">
                Video&nbsp;4: <strong>0:47</strong>
              </li>
              <li data-time="5:21">
                Video&nbsp;5: <strong>5:21</strong>
              </li>
              <li data-time="6:56">
                Video&nbsp;6: <strong>6:56</strong>
              </li>
              <li data-time="3:46">
                Video&nbsp;7: <strong>3:46</strong>
              </li>
              <li data-time="5:25">
                Video&nbsp;8: <strong>5:25</strong>
              </li>
              <li data-time="3:14">
                Video&nbsp;9: <strong>3:14</strong>
              </li>
              <li data-time="3:31">
                Video&nbsp;10: <strong>3:31</strong>
              </li>
              <li data-time="5:59">
                Video&nbsp;11: <strong>5:59</strong>
              </li>
              <li data-time="3:07">
                Video&nbsp;12: <strong>3:07</strong>
              </li>
              <li data-time="11:29">
                Video&nbsp;13: <strong>11:29</strong>
              </li>
              <li data-time="8:57">
                Video&nbsp;14: <strong>8:57</strong>
              </li>
              <li data-time="5:49">
                Video&nbsp;15: <strong>5:49</strong>
              </li>
              <li data-time="5:52">
                Video&nbsp;16: <strong>5:52</strong>
              </li>
              <li data-time="5:50">
                Video&nbsp;17: <strong>5:50</strong>
              </li>
              <li data-time="9:13">
                Video&nbsp;18: <strong>9:13</strong>
              </li>
              <li data-time="11:51">
                Video&nbsp;19: <strong>11:51</strong>
              </li>
              <li data-time="7:58">
                Video&nbsp;20: <strong>7:58</strong>
              </li>
              <li data-time="4:40">
                Video&nbsp;21: <strong>4:40</strong>
              </li>
              <li data-time="4:45">
                Video&nbsp;22: <strong>4:45</strong>
              </li>
              <li data-time="6:46">
                Video&nbsp;23: <strong>6:46</strong>
              </li>
              <li data-time="7:24">
                Video&nbsp;24: <strong>7:24</strong>
              </li>
              <li data-time="7:12">
                Video&nbsp;25: <strong>7:12</strong>
              </li>
              <li data-time="5:23">
                Video&nbsp;26: <strong>5:23</strong>
              </li>
              <li data-time="3:34">
                Video&nbsp;27: <strong>3:34</strong>
              </li>
              <li data-time="8:22">
                Video&nbsp;28: <strong>8:22</strong>
              </li>
              <li data-time="5:17">
                Video&nbsp;29: <strong>5:17</strong>
              </li>
              <li data-time="3:10">
                Video&nbsp;30: <strong>3:10</strong>
              </li>
              <li data-time="4:43">
                Video&nbsp;31: <strong>4:43</strong>
              </li>
              <li data-time="19:43">
                Video&nbsp;32: <strong>19:43</strong>
              </li>
              <li data-time="0:47">
                Video&nbsp;33: <strong>0:47</strong>
              </li>
              <li data-time="0:47">
                Video&nbsp;34: <strong>0:47</strong>
              </li>
              <li data-time="3:14">
                Video&nbsp;35: <strong>3:14</strong>
              </li>
              <li data-time="3:59">
                Video&nbsp;36: <strong>3:59</strong>
              </li>
              <li data-time="2:43">
                Video&nbsp;37: <strong>2:43</strong>
              </li>
              <li data-time="4:17">
                Video&nbsp;38: <strong>4:17</strong>
              </li>
              <li data-time="6:56">
                Video&nbsp;39: <strong>6:56</strong>
              </li>
              <li data-time="3:05">
                Video&nbsp;40: <strong>3:05</strong>
              </li>
              <li data-time="2:06">
                Video&nbsp;41: <strong>2:06</strong>
              </li>
              <li data-time="1:59">
                Video&nbsp;42: <strong>1:59</strong>
              </li>
              <li data-time="1:49">
                Video&nbsp;43: <strong>1:49</strong>
              </li>
              <li data-time="3:36">
                Video&nbsp;44: <strong>3:36</strong>
              </li>
              <li data-time="7:10">
                Video&nbsp;45: <strong>7:10</strong>
              </li>
              <li data-time="3:44">
                Video&nbsp;46: <strong>3:44</strong>
              </li>
              <li data-time="3:44">
                Video&nbsp;47: <strong>3:44</strong>
              </li>
              <li data-time="4:36">
                Video&nbsp;48: <strong>4:36</strong>
              </li>
              <li data-time="3:16">
                Video&nbsp;49: <strong>3:16</strong>
              </li>
              <li data-time="1:10">
                Video&nbsp;50: <strong>1:10</strong>
              </li>
              <li data-time="6:10">
                Video&nbsp;51: <strong>6:10</strong>
              </li>
              <li data-time="2:14">
                Video&nbsp;52: <strong>2:14</strong>
              </li>
              <li data-time="3:44">
                Video&nbsp;53: <strong>3:44</strong>
              </li>
              <li data-time="5:05">
                Video&nbsp;54: <strong>5:05</strong>
              </li>
              <li data-time="6:03">
                Video&nbsp;55: <strong>6:03</strong>
              </li>
              <li data-time="12:39">
                Video&nbsp;56: <strong>12:39</strong>
              </li>
              <li data-time="1:56">
                Video&nbsp;57: <strong>1:56</strong>
              </li>
              <li data-time="4:04">
                Video&nbsp;58: <strong>4:04</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default addingUpTimesWithReduce;