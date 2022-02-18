/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import Player from '@vimeo/player';
import styled from 'styled-components';

const VideoOverlayContainer = styled.div`
  z-index: 1000;
  visibility: ${props => (props.videoOverlayState ? 'visible' : 'hidden')};
  opacity: ${props => (props.videoOverlayState ? '1' : '0')};
  transition: visibility 0.5s ease-in-out, opacity 0.5s ease-in-out;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  .close-video {
    position: absolute;
    top: 8%;
    right: 8%;
    cursor: pointer;
    z-index: 101;
  }
  .video-overlay {
    height: 100%;
    width: 100%;
    .iframe,
    iframe {
      height: 100%;
      width: 100%;
      min-width: 100%;
      position: absolute;
    }
  }
`;

const VideoOverlay = ({ videoOverlayState, toggleVideo }) => {
  const [overlayPlayer, setOverlayPlayer] = useState(null);

  useEffect(() => {
    setOverlayPlayer(
      new Player('video-overlay', {
        id: 312128766,
        autoplay: 0,
        background: 0,
        loop: 0,
        muted: 0,
        allowsInlineMediaPlayback: 1
      })
    );
  }, []);

  useEffect(() => {
    if (!videoOverlayState && overlayPlayer) {
      overlayPlayer.pause();
    }
  }, [videoOverlayState]);

  return (
    <VideoOverlayContainer videoOverlayState={videoOverlayState}>
      <button onClick={toggleVideo}>
        <img
          src="/close.svg"
          className="close-video"
          alt="close video overlay"
        />
      </button>
      <div className="video-overlay iframe-wrapper" id="video-overlay" />
    </VideoOverlayContainer>
  );
};

export default VideoOverlay;
