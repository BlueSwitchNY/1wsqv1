import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SkipLinksContainer = styled.div`
  a {
    left: -999px;
    position: absolute;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -999;
    &:focus,
    &:active {
      color: #fff;
      background-color: #000;
      left: 0;
      top: 0;
      width: 30%;
      height: auto;
      overflow: auto;
      padding: 5px;
      border: 4px solid #c5c9af;
      text-align: center;
      font-size: 1.2em;
      z-index: 999;
    }
  }
`;

const SkipLinks = () => {
  return (
    <SkipLinksContainer aria-label="skip links">
      <Link to="/legal">
        <p>
          1WSQ is committed to providing a website that is accessible to the
          widest possible audience, regardless of technology or ability. We aim
          to comply with all applicable standards. If you experience any
          difficulty in accessing any part of this website, please contact us by
          emailing info@jembrealty.com or calling us at (212)608-5100.
        </p>
      </Link>
    </SkipLinksContainer>
  );
};

export default SkipLinks;
