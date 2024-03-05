import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = styled.div`
  height: auto;
  .selector-item {
    box-sizing: border-box;
    padding-top: 1em;
    height: 100%;
    width: auto;
    font-family: "BrownStd Light";
    color: #fff;
    opacity: 0.5;
    p {
      font-size: 1.25rem;
    }
    h1 {
      font-size: 1.5rem;
      margin-bottom: 1em;
    }
  }

  .selector-button {
    font-size: 1rem;
    text-decoration: underline blue !important;
    text-underline-offset: 0.25em;
    margin-bottom: 1em;
  }
`;

const SelectorCarousel = ({
  openOverlayHigh,
  openOverlayMid,
  openOverlayLow,
  openOverlaySuper,
}) => {
  const [opacity, setOpacity] = useState(0);
  const [DOMContentLoaded, setDOMContentLoaded] = useState(false);
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: window.innerWidth < 768 ? 2.15 : 3.15,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    className: "selector-item",
  };

  const setUpSVGTransitions = () => {
    setDOMContentLoaded(true);
    //sets up animations for building svg

    const svgObject = document.getElementById("building-svg");
    const svgObjectDocument = svgObject.contentDocument;
    const highRise = svgObjectDocument.getElementById("Highrise_Highlight");
    const midRise = svgObjectDocument.getElementById("Midrise_Highlight");
    const lowRise = svgObjectDocument.getElementById("Lowrise_Highlight");
    const superFloor = svgObjectDocument.getElementById("Superfloor_Highlight");
  };

  const fadeBuildingSVG = () => {
    let svgObject = document.getElementById("building-svg");
    if (DOMContentLoaded) {
      let svgObjectDocument = svgObject.contentDocument;
      if (
        svgObjectDocument.getElementById("Highrise_Highlight") &&
        svgObjectDocument.getElementById("Midrise_Highlight") &&
        svgObjectDocument.getElementById("Lowrise_Highlight") &&
        svgObjectDocument.getElementById("Superfloor_Highlight")
      ) {
        if (opacity === 1) {
          svgObjectDocument.getElementById(
            "Highrise_Highlight"
          ).style.opacity = 1;
          svgObjectDocument.getElementById(
            "Midrise_Highlight"
          ).style.opacity = 0;
          svgObjectDocument.getElementById(
            "Lowrise_Highlight"
          ).style.opacity = 0;
          svgObjectDocument.getElementById(
            "Superfloor_Highlight"
          ).style.opacity = 0;
        } else if (opacity === 2) {
          svgObjectDocument.getElementById(
            "Midrise_Highlight"
          ).style.opacity = 1;
          svgObjectDocument.getElementById(
            "Lowrise_Highlight"
          ).style.opacity = 0;
          svgObjectDocument.getElementById(
            "Highrise_Highlight"
          ).style.opacity = 0;
          svgObjectDocument.getElementById(
            "Superfloor_Highlight"
          ).style.opacity = 0;
        } else if (opacity === 3) {
          svgObjectDocument.getElementById(
            "Lowrise_Highlight"
          ).style.opacity = 1;
          svgObjectDocument.getElementById(
            "Highrise_Highlight"
          ).style.opacity = 0;
          svgObjectDocument.getElementById(
            "Midrise_Highlight"
          ).style.opacity = 0;
          svgObjectDocument.getElementById(
            "Superfloor_Highlight"
          ).style.opacity = 0;
        } else if (opacity === 4) {
          svgObjectDocument.getElementById(
            "Superfloor_Highlight"
          ).style.opacity = 1;
          svgObjectDocument.getElementById(
            "Midrise_Highlight"
          ).style.opacity = 0;
          svgObjectDocument.getElementById(
            "Lowrise_Highlight"
          ).style.opacity = 0;
          svgObjectDocument.getElementById(
            "Highrise_Highlight"
          ).style.opacity = 0;
        } else {
          svgObjectDocument.getElementById(
            "Highrise_Highlight"
          ).style.opacity = 0;
          svgObjectDocument.getElementById(
            "Midrise_Highlight"
          ).style.opacity = 0;
          svgObjectDocument.getElementById(
            "Lowrise_Highlight"
          ).style.opacity = 0;
          svgObjectDocument.getElementById(
            "Superfloor_Highlight"
          ).style.opacity = 0;
        }
      }
    }
  };

  // useEffect(fadeBuildingSVG, [opacity]);

  useEffect(() => {
    fadeBuildingSVG();
    setTimeout(setUpSVGTransitions, 1000);
  }, [opacity]);

  return (
    <Slider {...settings}>
      <Slide>
        <div
          onClick={() => setOpacity(1)}
          style={{ opacity: opacity === 1 ? `1` : `0.5` }}
          className="selector-item"
        >
          <p>Floors 28-35</p>
          <h1>PENTHOUSE</h1>
          <div className="selector-button" onClick={openOverlayHigh}>
            FLOORPLAN
          </div>
        </div>
      </Slide>
      <Slide>
        <div
          onClick={() => setOpacity(2)}
          style={{ opacity: opacity === 2 ? `1` : `0.5` }}
          className="selector-item"
        >
          <p>Floors 27-34</p>
          <h1>HIGH RISE</h1>
          <div className="selector-button" onClick={openOverlayMid}>
            FLOORPLAN
          </div>
        </div>
      </Slide>
      <Slide>
        <div
          onClick={() => setOpacity(3)}
          style={{ opacity: opacity === 3 ? `1` : `0.5` }}
          className="selector-item"
        >
          <p>Floors 10-20</p>
          <h1>MID RISE</h1>
          <div className="selector-button" onClick={openOverlayLow}>
            FLOORPLAN
          </div>
        </div>
      </Slide>
      <Slide>
        <div
          onClick={() => setOpacity(4)}
          style={{ opacity: opacity === 4 ? `1` : `0.5` }}
          className="selector-item"
        >
          <p>Floors 7,16,26,35</p>
          <h1>SUPERFLOOR</h1>
          <div className="selector-button" onClick={openOverlaySuper}>
            FLOORPLAN
          </div>
        </div>
      </Slide>
    </Slider>
  );
};

export default SelectorCarousel;
