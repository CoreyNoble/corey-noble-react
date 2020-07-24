import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import classes from './ContactForm.module.scss';

import Section from '../../containers/Section/Section';

const contactForm = props => {
  return (
    <Section background="black">
      <Row className={classes.NoCaptcha}>
        <Column className={classes.ContactIntro} small={12}>
          <h2>I look forward to hearing from&nbsp;you!</h2>
          <p className={`${classes.h5} h5`}>Please fill out the form below so we can begin a&nbsp;conversation.</p>
          <p className={`${classes.CaptchaNone} ${classes.CaptchaError} h5 hide`} aria-hidden="true"><em>Please validate your submission with
              Google ReCaptcha.</em></p>
          <p className={`${classes.CaptchaFailed} ${classes.CaptchaError} h5 hide`} aria-hidden="true"><em>You have failed Google ReCaptcha
              validation. Please try&nbsp;again.</em></p>
        </Column>

        <Column className={classes.ContactForm} small={12} data-aos="fade-up" data-aos-delay="100">
          <form action="./mailsend.php" method="post">
            <div className="row">
              <label for="firstName" className="h5">First Name</label>
              <input name="firstName" type="text" maxlength="50" required />

              <label for="lastName" className="h5">Last Name</label>
              <input name="lastName" type="text" maxlength="50" required />

              <label for="email" className="h5">Email Address</label>
              <input name="email" type="text" maxlength="80" required />

              <label for="company" className="h5">Company</label>
              <input name="company" type="text" maxlength="80" required />

              <label for="inquiry" className="h5">Inquiry</label>
              <textarea className={classes.Last} name="inquiry" rows="5" cols="35" maxlength="3000" required></textarea>

              <Column className={`${classes.ContactCTAs} ${classes.NoPadding}`} small={12} medium={8}>
                <div className="g-recaptcha" data-sitekey="6Lcj8wYUAAAAAG9fl2DtDnsqTjfyNFwhL38TwGao"></div>
              </Column>

              <Column className={`${classes.ContactCTAs} ${classes.NoPadding}`} small={12} medium={4}>
                <input type="submit" className={`${classes.Button} ${classes.SubmitCTA}`} value="Submit" />
              </Column>
            </div>
          </form>
        </Column>
      </Row>
    </Section>
  );
};

export default contactForm;