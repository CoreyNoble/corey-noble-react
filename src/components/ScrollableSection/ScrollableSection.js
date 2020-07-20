import React from 'react';

import { Column } from 'react-foundation';

import classes from './ScrollableSection.module.scss';

import ReactLogo from '../../assets/img/icons/react.png';
import JavaScriptLogo from '../../assets/img/icons/javascript.png';
import HTML5Logo from '../../assets/img/icons/html5.png';
import CSSLogo from '../../assets/img/icons/css.png';
import SASSLogo from '../../assets/img/icons/sass.png';
import LESSLogo from '../../assets/img/icons/less.png';
import GITLogo from '../../assets/img/icons/git.png';
import NPMLogo from '../../assets/img/icons/npm.png';
import FoundationLogo from '../../assets/img/icons/foundation.png';
import BootstrapLogo from '../../assets/img/icons/bootstrap.png';
import JiraLogo from '../../assets/img/icons/jira.png';
import NETMVCLogo from '../../assets/img/icons/net-mvc.png';
import SitefinityLogo from '../../assets/img/icons/sitefinity.png';
import KenticoLogo from '../../assets/img/icons/kentico.png';
import AEMLogo from '../../assets/img/icons/aem.png';
import WordPressLogo from '../../assets/img/icons/wordpress.png';
import RedDotLogo from '../../assets/img/icons/reddot.png';
import SiteCoreLogo from '../../assets/img/icons/sitecore.png';
import FileZillaLogo from '../../assets/img/icons/file-zilla.png';
import VisualStudioLogo from '../../assets/img/icons/visual-studio.png';
import VisualStudioCodeLogo from '../../assets/img/icons/visual-studio-code.png';
import SublimeTextLogo from '../../assets/img/icons/sublime-text.png';
import PhotoshopLogo from '../../assets/img/icons/photoshop.png';
import FirefoxLogo from '../../assets/img/icons/firefox.png';
import ChromeLogo from '../../assets/img/icons/google-chrome.png';
import SafariLogo from '../../assets/img/icons/safari.png';

const scrollableSection = props => {
  return (
    <Column 
      id="icon-container" className="icon-container" 
      small={12} medium={12} large={7}
    >
      <h3 className="h5 black text-center">The programs and technologies I use most&nbsp;often:</h3>
      <Column className="icon" small={6} medium={3}>
        <img src={ReactLogo} alt="" role="presentation" />
        <p>React</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={JavaScriptLogo} alt="" role="presentation" />
        <p>JavaScript</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={HTML5Logo} alt="" role="presentation" />
        <p>HTML 5</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={CSSLogo} alt="" role="presentation" />
        <p>CSS</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={SASSLogo} alt="" role="presentation" />
        <p>SCSS / SASS</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={LESSLogo} alt="" role="presentation" />
        <p>LESS</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={GITLogo} alt="" role="presentation" />
        <p>Git</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={NPMLogo} alt="" role="presentation" />
        <p>NPM</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={FoundationLogo} alt="" role="presentation" />
        <p>Foundation</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={BootstrapLogo} alt="" role="presentation" />
        <p>Bootstrap</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={JiraLogo} alt="" role="presentation" />
        <p>JIRA</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={NETMVCLogo} alt="" role="presentation" />
        <p>.NET / MVC</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={SitefinityLogo} alt="" role="presentation" />
        <p>Sitefinity</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={KenticoLogo} alt="" role="presentation" />
        <p>Kentico</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={AEMLogo} alt="" role="presentation" />
        <p>AEM</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={WordPressLogo} alt="" role="presentation" />
        <p>WordPress</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={RedDotLogo} alt="" role="presentation" />
        <p>RedDot</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={SiteCoreLogo} alt="" role="presentation" />
        <p>Sitecore</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={FileZillaLogo} alt="" role="presentation" />
        <p>FTP</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={VisualStudioLogo} alt="" role="presentation" />
        <p>Visual Studio</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={VisualStudioCodeLogo} alt="" role="presentation" />
        <p>VS Code</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={SublimeTextLogo} alt="" role="presentation" />
        <p>Sublime Text</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={PhotoshopLogo} alt="" role="presentation" />
        <p>Photoshop</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={FirefoxLogo} alt="" role="presentation" />
        <p>Firefox</p>
      </Column>
      <Column className="icon" small={6} medium={3}>
        <img src={ChromeLogo} alt="" role="presentation" />
        <p>Chrome</p>
      </Column>
      <Column className="icon end" small={6} medium={3}>
        <img src={SafariLogo} alt="" role="presentation" />
        <p>Safari</p>
      </Column>
    </Column>
  );
};

export default scrollableSection;