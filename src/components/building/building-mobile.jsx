/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Container, MobileTextSection, ImageSection } from "../utils/grid";
import { ResponsiveImage, ScrollToTop } from "../utils";

const BuildingMobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <MobileTextSection>
        <h5>THE BUILDING</h5>
        <p>
          Introducing 1 Willoughby Square, Brooklyn’s first ground-up office
          tower in a generation. 1WSQ opens directly to the 1-acre Willoughby
          Square Park and climbs 34 stories above Brooklyn to offer unobstructed
          views of New York’s skylines and waterways.
        </p>
      </MobileTextSection>
      <ImageSection>
        <ResponsiveImage
          srcPath="/images/building/mobile-crops-building3"
          srcSet=""
          imgAlt="Rendering of sunset view over the east river"
        />
        <ResponsiveImage
          srcPath="/images/building/1WilloughbySquare-202205-JoeThomas-1"
          srcSet=""
          imgAlt="Rendering of sunset view over the east river"
        />
        <ResponsiveImage
          srcPath="/images/building/1WilloughbySquare-202205-JoeThomas-3"
          srcSet=""
          imgAlt="Rendering of sunset view over the east river"
        />
      </ImageSection>
      <MobileTextSection>
        <h5>THE OFFICES</h5>
        <p>
          The 14,500-square-foot floorplates at 1WSQ feature impressive
          column-free lease spans and 14-foot slab heights. Interiors and
          landscaped terraces overlook the new Willoughby Square Park and reveal
          360-degree vistas from New York Harbor to Prospect Park. Multilevel
          occupants will experience connected floors with 28-foot clearances.
        </p>
      </MobileTextSection>
      <ImageSection>
      <ResponsiveImage
          srcPath="/images/building/1WilloughbySquare-202205-JoeThomas-30"
          srcSet=""
          imgAlt="Rendering of One Wiloughby Square Exterior with east river in background"
        />
        <ResponsiveImage
          srcPath="/images/building/1WilloughbySquare-202205-JoeThomas-27"
          srcSet=""
          imgAlt="Rendering of sunset view over the east river"
        />
        <ResponsiveImage
          srcPath="/images/building/1WSQ15__018"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
        <ResponsiveImage
          srcPath="/images/building/1WSQ_11-22_018"
          srcSet=""
          imgAlt="Rendering of sunset view over the east river"
        />
        <ResponsiveImage
          srcPath="/images/building/1WSQ_11-22_019"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
        <ResponsiveImage
          srcPath="/images/building/1WSQ_11-22_011"
          srcSet=""
          imgAlt="Aerial rendering of One Wiloughby Square Exterior"
        />
        <ResponsiveImage
          srcPath="/images/building/1WilloughbySquare-202205-JoeThomas-19"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
        <ResponsiveImage
          srcPath="/images/building/1WSQ_11-22_001"
          srcSet=""
          imgAlt="Aerial rendering of One Wiloughby Square Exterior"
        />
        <ResponsiveImage
          srcPath="/images/building/1WSQ_11-22_007"
          srcSet=""
          imgAlt="Aerial rendering of One Wiloughby Square Exterior"
        />
        <ResponsiveImage
          srcPath="/images/building/1WSQ_11-22_008"
          srcSet=""
          imgAlt="Close up rendering of One Wiloughby Square Exterior with park"
        />
      </ImageSection>
      <MobileTextSection>
        <h5>THE ARCHITECT</h5>
        <p>
          FXCollaborative partner Dan Kaplan conceived 1WSQ as an industrial
          loft for the 21st century, combining the exposed structure and
          daylighting of classic New York buildings with the energy-efficient
          systems and interior-exterior integration that today’s businesses
          demand. Kaplan’s design is so successful that FXCollaborative is
          departing Manhattan to reestablish its headquarters on three floors of
          1WSQ.
        </p>
      </MobileTextSection>
      <ImageSection>
        <ResponsiveImage
          srcPath="/images/building/building10"
          imgAlt="Photo of Dan Kaplan"
        />
        <ResponsiveImage
          srcPath="/images/building/building11"
          imgAlt="Photo of Blue Brick Detail"
        />
      </ImageSection>
      <ScrollToTop />
    </Container>
  );
};

export default BuildingMobile;
