import React from 'react';
import styled from 'styled-components';
import { mediaMin } from '../../stylesheets/MediaQueries';

const RightColInner = styled.div`
  display: flex;
  align-items: flex-end;
  height: 80%;
  right: 3%;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  ${mediaMin.tabletLandscape`
    flex-direction: column;
    justify-content: flex-end;
    width: 33%;
    position: fixed;
    `}
  a {
    font-family: 'BrownStd Light';
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    padding: 0 16px;
    align-items: center;
    border: 2px solid #fff;
    cursor: pointer;
    white-space: nowrap;
    height: 50px;
    width: 100%;
    justify-content: center;
    ${mediaMin.tabletLandscape`
        width: 256px;
        justify-content: center;
    `}
  }
`;

const DownloadAllButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: auto;
  .download-icon {
    height: 16px;
  }
`;

const RightCol = () => {
  return (
    <RightColInner>
      <a
        className="download-all-btn"
        href="images/availability/1WSQ_FLOOR_PLANS.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DownloadAllButton aria-label="download all floorplans as pdf">
          <span aria-hidden className="btn-text">
            FLOOR PLANS AND TEST FITS
          </span>
          <img
            className="download-icon"
            src="/images/availability/download-icon.svg"
            alt="download icon"
            aria-hidden
          />
        </DownloadAllButton>
      </a>
    </RightColInner>
  );
};

export default RightCol;
