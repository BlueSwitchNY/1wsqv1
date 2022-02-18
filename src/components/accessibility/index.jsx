import React, { useState } from 'react';
import styled from 'styled-components';
import { BlueHeading } from '../utils';
import Footer from '../footer';
import { mediaMin } from '../../stylesheets/MediaQueries';

const Container = styled.div`
  height: 100vh
  width: 100%;
`;

const TextSection = styled.div`
  display: flex;
  // flex-direction: row;
  flex-direction: column;
  height: 100%;
  // padding: 10em 2em 6em;
  padding-top: 10em;
  padding-left: 2em;
  padding-right: 2em;
  font-family: 'BrownStd', sans-serif;
    h5 {
      font-weight: bold;
      font-size: 1.25rem;
      margin-bottom: 2em;
      ${mediaMin.desktopXLarge`
      font-size: 2rem
    `}
    }
    p {
      font-weight: lighter;
      // margin-left: 5em;
      line-height: 1.5em;
      // margin-right: 20em;
      ${mediaMin.desktop`
      margin-left: 5em;
      margin-right: 15%;
    `}
      ${mediaMin.desktopXLarge`
      font-size: 1.5rem
    `}
    }
    ${mediaMin.desktop`
      flex-direction: row;
      padding: 10em 4em 6em;
    `}
    ${mediaMin.desktopXLarge`
    flex-direction: row;
    padding: 15em;
  `}
    
`;

const Accessibility = () => {
  const [footerShow, setFooterShow] = useState(true);
  return (
    <Container>
      <BlueHeading
        pageTitle="THE BUILDING"
        headerBG="/images/building/heading"
      />

          <TextSection>
            <h5>
              ACCESSIBILITY
              <br />
              STATEMENT
            </h5>

            <p>
              1WSQ is committed to providing a website that is accessible to the
              widest possible audience, regardless of technology or ability. We
              aim to comply with all applicable standards. If you experience any
              difficulty in accessing any part of this website, please contact
              us by emailing info@jembrealty.com or calling us at (212)608-5100.
            </p>
          </TextSection>
      <Footer footerShow={footerShow} />
      </Container>
  );
};

export default Accessibility;
