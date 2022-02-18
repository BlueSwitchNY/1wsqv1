import React, { useState, useEffect } from "react";

import {
  Container,
  MobileTextSection,
  MapContainer,
  MapButton,
  LinkSection,
  ImageSection,
} from "../utils/grid";
import { ResponsiveImage } from "../utils";
import NeighborhoodInfo from "./neighborhood-info";

const NeighborhoodMobile = ({ currentMap }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [zoomMap, setZoomMap] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
}, [])

  return activeSection === 0 ? (
    <Container>
      <MobileTextSection>
        <h5>THE NEIGHBORHOOD</h5>
        <LinkSection>
          <p style={activeStyle}>
            TRANSIT
          </p>
          <p onClick={() => setActiveSection(1)}  style={inactiveStyle}>DINING</p>
        </LinkSection>
        <p>
          Downtown Brooklyn is New York's third CBD. boasting an array of
          services while manintaining citywide and regional connections via LIRR
          and subway lines.
        </p>
      </MobileTextSection>
      <ImageSection>
        <ResponsiveImage
          srcPath="/images/neighborhood/mobile-crops-map1"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
        <ResponsiveImage
          srcPath="/images/neighborhood/mobile-crops-map2"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
      </ImageSection>
    </Container>
  ) : (
    <Container>
      <MobileTextSection>
        <h5>THE NEIGHBORHOOD</h5>
        <LinkSection>
          <p onClick={() => setActiveSection(0)} style={inactiveStyle}>TRANSIT</p>
          <p  style={activeStyle}>
            DINING
          </p>
        </LinkSection>
        <p>
          In a borough known as a foodie paradise, 1 Willoughby Square is
          located next to culinary destinations that range from Grand Army and
          Yaso Tangboo to Dekalb Market Hall.
        </p>
      </MobileTextSection>
      <ImageSection>
        <ResponsiveImage
          srcPath="/images/neighborhood/mobile-crops-dining1"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
        <ResponsiveImage
          srcPath="/images/neighborhood/mobile-crops-dining2"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
        <ResponsiveImage
          srcPath="/images/neighborhood/mobile-crops-dining3"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
        <ResponsiveImage
          srcPath="/images/neighborhood/mobile-crops-dining4"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
        <ResponsiveImage
          srcPath="/images/neighborhood/mobile-crops-dining5"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
        <ResponsiveImage
          srcPath="/images/neighborhood/mobile-crops-dining6"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
        <ResponsiveImage
          srcPath="/images/neighborhood/mobile-crops-dining7"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
        <ResponsiveImage
          srcPath="/images/neighborhood/mobile-crops-dining8"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
        <ResponsiveImage
          srcPath="/images/neighborhood/mobile-crops-dining9"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
      </ImageSection>
      {/* <MapContainer
        style={{
          backgroundImage: zoomMap
            ? `url(/images/neighborhood/transit1_desktop.jpg)`
            : `url(/images/neighborhood/transit2_desktop.jpg)`,
        }}
      >
        <MapButton
          onClick={() => setZoomMap(true)}
          style={{
            backgroundImage: `url(/images/neighborhood/ZoomIn.svg)`,
            opacity: zoomMap ? `0.5` : `1`,
          }}
        />
        <MapButton
          onClick={() => setZoomMap(false)}
          style={{
            backgroundImage: `url(/images/neighborhood/ZoomOut.svg)`,
            opacity: zoomMap ? `1` : `0.5`,
          }}
        />
      </MapContainer>
      <NeighborhoodInfo currentMap={currentMap} /> */}
    </Container>
  );
};

const activeStyle = {
  textDecoration: `underline`,
};

const inactiveStyle = {
  opacity: `0.5`,
};

export default NeighborhoodMobile;
