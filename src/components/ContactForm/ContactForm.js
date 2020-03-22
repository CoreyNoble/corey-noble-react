import React from 'react';
import classes from './ContactForm.scss';

const contactForm = props => {
  return (
    <div className="contact-form small-12 column" data-aos="fade-up" data-aos-delay="100">
      <form action="{{root}}mailsend.php" method="post">
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
          <textarea className="last" name="inquiry" rows="5" cols="35" maxlength="3000" required></textarea>

          <div className="contact-ctas no-padding small-12 medium-8 columns">
            <div className="g-recaptcha" data-sitekey="6Lcj8wYUAAAAAG9fl2DtDnsqTjfyNFwhL38TwGao"></div>
          </div>

          <div className="contact-ctas no-padding small-12 medium-4 columns">
            <input type="submit" className="button submit-cta" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default contactForm;