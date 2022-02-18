import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mediaMin } from "../../stylesheets/MediaQueries";
import Selector from "./selector";
import Legend from "./legend";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 3em;
  ${mediaMin.desktopLarge`
    margin-top: 5em;
  `}
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 33%;
  .heading-container {
    .heading {
      color: #fff;
      font-size: 100px;
      font-family: "BrownStd Thin";
      margin-bottom: 2.5%;
      margin-left: -5px;
    }
    .sub-heading {
      font-family: "BrownStd Light";
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
      line-height: 18px;
    }
  }
  ${mediaMin.desktop`
    width: 25%;
  `}
  ${mediaMin.desktopLarge`
    width: 20%;
  `}
`;

const CenterCol = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 33%;
  .building-svg {
    height: 100%;
  }
  ${mediaMin.desktop`
    width: 50%;
  `}
  ${mediaMin.desktopLarge`
    width: 60%;
  `}
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 33%;
  font-family: "BrownStd Thin";
  color: #fff;
  ${mediaMin.desktop`
    width: 25%;
  `}
  ${mediaMin.desktopLarge`
    width: 20%
  `}
`;

const DownloadButtonDesktop = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3em;
  border 2px solid #fff;
  color: #fff;
  margin-bottom: 1em;
  font-family: 'BrownStd Light';
    .download-all-button-desktop {
      display: flex;
      flex-direction: row;
      height: 100%;
      width: 100%;
      padding: 0;
      border: none;
    }
    .button-left-desktop {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 20%;
      border-right: 2px solid #fff;
    }
    .button-right-desktop {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0 1em 0;
      color: #fff;
      height: 100%;
      width: 80%;
      font-size: 0.9rem;
    }
    .download-icon {
      height: 1em;
      width: 1em;
    }
    ${mediaMin.desktop`
      width: 90%
    `}
    ${mediaMin.desktopLarge`
      width: 80%
    `}
    ${mediaMin.desktopXLarge`
      width: 70%
    `}
`;

const AvailabilityDesktop = ({
  hoverState,
  updateMouseOver,
  openOverlayHigh,
  openOverlayMid,
  openOverlayLow,
  openOverlaySuper,
}) => {
  const [DOMContentLoaded, setDOMContentLoaded] = useState(false);

  const setUpSVGTransitions = () => {
    setDOMContentLoaded(true);
    //sets up animations for building svg

    const svgObject = document.getElementById("building-svg");
    const svgObjectDocument = svgObject.contentDocument;
    const highRise = svgObjectDocument.getElementById("Highrise_Highlight");
    const midRise = svgObjectDocument.getElementById("Midrise_Highlight");
    const lowRise = svgObjectDocument.getElementById("Lowrise_Highlight");
    const superFloor = svgObjectDocument.getElementById("Superfloor_Highlight");
    highRise.onmouseover = () => {
      svgObjectDocument.getElementById("Highrise_Highlight").style.opacity = 1;
      updateMouseOver("HIGH");
    };
    highRise.onmouseout = () => {
      svgObjectDocument.getElementById("Highrise_Highlight").style.opacity = 0;
      updateMouseOver("");
    };
    midRise.onmouseover = () => {
      svgObjectDocument.getElementById("Midrise_Highlight").style.opacity = 1;
      updateMouseOver("MID");
    };
    midRise.onmouseout = () => {
      svgObjectDocument.getElementById("Midrise_Highlight").style.opacity = 0;
      updateMouseOver("");
    };
    lowRise.onmouseover = () => {
      svgObjectDocument.getElementById("Lowrise_Highlight").style.opacity = 1;
      updateMouseOver("LOW");
    };
    lowRise.onmouseout = () => {
      svgObjectDocument.getElementById("Lowrise_Highlight").style.opacity = 0;
      updateMouseOver("");
    };
    superFloor.onmouseover = () => {
      svgObjectDocument.getElementById(
        "Superfloor_Highlight"
      ).style.opacity = 1;
      updateMouseOver("LOW");
    };
    superFloor.onmouseout = () => {
      svgObjectDocument.getElementById(
        "Superfloor_Highlight"
      ).style.opacity = 0;
      updateMouseOver("");
    };
    highRise.onclick = () => {
      openOverlayHigh();
    };
    lowRise.onclick = () => {
      openOverlayLow();
    };
    superFloor.onclick = () => {
      openOverlaySuper();
    };
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
        if (hoverState === "HIGH") {
          svgObjectDocument.getElementById(
            "Highrise_Highlight"
          ).style.opacity = 1;
        } else if (hoverState === "LOW") {
          svgObjectDocument.getElementById(
            "Lowrise_Highlight"
          ).style.opacity = 1;
        } else if (hoverState === "MID") {
          svgObjectDocument.getElementById(
            "Midrise_Highlight"
          ).style.opacity = 1;
        } else if (hoverState === "SUPER") {
          svgObjectDocument.getElementById(
            "Superfloor_Highlight"
          ).style.opacity = 1;
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

  useEffect(fadeBuildingSVG, [hoverState]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(setUpSVGTransitions, 1000);
  }, []);

  return (
    <Container>
      <LeftCol>
        <Legend />
        <Selector
          hoverState={hoverState}
          updateMouseOver={updateMouseOver}
          openOverlayHigh={openOverlayHigh}
          openOverlayMid={openOverlayMid}
          openOverlayLow={openOverlayLow}
          openOverlaySuper={openOverlaySuper}
        />
      </LeftCol>
      <CenterCol>
        <object
          className="building-svg"
          id="building-svg"
          data="/images/availability/building.svg"
          type="image/svg+xml"
          alt="1WSQ Building Visualization"
        >
          BUILDING
        </object>
      </CenterCol>
      <RightCol>
        <DownloadButtonDesktop aria-label="download all floorplans as pdf">
          <a
            href="images/availability/1WSQ_FLOOR_PLANS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-all-button-desktop"
          >
            <div className="button-left-desktop">
              <img
                className="download-icon"
                src="/images/availability/download-icon.svg"
                alt="download icon"
                aria-hidden
              />
            </div>
            <div className="button-right-desktop">
              FLOOR PLANS AND TEST FITS
            </div>
          </a>
        </DownloadButtonDesktop>
        <p style={{ marginBottom: `1em`, marginTop: `2.5em` }}>
          PRE BUILTS AVAILABLE MARCH 2022
        </p>
        <DownloadButtonDesktop aria-label="download all floorplans as pdf">
          <a
            href="images/availability/1WSQ_15th_Floor.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-all-button-desktop"
          >
            <div className="button-left-desktop">
              <img
                className="download-icon"
                src="/images/availability/download-icon.svg"
                alt="download icon"
                aria-hidden
              />
            </div>
            <div className="button-right-desktop">15TH FLOOR</div>
          </a>
        </DownloadButtonDesktop>
        <DownloadButtonDesktop aria-label="download all floorplans as pdf">
          <a
            href="images/availability/1WSQ_16th_Floor_Pre_Built.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="download-all-button-desktop"
          >
            <div className="button-left-desktop">
              <img
                className="download-icon"
                src="/images/availability/download-icon.svg"
                alt="download icon"
                aria-hidden
              />
            </div>
            <div className="button-right-desktop">16TH FLOOR - PARTIAL</div>
          </a>
        </DownloadButtonDesktop>
      </RightCol>
    </Container>
  );
};

export default AvailabilityDesktop;
