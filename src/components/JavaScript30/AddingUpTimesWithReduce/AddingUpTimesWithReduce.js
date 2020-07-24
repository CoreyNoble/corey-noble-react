import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import classes from './AddingUpTimesWithReduce.module.scss';

const addingUpTimesWithReduce = props => {
  // const total = document.querySelector('.total-time');

  // // Select all nodes with a data-time attribute. Returns a 'Node List' so we're converting it into an array so we can use .map().
  // const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
  // const seconds = timeNodes
  //   // will get data-time string '0:00'.
  //   .map(node => node.dataset.time)

  //   .map(timeCode => {
  //     // An array with mins, secs for each entry. Split string at ':' to separate mins and secs. .map(parseFloat) to map the strings to an array of numbers.
  //     const [mins, secs] = timeCode.split(':').map(parseFloat);
  //     // Return the timecode.
  //     return mins * 60 + secs;
  //   })
  //   // .reduce(): Takes in an array, and return what you want.
  //   // Take all of the numbers and reduce them down to one big number.
  //   // Takes in each videos' seconds and adds them to the total.
  //   .reduce((total, vidSeconds) => total + vidSeconds);

  // let secondsLeft = seconds;
  // // Calculate hours remaining (seconds / 3600) to a round number (Math.floor()).
  // const hours = Math.floor(seconds / 3600);
  // // Get the remainder (%) after we calculate hours (3600).
  // secondsLeft = secondsLeft % 3600;

  // // Calculate minutes remaining (secondsLeft / 60) to a round number (Math.floor()).
  // const mins = Math.floor(secondsLeft / 60);
  // // Get the remainder (%) after we calculate minutes (60).
  // secondsLeft = secondsLeft % 60;

  // // Output: Hours, Minutes, Seconds
  // console.log(hours, mins, secondsLeft);

  // total.innerHTML = hours + ':' + mins + ':' + secondsLeft;

  return (
    <React.Fragment>
      {/* Introduction */}
      <Section className="js30-intro" background="white">
        <Row>
          <Column small={12}>
            {/* Back CTA */}
            <p className="back-cta"><small><strong><a href="/portfolio/development/javascript30" title="Return to the JavaScript30 landing page.">&lt;&nbsp;Back to JavaScript&nbsp;30</a></strong></small></p>

            {/* Title */}
            <h1>Adding Up Times with Reduce</h1>
          </Column>
        </Row>
      </Section>

      {/* JavaScript30 | 18 | Adding Up Times with Reduce */}
      <Section id="javascript30-18">
        <Row>
          <Column small={12}>
            <h2 className="total">Total&nbsp;Time: <span className="total-time"></span></h2>
            <ul className="videos">
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
          </Column>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default addingUpTimesWithReduce;