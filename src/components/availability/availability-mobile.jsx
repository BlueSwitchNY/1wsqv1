import React, { useEffect } from "react";
import styled from "styled-components";
import SelectorCarousel from "./selector-carousel";
import Legend from "./legend";
import { mediaMin } from "../../stylesheets/MediaQueries";

const MobileCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  height: auto;
  padding: 1em;
`;

const MobileColTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30%;
  width: 100%;
  overflow: hidden;
  ${mediaMin.tablet`
    height: 40%
  `}
`;

const MobileColBottom = styled.div`
  display: flex;
  flex-direction: row;
  height: 70%;
  width: 100%;
  margin: 2em 0 3em;
  ${mediaMin.tablet`
    height: 60%
`}
`;

const LeftCol = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  box-sizing: border-box;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 60%;
  .building-svg {
    height: 25em;
    ${mediaMin.tablet`
      height: 35em;
    `}
  }
`;

const DownloadButton = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3.25em;
  border 2px solid #fff;
  color: #fff;
  margin-bottom: 1em;
  font-family: 'BrownStd Light';
    .download-all-button {
      display: flex;
      flex-direction: row;
      height: 100%;
      width: 100%;
    }
    .button-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 20%;
      border-right: 2px solid #fff;
    }
    .button-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0 1em 0;
      color: #fff;
      height: 100%;
      width: 80%;
    }
    .download-icon {
      height: 1.25em;
      width: 1.25em;
    }
    ${mediaMin.tablet`
      width: 50%;
    `}
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "BrownStd Thin";
  color: #fff;
  width: 100%;
  height: auto;
  ${mediaMin.tablet`
    align-items: center;
  `}
`;

const AvailabilityMobile = ({
  openOverlayHigh,
  openOverlayMid,
  openOverlayLow,
  openOverlaySuper,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MobileCol>
      <MobileColTop>
        <SelectorCarousel
          openOverlayHigh={openOverlayHigh}
          openOverlayMid={openOverlayMid}
          openOverlayLow={openOverlayLow}
          openOverlaySuper={openOverlaySuper}
        />
      </MobileColTop>
      <MobileColBottom>
        <LeftCol>
          <Legend />
        </LeftCol>
        <RightCol>
          <object
            className="building-svg"
            id="building-svg"
            data="/images/availability/building.svg"
            type="image/svg+xml"
            alt="1WSQ Building Visualization"
          >
            BUILDING
          </object>
        </RightCol>
      </MobileColBottom>
      <CTAContainer>
      <DownloadButton aria-label="download all floorplans as pdf">
          <a
            href="images/availability/1-Willoughby-Square-Flyer-02012024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-all-button"
          >
            <div className="button-left">
              <img
                className="download-icon"
                src="/images/availability/download-icon.svg"
                alt="download icon"
                aria-hidden
              />
            </div>
            <div className="button-right">DOWNLOAD BROCHURE</div>
          </a>
        </DownloadButton>
        <DownloadButton aria-label="download all floorplans as pdf">
          <a
            href="images/availability/1WSQ_FLOOR_PLANS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-all-button"
          >
            <div className="button-left">
              <img
                className="download-icon"
                src="/images/availability/download-icon.svg"
                alt="download icon"
                aria-hidden
              />
            </div>
            <div className="button-right">FLOOR PLANS AND TEST FITS</div>
          </a>
        </DownloadButton>
        <p style={{ marginBottom: `1em`, marginTop: `1.25em` }}>
          PRE BUILT LAYOUTS
        </p>
        <DownloadButton aria-label="download all floorplans as pdf">
          <a
            href="images/availability/1WSQ_15th_Floor.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-all-button"
          >
            <div className="button-left">
              <img
                className="download-icon"
                src="/images/availability/download-icon.svg"
                alt="download icon"
                aria-hidden
              />
            </div>
            <div className="button-right">15TH FLOOR</div>
          </a>
        </DownloadButton>
        <DownloadButton aria-label="download all floorplans as pdf">
          <a
            href="images/availability/1WSQ_16th_Floor_Pre_Built.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="download-all-button"
          >
            <div className="button-left">
              <img
                className="download-icon"
                src="/images/availability/download-icon.svg"
                alt="download icon"
                aria-hidden
              />
            </div>
            <div className="button-right">16TH FLOOR - PARTIAL</div>
          </a>
        </DownloadButton>
      </CTAContainer>
    </MobileCol>
  );
};

export default AvailabilityMobile;
