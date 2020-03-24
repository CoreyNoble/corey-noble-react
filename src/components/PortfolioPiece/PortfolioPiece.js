import React from 'react';
import './PortfolioPiece.scss';

const portfolioPiece = props => {
  return (
    <div className="row showcase-2">
      <div className="small-12 large-5 large-push-7 columns" data-aos="fade-up" data-aos-delay="100">
        <h3><em>PC&nbsp;Financial</em></h3>
        <p>I have developed many aspects of the <em>PC&nbsp;Financial</em> website over the past few years. I was heavily
          involved in creating this page that helps users identify new changes in their mobile app. This website is built
          using raw CSS and vanilla JavaScript on the front&#8209;end. The back&#8209;end is ASP.NET, integrated with the
          Sitefinity CMS&nbsp;platform.</p>
        <a className="cta project-cta" href="https://www.pcfinancial.ca/en/campaign/new-digital-experience" target="_blank"
          rel="noopener noreferrer" title="PC Financial, New Digital Experience. View the project.">View the project</a>
      </div>
      <div className="small-12 large-7 large-pull-5 columns end" data-aos="fade-up" data-aos-delay="100">
        <a href="https://www.pcfinancial.ca/en/campaign/new-digital-experience" target="_blank" rel="noopener noreferrer"
          title="PC Financial, New Digital Experience. View the project.">
          <div className="showcase-example margin-top-0-mobile-margin-top-2">
            <img src="%PUBLIC_URL%/assets/img/showcase/PC-Financial-New-Digital-Experience.jpg" alt="" role="presentation" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default portfolioPiece;