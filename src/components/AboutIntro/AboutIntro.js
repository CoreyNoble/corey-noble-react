import React from 'react';
import classes from './AboutIntro.scss';

const aboutIntro = props => {
  return (
    <div id="about-me" className="section black">
      <div className="row introduction">
        <h2>Corey&nbsp;Noble<br />
          <em>Web&nbsp;Application&nbsp;Developer</em></h2>

        <div id="portrait-suit" className="small-12 medium-12 large-5 columns">
          <img src="{{root}}assets/img/Corey-Noble-About-Portrait.png" alt="" role="presentation" />
        </div>

        <div id="icon-container" className="icon-container small-12 medium-12 large-7 columns">
          <h3 className="h5 black text-center">The programs and technologies I use most&nbsp;often:</h3>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/react.png" alt="" role="presentation" />
            <p>React</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/javascript.png" alt="" role="presentation" />
            <p>JavaScript</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/html-5.png" alt="" role="presentation" />
            <p>HTML 5</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/css.png" alt="" role="presentation" />
            <p>CSS</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/sass.png" alt="" role="presentation" />
            <p>SCSS / SASS</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/less.png" alt="" role="presentation" />
            <p>LESS</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/git.png" alt="" role="presentation" />
            <p>Git</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/npm.png" alt="" role="presentation" />
            <p>NPM</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/foundation.png" alt="" role="presentation" />
            <p>Foundation</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/bootstrap.png" alt="" role="presentation" />
            <p>Bootstrap</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/jira.png" alt="" role="presentation" />
            <p>JIRA</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/net-mvc.png" alt="" role="presentation" />
            <p>.NET / MVC</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/sitefinity.png" alt="" role="presentation" />
            <p>Sitefinity</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/kentico.png" alt="" role="presentation" />
            <p>Kentico</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/aem.png" alt="" role="presentation" />
            <p>AEM</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/wordpress.png" alt="" role="presentation" />
            <p>WordPress</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/reddot.png" alt="" role="presentation" />
            <p>RedDot</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/sitecore.png" alt="" role="presentation" />
            <p>Sitecore</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/file-zilla.png" alt="" role="presentation" />
            <p>FTP</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/visual-studio.png" alt="" role="presentation" />
            <p>Visual Studio</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/visual-studio-code.png" alt="" role="presentation" />
            <p>VS Code</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/sublime-text.png" alt="" role="presentation" />
            <p>Sublime Text</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/photoshop.png" alt="" role="presentation" />
            <p>Photoshop</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/firefox.png" alt="" role="presentation" />
            <p>Firefox</p>
          </div>
          <div className="icon small-6 medium-3 columns">
            <img src="{{root}}assets/img/icons/google-chrome.png" alt="" role="presentation" />
            <p>Chrome</p>
          </div>
          <div className="icon small-6 medium-3 columns end">
            <img src="{{root}}assets/img/icons/safari.png" alt="" role="presentation" />
            <p>Safari</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutIntro;