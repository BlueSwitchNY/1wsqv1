import React, { useState, useEffect } from "react";
import {
  Container,
  AltContainer,
  ContainerLeft,
  ContainerRight,
  AltTextSection,
  TextSection,
  ImageSection,
  LinkSection,
  MapContainer,
  MapButton,
} from "../utils/grid";
import NeighborhoodInfo from "./neighborhood-info";
import { ResponsiveImage, ScrollToTop } from "../utils";

const NeighborhoodDesktop = ({ currentMap }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [zoomMap, setZoomMap] = useState(false);
  // const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      {activeSection === 0 ? (
        <TextSection>
          <h5>THE NEIGHBORHOOD</h5>
          <LinkSection>
            <p style={activeStyle}>TRANSIT</p>
            <p onClick={() => setActiveSection(1)} style={inactiveStyle}>
              DINING
            </p>
          </LinkSection>
          <p>
            Downtown Brooklyn is New York's third CBD. boasting an array of
            services while manintaining citywide and regional connections via
            LIRR and subway lines.
          </p>
        </TextSection>
      ) : (
        <TextSection>
          <h5>THE NEIGHBORHOOD</h5>
          <LinkSection>
            <p onClick={() => setActiveSection(0)} style={inactiveStyle}>
              TRANSIT
            </p>
            <p style={activeStyle}>DINING</p>
          </LinkSection>
          <p>
            In a borough known as a foodie paradise, 1 Willoughby Square is
            located next to culinary destinations that range from Grand Army and
            Yaso Tangboo to Dekalb Market Hall.
          </p>
        </TextSection>
      )}
      {activeSection === 1 ? (
        <ImageSection>
          <ResponsiveImage
            srcPath="/images/neighborhood/desktop-crops-dining1"
            srcSet=""
            imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
          />
          <ResponsiveImage
            srcPath="/images/neighborhood/desktop-crops-dining2"
            srcSet=""
            imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
          />
          <ResponsiveImage
            srcPath="/images/neighborhood/desktop-crops-dining3"
            srcSet=""
            imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
          />
          <ResponsiveImage
            srcPath="/images/neighborhood/desktop-crops-dining4"
            srcSet=""
            imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
          />
          <ResponsiveImage
            srcPath="/images/neighborhood/desktop-crops-dining5"
            srcSet=""
            imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
          />
          <ResponsiveImage
            srcPath="/images/neighborhood/desktop-crops-dining6"
            srcSet=""
            imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
          />
          <ResponsiveImage
            srcPath="/images/neighborhood/desktop-crops-dining7"
            srcSet=""
            imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
          />
          <ResponsiveImage
            srcPath="/images/neighborhood/desktop-crops-dining8"
            srcSet=""
            imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
          />
          <ResponsiveImage
            srcPath="/images/neighborhood/desktop-crops-dining9"
            srcSet=""
            imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
          />
        </ImageSection>
      ) : (
        <ImageSection>
          <ResponsiveImage
            srcPath="/images/neighborhood/desktop-crops-map1"
            srcSet=""
            imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
          />
          <ResponsiveImage
            srcPath="/images/neighborhood/desktop-crops-map2"
            srcSet=""
            imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
          />
          
        </ImageSection>
      )}

      <ScrollToTop />
    </Container>
  );

  // (
  //   <AltContainer>
  //     <ContainerLeft>
  //       <AltTextSection>
  //         <h5>THE NEIGHBORHOOD</h5>
  //         <LinkSection>
  //           <p style={activeStyle}>TRANSIT</p>
  //           <p onClick={() => setActiveSection(1)} style={inactiveStyle}>
  //             DINING
  //           </p>
  //         </LinkSection>
  //         <p>
  //           Downtown Brooklyn is New York's third CBD. boasting an array of
  //           services while manintaining citywide and regional connections via
  //           LIRR and subway lines.
  //         </p>
  //       </AltTextSection>
  //     </ContainerLeft>
  //     <ContainerRight>
  //       <MapContainer
  //         style={{
  //           backgroundImage: zoomMap
  //             ? `url(/images/neighborhood/transit1_desktop.jpg)`
  //             : `url(/images/neighborhood/transit2_desktop.jpg)`,
  //         }}
  //       >
  //         <MapButton
  //           onClick={() => setZoomMap(true)}
  //           style={{
  //             backgroundImage: `url(/images/neighborhood/ZoomIn.svg)`,
  //             opacity: zoomMap ? `0.5` : `1`,
  //           }}
  //         />
  //         <MapButton
  //           onClick={() => setZoomMap(false)}
  //           style={{
  //             backgroundImage: `url(/images/neighborhood/ZoomOut.svg)`,
  //             opacity: zoomMap ? `1` : `0.5`,
  //           }}
  //         />
  //       </MapContainer>
  //       <NeighborhoodInfo currentMap={currentMap} />
  //     </ContainerRight>
  //     <ScrollToTop />
  //   </AltContainer>
  // );
};

const activeStyle = {
  textDecoration: `underline`,
};

const inactiveStyle = {
  opacity: `0.5`,
};

export default NeighborhoodDesktop;
