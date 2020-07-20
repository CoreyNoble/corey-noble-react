import React from 'react';

import { Row, Column } from 'react-foundation';

import classes from './AboutContent.module.scss';

import EvertzLogo from '../../assets/img/logos/evertz.png';
import ThrillworksLogo from '../../assets/img/logos/thrillworks.png';
import RightChoiceLogo from '../../assets/img/logos/right-choice.png';
import SlightlySocialLogo from '../../assets/img/logos/slightly-social.png';
import FanshaweCollegeLogo from '../../assets/img/logos/fanshawe-college-logo.png';
import GraduationImage from '../../assets/img/icons/graduate.png';

const aboutContent = props => {
  return (
    <Row>
      <Column id="about-intro" small={12} data-aos="fade-up" data-aos-delay="100">
        <h2>My Story</h2>
        <div>
          <div>
            <div className="js-excerpt excerpt-hidden large-excerpt collapsible">
              <p>My name is <strong>Corey&nbsp;Noble</strong>. I am a <strong>Web&nbsp;Application&nbsp;Developer</strong>
                currently employed by <a className="evertz-text" href="https://evertz.com/"
                  title="Visit the Evertz Microsystems Website" target="_blank"
                  rel="noopener noreferrer"><strong>Evertz&nbsp;Microsystems&nbsp;Ltd.</strong></a>, A global leader in
                broadcast solutions with headquarters based in the beautiful city of
                Burlington,&nbsp;ON&nbsp;&#8209;&nbsp;Canada.</p>
              <p>A breif history about&nbsp;me:</p>
              <p>I began working in digital media in high school. I loved the variety that the digital space provided, so
                I took as many media classes as I could. At the time I wanted to create environments in videogames. This
                lead me to take a two year Multi Media Design and Production pre-requisite program at Fanshawe College,
                with the ultimate goal of taking a 3D course to become a Video Game Developer. It was in this program that
                I was introduced to website development. I fell in love with the complex and creative role that web
                development provides. I enjoyed learning about the many parts of digital media that contributed to a
                completed web project. To me, graduating from this course was the beginning of my career as a
                Web&nbsp;Developer.</p>
              <p>After I graduated from Multi Media Design and Production, I followed through with my original goal and
                entered the proceeding 3D Animation and Character Design program. The 3D program was immensely difficult,
                but amazing. I was mentored by a veteran in the industry. Due to the shorter than average timespan of this
                3D course (1 year opposed to the average 3 years), our teacher pushed us to the very edge of our potential
                in a very condensed&nbsp;timeline. Many people that work with me are amazed at the amount of dedication,
                concentration and the general attitude I have towards my profession. I consider the 3D program to be the
                reason for this. If I had any bad habits before the 3D course, they were broken by the time
                I&nbsp;graduated.</p>
              <p>While I loved both of my fields of study, post-graduation I chose Web Development as my preferred career
                path.</p>
              <p>First I started a freelance web development company called Right&nbsp;Choice Websites with a college
                friend, which gave me some of the skills and confidence I needed to pursue a career in the&nbsp;industry.
              </p>
              <p>Next I landed a job at <a className="thrillworks-text" href="https://thrillworks.com"
                  title="Visit the Thrillworks Website" target="_blank"
                  rel="noopener noreferrer"><strong>Thrillworks&nbsp;Inc.</strong></a> as a
                <strong>Web&nbsp;Production&nbsp;Specialist</strong>. At Thrillworks I was able to rapidly expand my
                knowledge of web technologies and software development best practices. After 3+&nbsp;years at Thrillworks
                I was promoted to <strong>Web&nbsp;Developer</strong> which was a position I held for an additional
                2+&nbsp;years before I was ready to broaden my horizons once&nbsp;more.</p>
              <p>I currently work for <strong>Evertz&nbsp;Microsystems&nbsp;Ltd.</strong> as a
                <strong>Web&nbsp;Application&nbsp;Developer</strong>. Throughout my career so far I have had the great
                privelage to work with very talented groups of people, on amazing and challenging projects that I am very
                proud to have had a part in&nbsp;creating.</p>
              <p>I feel blessed to have found my passion so early in life. I love that working in this industry means I
                get to continually learn, grow and take on a new challenge every&nbsp;day.</p>
            </div>
          </div>

          <a role="button" className="js-show-more">Show more +</a>
        </div>
      </Column>

      <Column id="experience" small={12}>
        <h2 data-aos="fade-right" data-aos-delay="100">Job Experience</h2>
        <hr data-aos="fade-up" data-aos-delay="100" />
      </Column>

      <Column className="about-experience" small={12} medium={3} large={2}>
        <img className="company-logo" src={EvertzLogo} alt="Evertz Microsystems Limited"
          data-aos="rotate-in-ltr" data-aos-delay="100" />
      </Column>

      <Column className="about-experience" small={12} medium={9} large={10}>
        <h3 className="job-title" data-aos="fade-up" data-aos-delay="100">Developer</h3>
        <h4 className="h5 job-timeframe" data-aos="fade-up" data-aos-delay="100">December&nbsp;2019 -&nbsp;Present</h4>
        <h5 className="company-name" data-aos="fade-up" data-aos-delay="100"><em>Evertz Microsystems Ltd.</em></h5>

        <div data-aos="fade-up" data-aos-delay="100">
          <p data-aos="fade-up">As a Developer at Evertz I continually seek to improve in all aspects of my career. I am
            driven to better myself and the team by making meaningful contributions in any way I can. I always welcome
            constructive critisism and keep an open mind to alternative&nbsp;ideas.</p>
        </div>
      </Column>

      <hr data-aos="fade-up" data-aos-delay="100" />

      <Column className="about-experience" small={12} medium={3} large={2}>
        <img className="company-logo" src={ThrillworksLogo} alt="Thrillworks Inc."
          data-aos="rotate-in-ltr" data-aos-delay="100" />
      </Column>

      <Column className="about-experience" small={12} medium={9} large={10}>
        <h3 className="job-title" data-aos="fade-up" data-aos-delay="100">Developer</h3>
        <h4 className="h5 job-timeframe" data-aos="fade-up" data-aos-delay="100"><strong>2&nbsp;years, 4&nbsp;months</strong>
          &nbsp;|&nbsp; August&nbsp;2017 -&nbsp;December&nbsp;2019</h4>
        <h5 className="company-name" data-aos="fade-up" data-aos-delay="100"><em>Thrillworks&nbsp;Inc.</em></h5>

        <div data-aos="fade-up" data-aos-delay="100">
          <div>
            <div className="js-excerpt excerpt-hidden collapsible">
              <p data-aos="fade-up">As a Developer at Thrillworks I worked on large scale web projects for a wide variety
                of enterprise clients. These clients included but were not limited to: President’s&nbsp;Choice
                <em>(PC&nbsp;Financial, PC&nbsp;Insiders, The&nbsp;Mobile&nbsp;Shop, PC&nbsp;Gas&nbsp;Bar)</em>,
                Motusbank, Meridian Credit&nbsp;Union, Tim&nbsp;Hortons, BlackBerry, Davies Ward Phillips
                &amp;&nbsp;Vineberg&nbsp;LLP, EdgePoint,&nbsp;Agrilight.</p>
              <p>My Web Developer position at Thrillworks has given me experience&nbsp;with:</p>
              <ul>
                <li>
                  <strong>JavaScript, SCSS, HTML5</strong> – The primary web technologies I used on a daily&nbsp;basis.
                </li>
                <li>
                  <strong>Agile, Scrum</strong> – The core processes and ideologies I based my development
                  practices&nbsp;on.</li>
                <li>
                  <strong>.NET</strong> – The basis for most of the web development projects I actively
                  helped&nbsp;manage.</li>
                <li>
                  <strong>Model, View, Controller (MVC)</strong> – The primary way I developed for .NET based content
                  management&nbsp;systems.</li>
                <li>
                  <strong>Sitefinity &amp; Kentico</strong> – .NET based content management systems, using MVC as the
                  primary means for custom&nbsp;development.</li>
              </ul>
            </div>
          </div>
          <a role="button" className="js-show-more">Show more +</a>
        </div>
      </Column>

      <hr data-aos="fade-up" data-aos-delay="100" />

      <Column className="about-experience" small={12} medium={3} large={2}>
        <img className="company-logo" src={ThrillworksLogo} alt="Thrillworks Inc."
          data-aos="rotate-in-ltr" data-aos-delay="100" />
      </Column>

      <Column className="about-experience" small={12} medium={9} large={10}>
        <h3 className="job-title" data-aos="fade-up" data-aos-delay="100">Web Production Specialist</h3>
        <h4 className="h5 job-timeframe" data-aos="fade-up" data-aos-delay="100"><strong>3&nbsp;years, 3&nbsp;months</strong>
          &nbsp;|&nbsp; May&nbsp;2014 -&nbsp;July&nbsp;2017</h4>
        <h5 className="company-name" data-aos="fade-up" data-aos-delay="100"><em>Thrillworks Inc.</em></h5>

        <div data-aos="fade-up" data-aos-delay="100">
          <div>
            <div className="js-excerpt excerpt-hidden">
              <p>As a Web Production Specialist I was able to work with a wide variety of web technologies. My Web
                Production Specialist
                position at Thrillworks has given me&nbsp;experience with:</p>
              <ul>
                <li>
                  <strong>Agile Methodology</strong> – Professional training on Agile Methodology. Creating and managing
                  team Kanban boards, daily scrums and frequent retrospective&nbsp;meetings. Evaluating the scope of
                  projects, breaking them into manageable tasks and tracking team&nbsp;velocity.</li>
                <li>
                  <strong>SEO + WCAG Guidelines</strong> – Thorough research and training on Search Engine Optimization
                  best practices and the Web Content Accessibility&nbsp;Guidelines.</li>
                <li>
                  <strong>GIT + Source Control</strong> – Using GIT and BitBucket for version control.</li>
                <li>
                  <strong>SCSS/LESS, Foundation/Bootstrap</strong> – Web development using SCSS/LESS to create scalable
                  websites while maintaining strict branding&nbsp;guidelines. Using the Twitter Bootstrap and the Zurb
                  Foundation frameworks to create complex&nbsp;UI.</li>
                <li>
                  <strong>JIRA + Confluence</strong> – Ticket tracking for web development tasks and maintenance. Creating
                  and maintaining documentation.</li>
                <li>
                  <strong>AEM - Adobe Experience Manager</strong> – Page development, component development, website
                  maintenance, asset manipulation, version control and quality assurance for 12+&nbsp;languages.</li>
                <li>
                  <strong>WordPress</strong> – Custom tool development, theme development, managing plugins and user
                  accounts, implementing page content, assets and&nbsp;data.</li>
                <li>
                  <strong>RedDot by OpenText</strong> – Creating products and incorporating them and their promotions
                  throughout multiple websites.
                  Creating web pages and components. Updating microsites, templates and banners in 3
                  language&nbsp;variants.</li>
                <li>
                  <strong>SiteCore</strong> – Custom development, package creation and implementation, website
                  maintenance.</li>
                <li>
                  <strong>Magento</strong> – Creating hundreds of products with unique identifiers that worked in
                  conjunction with an e-commerce
                  database. Creating web pages that dynamically load products and&nbsp;content.</li>
                <li>
                  <strong>ExactTarget / SalesForce</strong> – Creating, editing and testing responsive HTML email
                  campaigns. Incorporating dynamically generated content, including; QR codes, company variables and user
                  data. Creating and updating email templates,
                  sending and scheduling emails to a large subscriber base. Sending batches of emails per hour to large
                  audiences
                  and sending specific emails to region filtered&nbsp;users.</li>
                <li>
                  <strong>Photoshop + Illustrator</strong> – Creating, manipulating and optimizing website graphics for
                  production purposes.</li>
                <li>
                  <strong>InDesign</strong> – Creating training documentation and&nbsp;manuals.</li>
              </ul>
            </div>
          </div>
          <a role="button" className="js-show-more">Show more +</a>
        </div>
      </Column>

      <hr data-aos="fade-up" data-aos-delay="100" />

      <Column className="about-experience" small={12} medium={3} large={2}>
        <img className="company-logo" src={RightChoiceLogo} alt="Right Choice Web Development"
          data-aos="rotate-in-ltr" data-aos-delay="100" />
      </Column>

      <Column className="about-experience" small={12} medium={9} large={10}>
        <h3 className="job-title" data-aos="fade-up" data-aos-delay="100">Co-Owner, Website Developer and Graphic&nbsp;Artist
        </h3>
        <h4 className="h5 job-timeframe" data-aos="fade-up" data-aos-delay="100"><strong>9&nbsp;months</strong> &nbsp;|&nbsp;
          September&nbsp;2013 -&nbsp;May&nbsp;2014</h4>
        <h5 className="company-name" data-aos="fade-up" data-aos-delay="100"><em>Right Choice Websites</em></h5>

        <div data-aos="fade-up" data-aos-delay="100">
          <div>
            <div className="js-excerpt excerpt-hidden">
              <p>A former colleague and I created a website development company called Right Choice Websites. We built
                responsive websites using WordPress. My daily activities ranged greatly, Including: Explaining business
                packages and the development process to clients, managing project work, website development, branding,
                graphic design and documentation.</p>
              <ul>
                <li>
                  <strong>WordPress</strong> – Developing websites using custom themes.</li>
                <li>
                  <strong>Photoshop + Illustrator</strong> – Creating branding, website compositions, web and
                  print&nbsp;graphics.</li>
                <li>
                  <strong>Trello</strong> – Breaking down and keeping track of the work that was to be done, in-progress
                  and&nbsp;completed.</li>
                <li className="no-bottom-space">
                  <strong>InDesign</strong> – To create branded documentation.</li>
              </ul>
            </div>
          </div>
          <a role="button" className="js-show-more">Show more +</a>
        </div>
      </Column>

      <hr data-aos="fade-up" data-aos-delay="100" />

      <Column className="about-experience" small={12} medium={3} large={2}>
        <img className="company-logo" src={SlightlySocialLogo} alt="Slightly Social"
          data-aos="rotate-in-ltr" data-aos-delay="100" />
      </Column>

      <Column className="about-experience" small={12} medium={9} large={10}>
        <h3 className="job-title" data-aos="fade-up" data-aos-delay="100">3D Artist and Unity Developer</h3>
        <h4 className="h5 job-timeframe" data-aos="fade-up" data-aos-delay="100"><strong>4&nbsp;months</strong> &nbsp;|&nbsp;
          May&nbsp;2013 -&nbsp;August&nbsp;2013</h4>
        <h5 className="company-name no-padding" data-aos="fade-up" data-aos-delay="100"><em>Slightly Social</em></h5>

        <div data-aos="fade-up" data-aos-delay="100">
          <div>
            <div className="js-excerpt excerpt-hidden">
              <p>I was the lead developer and 3D artist for a few Android and iOS games. I was provided a codebase for
                each game and was responsible for creating all of the in-game art and implementing it using the Unity game
                engine. I added features to the codebase, and collaborated with the UI and Sound developers to create a
                complete&nbsp;package.</p>
              <ul>
                <li><strong>Project Management</strong> – Each game we created had a very short development cycle. Each
                  project had to be carefully managed to ensure&nbsp;success.</li>
                <li><strong>GIT</strong> - Version control.</li>
                <li><strong>Unity</strong> - Game development.</li>
                <li><strong>3D Studio Max</strong> - Modelling and&nbsp;animation.</li>
                <li className="no-bottom-space"><strong>Photoshop</strong> - Texturing and concept&nbsp;art.</li>
              </ul>
            </div>
          </div>
          <a role="button" className="js-show-more">Show more +</a>
        </div>
      </Column>

      <Column id="education" small={12}>
        <h2 data-aos="fade-right" data-aos-delay="100">Education</h2>
        <hr data-aos="fade-up" data-aos-delay="100" />
        <img src={FanshaweCollegeLogo} alt="Fanshawe College" data-aos="fade-up"
          data-aos-delay="100" />
      </Column>

      <Column className="about-experience" small={12} medium={3} large={2}>
        <img className="company-logo" src={GraduationImage} alt="Graduate" data-aos="rotate-in-ltr"
          data-aos-delay="100" />
      </Column>

      <Column className="about-experience" small={12} medium={9} large={10}>
        <h3 data-aos="fade-up" data-aos-delay="100">3D Animation and Character&nbsp;Design</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          <strong>2012&nbsp;-&nbsp;2013 &nbsp;|&nbsp; Certificate</strong>
        </p>

        <div data-aos="fade-up" data-aos-delay="100">
          <div>
            <div className="js-excerpt excerpt-hidden">
              <p>In 3D Animation and Character design I honed the skills that are used in all aspects of Game Development
                and Computer Graphics. However, I believe the most valuable skills I learned from this program are time
                management, project management and team collaboration&nbsp;skills.</p>
              <ul>
                <li>
                  <strong>Time Management</strong> – Our assignments were always under very strict timelines, so time
                  management was the key to
                  passing the course. Today, I consider this one of the most valuable skills I&nbsp;have.</li>
                <li>
                  <strong>Project Management</strong> – We often had multiple projects on-the-go with competing deadlines.
                  Dedicated focus on
                  project management was a necessity.</li>
                <li>
                  <strong>Team Collaboration</strong> – We created platformer and isometric shooter games in groups
                  ranging from 5-6 people. I
                  learned all about the tensions that build in a team under strict deadlines and how to deal with the
                  stress of team
                  members that aren't getting along or performing at their&nbsp;role.</li>
                <li>
                  <strong>Constructive Criticism</strong> – Our teacher was an industry veteran who was very critical
                  about our work. He was our
                  client and if something wasn't up to spec, we had to rectify it. I learned very quickly the importance
                  of listening
                  and adhering to the feedback and criticisms pertaining to my&nbsp;work.</li>
                <li className="no-bottom-space">
                  <strong>Technical Skills</strong> – The Technical skills I honed in this program are:
                  <em>Concept Art, Sculpting, Re-Topology + Mesh-Optimization, Unwrapping + Texturing, Rigging +
                    Animation, Lighting +
                    Rendering, Game&nbsp;Development</em>.</li>
              </ul>
            </div>
          </div>
          <a role="button" className="js-show-more">Show more +</a>
        </div>
      </Column>

      <hr data-aos="fade-up" data-aos-delay="100" />

      <Column className="about-experience" small={12} medium={3} large={2}>
        <img className="company-logo" src={GraduationImage} alt="Graduate" data-aos="rotate-in-ltr"
          data-aos-delay="100" />
      </Column>

      <Column className="about-experience no-bottom-space" small={12} medium={9} large={10}>
        <h3 data-aos="fade-up" data-aos-delay="100">Multi Media Design and&nbsp;Production</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          <strong>2010&nbsp;-&nbsp;2012 &nbsp;|&nbsp; Diploma</strong>
        </p>

        <div data-aos="fade-up" data-aos-delay="100">
          <div>
            <div className="js-excerpt excerpt-hidden">
              <p>In Multi Media Design and Production I gained a broad set of media related skills. Most of the time was
                spent learning how to utilize the Adobe Master Suite to build various types of media related, mock-client
                projects. The primary focus of this program was to incorporate new technologies into websites built from
                scratch. The skills we learned&nbsp;include:</p>
              <ul>
                <li>
                  <strong>HTML, CSS, JavaScript, PHP, XML</strong> – Website&nbsp;Development</li>
                <li>
                  <strong>Photoshop</strong> – Website Production Graphics</li>
                <li>
                  <strong>Illustrator</strong> – Vector art for Scalable Media and&nbsp;Print</li>
                <li>
                  <strong>In-Design</strong> – Creating Print-Ready Documentation</li>
                <li>
                  <strong>ActionScript, Flash, Flash-Builder</strong> – Web App Development</li>
                <li className="no-bottom-space">
                  <strong>After Effects, Media Encoder</strong> – Video Production, VFX, Video&nbsp;Output</li>
              </ul>
            </div>
          </div>
          <a role="button" className="js-show-more">Show more +</a>
        </div>
      </Column>
    </Row>
  );
};

export default aboutContent;