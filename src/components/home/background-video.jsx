import React, { useEffect } from 'react';
import styled from 'styled-components';
import Player from '@vimeo/player';
import { mediaMin } from '../../stylesheets/MediaQueries';

const BackgroundVideo = styled.div`
height: 100%;
width: 100%;
.iframe-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/1wsq-background_1000.jpg');
  ${mediaMin.tabletLandscape`
    background-image: url('/1wsq-background_2000.jpg');
  `}
  .iframe,
  iframe {
    width: 100vw;
    // height: 71.111vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    // min-width: 140.625vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const OpacityLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const HomeBG = () => {
  useEffect(() => {
    new Player('home-video', {
      id: 311998534,
      autoplay: 1,
      background: 1,
      loop: 1,
      muted: 1,
      allowsInlineMediaPlayback: 1
    });
  }, []);

  return (
    <BackgroundVideo>
      <OpacityLayer />
      <div className="background-video iframe-wrapper" id="home-video" />
    </BackgroundVideo>
  );
};

export default HomeBG;
