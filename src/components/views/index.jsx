import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PhotoSphereViewer from 'photo-sphere-viewer';
import { mediaMin } from '../../stylesheets/MediaQueries';

const ViewsPage = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #000;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  box-sizing: border-box;
  padding: 72px 36px;
  ${mediaMin.tabletLandscape`
    padding: 80px 48px;
  `}
  a {
    margin-bottom: 56px;
    box-sizing: border-box;
    img {
      width: 100%;
    }
  }
  h5 {
    font-family: 'BrownStd Regular';
    color: #fff;
    letter-spacing: 1px;
    font-size: 18px;
    line-height: 18px;
    justify-content: center;
    margin-bottom: 24px;
  }
`;
const ViewButtonRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ViewButton = styled.button`
  font-family: 'BrownStd Regular';
  color: #fff;
  opacity: ${props => (props.active ? '1' : '0.5')};
  cursor: pointer;
  margin-right: 32px;
  font-size: 16px;
  line-height: 16px;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
  transition: color ease 0.3s;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #fff;
    z-index: 1;
    height: 2px;
    opacity: ${props => (props.active ? '1' : '0')};
  }

  &::before {
    width: 0%;
    left: 0;
    bottom: 0;
    transition: width ease 0.4s;
  }

  &::after {
    width: 100%;
    left: 0;
    bottom: 0;
    transition: all ease 0.6s;
  }

  &:hover {
    &::before {
      width: 100%;
    }

    &::after {
      left: 100%;
      width: 0%;
      transition: all ease 0.2s;
    }
  }
  ${mediaMin.tabletLandscape`
    font-size: 12px;
    line-height: 16px;
  `}
`;

const PanoViewer = styled.div`
  position: absolute;
  opacity: ${props => (props.active ? '1' : '0')};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  transition: 0.5s all ease-in-out;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .psv-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    .psv-hud {
      height: 100%;
      width: 100%;
      overflow: hidden;
      position: absolute;
    }
  }
  .psv-loader-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    .psv-loader {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        margin: 0 auto;
      }

      .psv-loader-canvas {
        display: none;
      }
    }
  }
`;

const Views = () => {
  const [currentFloor, setCurrentFloor] = useState(1);

  const constructPanoViewers = () => {
    new PhotoSphereViewer({
      container: 'top-viewer',
      panorama: 'images/panorama/pano34_10000.jpg',
      navbar: false,
      anim_speed: 0,
      default_lat: 0,
      latitude_range: [0.4, -0.5],
      max_fov: 55,
      loading_img: 'images/logo-white.svg'
    });

    new PhotoSphereViewer({
      container: 'bottom-viewer',
      panorama: 'images/panorama/pano16_10000.jpg',
      navbar: false,
      anim_speed: 0,
      default_lat: 0,
      latitude_range: [1.25, -1.25],
      longitude_range: [4, 3],
      loading_img: 'images/logo-white.svg'
    });
  };

  const topFloor = () => {
    setCurrentFloor(0);
  };

  const bottomFloor = () => {
    setCurrentFloor(1);
  };

  useEffect(constructPanoViewers, []);

  return (
    <ViewsPage>
      <ButtonContainer>
        <Link to="/">
          <img src="/images/logo-text-white.svg" alt="1WSQ Logo" />
        </Link>
        <h5>VIEWS</h5>
        <ViewButtonRow>
          <ViewButton
            active={currentFloor === 0}
            onClick={topFloor}
            aria-label="high rise views button"
          >
            HIGH RISE
          </ViewButton>
          <ViewButton
            active={currentFloor === 1}
            onClick={bottomFloor}
            aria-label="low rise views button"
          >
            LOW RISE
          </ViewButton>
        </ViewButtonRow>
      </ButtonContainer>
      <PanoViewer id="top-viewer" active={currentFloor === 0} />
      <PanoViewer id="bottom-viewer" active={currentFloor === 1} />
    </ViewsPage>
  );
};

export default Views;
