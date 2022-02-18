import React from "react";
import styled from "styled-components";
import { mediaMin } from "../../stylesheets/MediaQueries";

const ScrollToTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 4em;
  width: 100%;
  position: fixed;
  z-index: 10;
  bottom: 0;
  ${mediaMin.desktopLarge`
    height: 5em;
  `}
  ${mediaMin.desktopXLarge`
    height: 7em;
  `}
`;

const ScrollToTopButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 3em;
  width: 3em;
  border-radius: 50%;
  background: #00041d;
  margin-right: 1em;
  border: 1px solid #fff;
  cursor: pointer;
  ${mediaMin.desktop`
  margin-right: 3em;
`}
  ${mediaMin.desktopLarge`
    height: 4em;
    width: 4em;
    margin-right: 3em;
`}
  ${mediaMin.desktopXLarge`
  height: 6em;
  width: 6em;
  `}
`;

const ScrollToTop = () => (
  <ScrollToTopContainer>
    <ScrollToTopButton
      onClick={() => window.scrollTo({ top: 0, behavior: `smooth` })}
    >
      <img
        style={{ width: `50%` }}
        src="/images/icons/scroll-to-top.svg"
        alt="stuff"
      />
    </ScrollToTopButton>
  </ScrollToTopContainer>
);

export default ScrollToTop;
