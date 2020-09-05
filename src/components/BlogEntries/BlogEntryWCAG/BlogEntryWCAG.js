import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import WCAGChecklist from '../../../assets/pdf/WCAG2Checklist.pdf';

const blogEntryWCAG = props => {
  return (
    <React.Fragment>
      <Section background="blue">
            <Row>
              <Column small={12}>
                <h1 className="header-no-parallax">Web Content Accessibility Guidelines (WCAG)</h1>
              </Column>
            </Row>
          </Section>

          <Section background="white">
          <Row>
            <Column small={12}>
              {/* Back CTA */}
              <p><small><a href="/blog" title="Return to the blog landing page">Back to Blog</a></small></p>

              {/* Body */}
              <h2 className="h3" data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/Overview.html" title="WCAG Guidelines" target="_blank" rel="noopener noreferrer">
                  <strong>Understanding WCAG 2.0</strong>
                </a>
              </h2>
              <p data-aos="fade-up" data-aos-delay="100">The WCAG guidelines are a legal requirement that all websites of companies that employ more than 50 people are required to meet. There are two ways to approach issues related to accessible websites and their content:</p>
              <p data-aos="fade-up" data-aos-delay="100">1. <strong>Focus on people</strong>.<br />Consider the needs of the people on your website with disabilities.</p>
              <p data-aos="fade-up" data-aos-delay="100">2. <strong>Focus on technology</strong>.<br />Meet the technical requirements that assist the people on your website with disabilities.</p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <p data-aos="fade-up" data-aos-delay="100">The World Wide Web Consortium (W3C) – maintains a widely accepted set of technical guidelines for accessible websites.</p>
              <p data-aos="fade-up" data-aos-delay="100">The Web Content Accessibility Guidelines (WCAG 2.0) contains a comprehensive set of documents, specifications and techniques dealing with all aspects of accessibility for websites and web content.</p>
              <p data-aos="fade-up" data-aos-delay="100">WCAG 2.0 is structured around 4 major questions:</p>
              <p data-aos="fade-up" data-aos-delay="100">1. Is it perceivable?<br />2. Is it operable?<br />3. Is it understandable?<br />4. Is it robust?</p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <p data-aos="fade-up" data-aos-delay="100">
                <strong>Perceivable</strong> – information and user interface components must be presentable to users in ways they can perceive.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv.html" title="Text Alternatives" target="_blank" rel="noopener noreferrer">1.1 Text Alternatives</a> – Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv.html" title="Time-based Media" target="_blank" rel="noopener noreferrer">1.2 Time-based Media</a> - Provide alternatives for time-based media.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation.html" title="Adaptable" target="_blank" rel="noopener noreferrer">1.3 Adaptable</a> – Create content that can be presented in different ways (for example simpler layout) without losing information or structure.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast.html" title="Distinguishable" target="_blank" rel="noopener noreferrer">1.4 Distinguishable</a> – Make it easier for users to see and hear content including separating foreground from background.</p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <p data-aos="fade-up" data-aos-delay="100"><strong>Operable</strong> – User interface components and navigation must be operable.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation.html" title="Keyboard accessible" target="_blank" rel="noopener noreferrer">2.1 Keyboard accessible</a> – Make all functionality available from a keyboard.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits.html" title="Enough Time Media" target="_blank" rel="noopener noreferrer">2.2 Enough Time Media</a> – Provide users enough time to read and use content.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure.html" title="Seizures" target="_blank" rel="noopener noreferrer">2.3 Seizures</a> – Do not design content in a way that is known to cause seizures.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms.html" title="Navigable" target="_blank" rel="noopener noreferrer">2.4 Navigable</a> – Provide ways to help users navigate, find content, and determine where they are.</p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <p data-aos="fade-up" data-aos-delay="100"><strong>Understandable</strong> – information and the operation of user interface must be understandable.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning.html" title="Readable" target="_blank" rel="noopener noreferrer">3.1 Readable</a> – Make text content readable and understandable.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior.html" title="Predictable" target="_blank" rel="noopener noreferrer">3.2 Predictable</a> – Make Web pages appear and operate in predictable ways.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error.html" title="Input Assistance" target="_blank" rel="noopener noreferrer">3.3 Input Assistance</a> – Help users avoid and correct mistakes.</p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <p data-aos="fade-up" data-aos-delay="100"><strong>Robust</strong> – content must be robust enough that is can be interpreted reliably by a wide variety of user agents, including assistive technologies.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat.html" title="Compatible" target="_blank" rel="noopener noreferrer">4.1 Compatible</a> - Maximize compatibility with current and future user agents, including assistive technologies.</p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <p data-aos="fade-up" data-aos-delay="100">
                <a href={WCAGChecklist} title="WCAG 2.0 Checklist" target="_blank" rel="noopener noreferrer">
                  <strong>Requirement Checklist (.pdf checklist)</strong>
                </a>
              </p>
              <p data-aos="fade-up" data-aos-delay="100">Level A (required by law) – the most basic web accessibility features.<br />Level AA (required by law) – deals with the biggest and most common barriers for disabled users<br />Level AAA (recommended but not required by law) – the highest (and most complex) level of web accessibility<br /></p>

              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.w3.org/WAI/WCAG20/quickref/" title="WCAG Guidelines (Quick Reference)" target="_blank" rel="noopener noreferrer">WCAG Guidelines (Quick Reference)</a>
              </p>

              {/* Back CTA */}
              <p data-aos="fade-up" data-aos-delay="100"><small><a href="/blog" title="Return to the blog landing page">Back to Blog</a></small></p>
            </Column>
          </Row>
        </Section>
    </React.Fragment>
  );
};

export default blogEntryWCAG;