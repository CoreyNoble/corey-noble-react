import React, { Component } from 'react';
import classes from './JavaScript30.module.scss';

import DrumKit from '../../assets/img/showcase/javascript30/1-drum-kit.jpg';
import Clock from '../../assets/img/showcase/javascript30/2-clock.jpg';
import UpdateCSSVariables from '../../assets/img/showcase/javascript30/3-update-css-variables.gif';
import ArrayCardio1 from '../../assets/img/showcase/javascript30/4-array-cardio-1.jpg';
import FlexPanelGallery from '../../assets/img/showcase/javascript30/5-flex-panel-gallery.jpg';
import TypeAhead from '../../assets/img/showcase/javascript30/6-type-ahead.jpg';
import ArrayCardio2 from '../../assets/img/showcase/javascript30/7-array-cardio-2.jpg';
import FunWithHTML5Canvas from '../../assets/img/showcase/javascript30/8-fun-with-html5-canvas.gif';
import DevToolsDomination from '../../assets/img/showcase/javascript30/9-dev-tools-domination.jpg';
import HoldShiftAndCheckCheckboxes from '../../assets/img/showcase/javascript30/10-hold-shift-and-check-checkboxes.jpg';
import CustomVideoPlayer from '../../assets/img/showcase/javascript30/11-custom-video-player.jpg';
import KeySequenceDetection from '../../assets/img/showcase/javascript30/12-key-sequence-detection.jpg';
import SlideInOnScroll from '../../assets/img/showcase/javascript30/13-slide-in-on-scroll.gif';
import JavascriptReferencesVsCopying from '../../assets/img/showcase/javascript30/14-javascript-references-vs-copying.jpg';
import LocalStorage from '../../assets/img/showcase/javascript30/15-localstorage.jpg';
import MouseMoveShadow from '../../assets/img/showcase/javascript30/16-mouse-move-shadow.jpg';
import SortWithoutArticles from '../../assets/img/showcase/javascript30/17-sort-without-articles.jpg';
import AddingUpTimesWithReduce from '../../assets/img/showcase/javascript30/18-adding-up-times-with-reduce.jpg';
import WebcamFun from '../../assets/img/showcase/javascript30/19-webcam-fun.jpg';
import SpeechDetection from '../../assets/img/showcase/javascript30/20-speech-detection.jpg';
import Geolocation from '../../assets/img/showcase/javascript30/21-geolocation.jpg';
import FollowAlongLinkHighlighter from '../../assets/img/showcase/javascript30/22-follow-along-link-highlighter.gif';
import SpeechSynthesis from '../../assets/img/showcase/javascript30/23-speech-synthesis.jpg';
import StickyNav from '../../assets/img/showcase/javascript30/24-sticky-nav.jpg';
import EventCapturePropogationBubblingAndOnce from '../../assets/img/showcase/javascript30/25-event-capture-propogation-bubbling-and-once.jpg';
import StripeFollowAlongNav from '../../assets/img/showcase/javascript30/26-stripe-follow-along-nav.gif';
import ClickAndDrag from '../../assets/img/showcase/javascript30/27-click-and-drag.gif';
import VideoSpeedController from '../../assets/img/showcase/javascript30/28-video-speed-controller.jpg';
import CountdownTimer from '../../assets/img/showcase/javascript30/29-countdown-timer.jpg';
import WhackAMole from '../../assets/img/showcase/javascript30/30-whack-a-mole.jpg';

