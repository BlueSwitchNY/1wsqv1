import React from 'react';
import styled from 'styled-components';

import { ResponsiveImage } from '../utils';
import MediaQuery from 'react-responsive';

const MapContainer = styled.div`
  margin-bottom: 8px;
  position: relative;
  height: 100%;
  width: 100%;
  // background: rebeccapurple;
  .map {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    transition: 0.5s opacity ease-in-out;
  }
  .map-on {
    opacity: 1;
  }
  .map-off {
    opacity: 0;
  }
  .responsive-image-container {
    position: static;
  }
`;

// const Spacer = styled.div`
//   margin-top: 100%;
// `;

const ZoomControls = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 3%;
  top: 3%;
  z-index: 50;
  opacity: ${props => (props.buttonsHidden ? '0' : '1')};
  visibility: ${props => (props.buttonsHidden ? 'hidden' : 'visible')};
  transition: 0.5s all ease-in-out;
`;

const ZoomControl = styled.button`
  opacity: ${props => (props.active ? '1' : '.5')};
  margin-bottom: 8px;
  height: 32px;
  width: 32px;
  cursor: pointer;
  transition: 0.5s opacity ease-in-out;
  img {
    height: 100%;
    width: 100%;
  }
`;

const NeighborhoodMap = ({ currentMap, mapZoomed, zoomIn, zoomOut }) => {
  const mobileOrDesktop = window.innerWidth > 768 ? 'desktop' : 'mobile';
  return (
    <MapContainer>
      {/* <Spacer /> */}
      <ZoomControls buttonsHidden={currentMap !== 0}>
        <ZoomControl aria-label="zoom in" onClick={zoomIn} active={!mapZoomed}>
          <img
            aria-hidden
            src="/images/neighborhood/ZoomIn.svg"
            alt="Zoom In"
          />
        </ZoomControl>
        <ZoomControl aria-label="zoom out" onClick={zoomOut} active={mapZoomed}>
          <img
            aria-hidden
            src="/images/neighborhood/ZoomOut.svg"
            alt="Zoom Out"
          />
        </ZoomControl>
      </ZoomControls>
      <MediaQuery minWidth={1025}>
        <ResponsiveImage
          showExpand={false}
          srcPath={`/images/neighborhood/transit1_${mobileOrDesktop}`}
          imgAlt="Zoomed in transit map of Downtown Brooklyn"
          imgClass={
            mapZoomed && currentMap === 0 ? 'map map-on' : 'map map-off'
          }
          ariaHidden={mapZoomed && currentMap === 0 ? false : true}
        />
        <ResponsiveImage
          showExpand={false}
          srcPath={`/images/neighborhood/transit2_${mobileOrDesktop}`}
          imgAlt="Zoomed out transit map of Downtown Brooklyn"
          imgClass={
            !mapZoomed && currentMap === 0 ? 'map map-on' : 'map map-off'
          }
          ariaHidden={!mapZoomed && currentMap === 0 ? false : true}
        />

        {/* <ResponsiveImage
          showExpand={false}
          srcPath={`/images/neighborhood/dining_${mobileOrDesktop}`}
          imgAlt="Map of Downtown Brooklyn's Dining Options"
          imgClass={currentMap === 1 ? 'map map-on' : 'map map-off'}
          ariaHidden={currentMap === 1 ? false : true}
        />

        <ResponsiveImage
          showExpand={false}
          srcPath={`/images/neighborhood/culture_${mobileOrDesktop}`}
          imgAlt="Map of Downtown Brooklyn's Amenities"
          imgClass={currentMap === 2 ? 'map map-on' : 'map map-off'}
          ariaHidden={currentMap === 2 ? false : true}
        /> */}
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <ResponsiveImage
          showExpand={false}
          srcPath={`/images/neighborhood/transit1_${mobileOrDesktop}`}
          imgAlt="MAP ALT"
          imgClass={
            mapZoomed && currentMap === 0 ? 'map map-on' : 'map map-off'
          }
          ariaHidden={mapZoomed && currentMap === 0 ? false : true}
        />
        <ResponsiveImage
          showExpand={false}
          srcPath={`/images/neighborhood/transit2_${mobileOrDesktop}`}
          imgAlt="Zoomed out transit map of NYC Financial District"
          imgClass={
            !mapZoomed && currentMap === 0 ? 'map map-on' : 'map map-off'
          }
          ariaHidden={!mapZoomed && currentMap === 0 ? false : true}
        />

        <ResponsiveImage
          showExpand={false}
          srcPath={`/images/neighborhood/dining_${mobileOrDesktop}`}
          imgAlt="Map of NYC Financial District's Dining Options"
          imgClass={currentMap === 1 ? 'map map-on' : 'map map-off'}
          ariaHidden={currentMap === 1 ? false : true}
        />

        <ResponsiveImage
          showExpand={false}
          srcPath={`/images/neighborhood/culture_${mobileOrDesktop}`}
          imgAlt="Map of NYC Financial District's Amenities"
          imgClass={currentMap === 2 ? 'map map-on' : 'map map-off'}
          ariaHidden={currentMap === 2 ? false : true}
        />
      </MediaQuery>
    </MapContainer>
  );
};

export default NeighborhoodMap;
