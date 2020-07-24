import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

const blogEntrySEO = props => {
  return (
    <React.Fragment>
      <Section background="blue">
            <Row>
              <Column small={12}>
                <h1 class="header-no-parallax">Search Engine Optimisation (SEO)</h1>
              </Column>
            </Row>
          </Section>

          <Section background="white">
          <Row>
            <Column small={12}>
            
            </Column>
          </Row>
        </Section>
    </React.Fragment>
  );
};

export default blogEntrySEO;