class javaScript30 extends Component {
  state = {
    javaScript30: [
      { heading: 'Drum Kit',
        image: DrumKit,
        url: '/portfolio/development/javascript30/1-drum-kit',
        linkTitle: 'Drum Kit. JavaScript30.',
        class: ''
      },
      { title: 'Clock',
        image: Clock,
        url: '/portfolio/development/javascript30/2-clock',
        linkTitle: 'Clock. JavaScript30.',
        class: ''
      },
      { title: 'Update CSS Variables',
        image: UpdateCSSVariables,
        url: '/portfolio/development/javascript30/3-update-css-variables',
        linkTitle: 'Update CSS Variables. JavaScript30.',
        class: ''
      },
      { title: 'Array Cardio Day 1',
        image: ArrayCardio1,
        url: '/portfolio/development/javascript30/4-array-cardio-day-1',
        linkTitle: 'Array Cardio Day 1. JavaScript30.',
        class: ''
      },
      { title: 'Flex Panel Gallery',
        image: FlexPanelGallery,
        url: '/portfolio/development/javascript30/5-flex-panel-gallery',
        linkTitle: 'Flex Panel Gallery. JavaScript30.',
        class: ''
      },
      { title: 'Type Ahead',
        image: TypeAhead,
        url: '/portfolio/development/javascript30/6-type-ahead',
        linkTitle: 'Type Ahead. JavaScript30.',
        class: ''
      },
      { title: 'Array Cardio Day 2',
        image: ArrayCardio2,
        url: '/portfolio/development/javascript30/7-array-cardio-day-2',
        linkTitle: 'Array Cardio Day 2. JavaScript30.',
        class: ''
      },
      { title: 'Fun with HTML5 Canvas',
        image: FunWithHTML5Canvas,
        url: '/portfolio/development/javascript30/8-fun-with-html5-canvas',
        linkTitle: 'Fun with HTML5 Canvas. JavaScript30.',
        class: ''
      },
      { title: 'Dev Tools Domination',
        image: DevToolsDomination,
        url: '/portfolio/development/javascript30/9-dev-tools-domination',
        linkTitle: 'Dev Tools Domination. JavaScript30.',
        class: ''
      },
      { title: 'Hold Shift and Check Checkboxes',
        image: HoldShiftAndCheckCheckboxes,
        url: '/portfolio/development/javascript30/10-hold-shift-and-check-checkboxes',
        linkTitle: 'Hold Shift and Check Checkboxes. JavaScript30.',
        class: ''
      },
      { title: 'Custom Video Player',
        image: CustomVideoPlayer,
        url: '/portfolio/development/javascript30/11-custom-video-player',
        linkTitle: 'Custom Video Player. JavaScript30.',
        class: ''
      },
      { title: 'Key Sequence Detection',
        image: KeySequenceDetection,
        url: '/portfolio/development/javascript30/12-key-sequence-detection',
        linkTitle: 'Key Sequence Detection. JavaScript30.',
        class: ''
      },
      { title: 'Slide in on Scroll',
        image: SlideInOnScroll,
        url: '/portfolio/development/javascript30/13-slide-in-on-scroll',
        linkTitle: 'Slide in on Scroll. JavaScript30.',
        class: ''
      },
      { title: 'JavaScript References vs. Copying',
        image: JavascriptReferencesVsCopying,
        url: '/portfolio/development/javascript30/14-javaScript-references-vs-copying',
        linkTitle: 'JavaScript References vs. Copying. JavaScript30.',
        class: ''
      },
      { title: 'LocalStorage',
        image: LocalStorage,
        url: '/portfolio/development/javascript30/15-localstorage',
        linkTitle: 'LocalStorage. JavaScript30.',
        class: ''
      },
      { title: 'Mouse Move Shadow',
        image: MouseMoveShadow,
        url: '/portfolio/development/javascript30/16-mouse-move-shadow',
        linkTitle: 'Mouse Move Shadow. JavaScript30.',
        class: ''
      },
      { title: 'Sort Without Articles',
        image: SortWithoutArticles,
        url: '/portfolio/development/javascript30/17-sort-without-articles',
        linkTitle: 'Sort Without Articles. JavaScript30.',
        class: ''
      },
      { title: 'Adding Up Times with Reduce',
        image: AddingUpTimesWithReduce,
        url: '/portfolio/development/javascript30/18-adding-up-times-with-reduce',
        linkTitle: 'Adding Up Times with Reduce. JavaScript30.',
        class: ''
      },
      { title: 'Webcam Fun',
        image: WebcamFun,
        url: '/portfolio/development/javascript30/19-webcam-fun',
        linkTitle: 'Webcam Fun. JavaScript30.',
        class: ''
      },
      { title: 'Speech Detection',
        image: SpeechDetection,
        url: '/portfolio/development/javascript30/20-speech-detection',
        linkTitle: 'Speech Detection. JavaScript30.',
        class: ''
      },
      { title: 'Geolocation',
        image: Geolocation,
        url: '/portfolio/development/javascript30/21-geolocation',
        linkTitle: 'Geolocation. JavaScript30.',
        class: ''
      },
      { title: 'Follow Along Link Highlighter',
        image: FollowAlongLinkHighlighter,
        url: '/portfolio/development/javascript30/22-follow-along-link-highlighter',
        linkTitle: 'Follow Along Link Highlighter. JavaScript30.',
        class: ''
      },
      { title: 'Speech Synthesis',
        image: SpeechSynthesis,
        url: '/portfolio/development/javascript30/23-speech-synthesis',
        linkTitle: 'Speech Synthesis. JavaScript30.',
        class: ''
      },
      { title: 'Sticky Nav',
        image: StickyNav,
        url: '/portfolio/development/javascript30/24-sticky-nav',
        linkTitle: 'Sticky Nav. JavaScript30.',
        class: ''
      },
      { title: 'Event Capture, Propagation, Bubbling and Once',
        image: EventCapturePropogationBubblingAndOnce,
        url: '/portfolio/development/javascript30/25-event-capture-propagation-bubbling-and-once',
        linkTitle: 'Event Capture, Propagation, Bubbling and Once. JavaScript30.',
        class: ''
      },
      { title: 'Stripe Follow Along Nav',
        image: StripeFollowAlongNav,
        url: '/portfolio/development/javascript30/26-stripe-follow-along-nav',
        linkTitle: 'Stripe Follow Along Nav. JavaScript30.',
        class: ''
      },
      { title: 'Click and Drag',
        image: ClickAndDrag,
        url: '/portfolio/development/javascript30/27-click-and-drag',
        linkTitle: 'Click and Drag. JavaScript30.',
        class: ''
      },
      { title: 'Video Speed Controller',
        image: VideoSpeedController,
        url: '/portfolio/development/javascript30/28-video-speed-controller',
        linkTitle: 'Video Speed Controller. JavaScript30.',
        class: ''
      },
      { title: 'Countdown Timer',
        image: CountdownTimer,
        url: '/portfolio/development/javascript30/29-countdown-timer',
        linkTitle: 'Countdown Timer. JavaScript30.',
        class: ''
      },
      { title: 'Whack A Mole',
        image: WhackAMole,
        url: '/portfolio/development/javascript30/30-whack-a-mole',
        linkTitle: 'Whack A Mole. JavaScript30.',
        class: 'end'
      }
    ]
  };

  render() {
    return (
      <div id="javascript30" className="section">
        <div className="row showcase-2" data-equalizer>
          {this.state.javaScript30.map(project => {
            return (
              <div className="small-12 medium-6 large-4 columns end" data-aos="fade-up" data-aos-delay="100" data-equalizer-watch="project">
                <a href={`%PUBLIC_URL%${project.url}`} title={project.linkTitle}>
                  <div className="showcase-example">
                    <h3 className="h5 white">{project.title}</h3>
                    <img src={project.image} alt="" role="presentation" />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default javaScript30;