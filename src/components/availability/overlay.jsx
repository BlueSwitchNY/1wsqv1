/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import { mediaMin } from '../../stylesheets/MediaQueries';

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #00041d;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.active ? '1' : '0')};
  z-index: ${props => (props.active ? '100' : '-1')};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out,
  z-index 0.01s;
  flex-direction: column;
  padding: 72px 36px;
  box-sizing: border-box;
  font-family: 'BrownStd Light';
  margin-top: 1em;
  // margin-bottom: 0.5em;

  ${mediaMin.desktop`
    // padding: 80px 48px;
    flex-direction: row;
    // margin-bottom: 0.5em;
  `}
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 30%;
  ${mediaMin.tablet`
  height: 25%;
  `}
  ${mediaMin.desktop`
    height: 100%;
    width: 30%;
  `}
`;

const FactCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  height: 45vh;
  width: 100%;
  z-index: -1;
  ${mediaMin.tablet`
    height: 75vh;
  `}
  ${mediaMin.desktop`
    height: 100%;
    width: 70%;
  `};
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 24px;
  height: 30%;
`;

const OverlayTitle = styled.h6`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 24px;
  margin-bottom: 8px;
  ${mediaMin.desktop`
  margin-bottom: 32px;
  `}
`;

const OverlaySubTitle = styled.span`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.4px;
  line-height: 24px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: ${props => (props.active ? '1' : '0')};
  transition: 0.5s opacity ease-in-out;
  ${mediaMin.desktop`
    margin-top: 7.5%;
  `}
  .info-title,
  .info-value {
    display: flex;
    flex-direction: row;
    height: 24px;
  }
`;

const OverlaySelector = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  width: 100%;
  justify-content: space-between;
  ${mediaMin.tablet`
  width: 50%;
  `}
  ${mediaMin.desktop`
  width: 100%;
  justify-content: flex-start;
    margin-bottom: 78px;
  `}
`;

const OverlayButton = styled.button`
  font-family: 'BrownStd Regular';
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.6px;
  line-height: 16px;
  padding-bottom: 0.5%;
  cursor: pointer;
  opacity: ${props => (props.active ? '1' : '0.5')};
  border-bottom: ${props => (props.active ? '2px solid #000' : '')};
  ${mediaMin.desktop`
    margin-right: 32px;
  `}
  &:last-child {
    margin-right: 0;
  }
`;

const Floorplan = styled.img`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  z-index: -1
  opacity: ${props => (props.active ? '1' : '0')};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  ${mediaMin.tablet`
    padding: 0 9em 0;
  `}
  ${mediaMin.tabletLandscape`
    padding: 0 12em 0;
  `}
  ${mediaMin.desktop`
    padding: 2em;
  `}
`;

const Keyplan = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  img {
    max-width: 100%;
    max-height: 100%;
    ${mediaMin.tabletLandscape`
    padding-right: 42%;
    box-sizing: border-box;
    `}
  }
`;

const CloseOverlay = styled.button`
  position: absolute;
  cursor: pointer;
  z-index: 200;
  top: 72px;
  right: 36px;
  ${mediaMin.desktop`
    top: 80px;
    right: 48px;
  `}
`;

const AvailabilityOverlay = ({ active, closeOverlay, overlayInfo }) => {
  const [activeFloorplan, setActiveFloorplan] = useState(0);
  const [occupancyString, setOccupancyString] = useState('');
  const focusRef = useRef(null);

  const {
    title,
    floors,
    area,
    ceilingHeight,
    headCountOne,
    headCountTwo,
    headCountThree,
    headCountFour,
    floorplanOne,
    floorplanTwo,
    floorplanThree,
    floorplanFour,
    floorplanOneAlt,
    floorplanTwoAlt,
    floorplanThreeAlt,
    floorplanFourAlt
  } = overlayInfo;

  const updateActiveFloorplan = id => {
    setActiveFloorplan(id);
  };

  useEffect(() => {
    if (active) {
      handleOccupancyString();
      setTimeout(() => {
        focusRef.current.focus();
      }, 300);
    }
  }, [active]);

  const handleOccupancyString = () => {
    if (activeFloorplan === 0)
      setOccupancyString(`${headCountOne ? headCountOne : ''}`);
    if (activeFloorplan === 1)
      setOccupancyString(`${headCountTwo ? headCountTwo : ''}`);
    if (activeFloorplan === 2)
      setOccupancyString(`${headCountThree ? headCountThree : ''}`);
    if (activeFloorplan === 3)
      setOccupancyString(`${headCountFour ? headCountFour : ''}`);
  };

  useEffect(() => {
    handleOccupancyString();
  }, [activeFloorplan]);

  return (
    <Overlay active={active} aria-hidden={active}>
      <CloseOverlay aria-label="close floorplan overlay" onClick={closeOverlay}>
        <img
          aria-hidden
          src="/close.svg"
          alt="close availability overlay"
        />
      </CloseOverlay>
      <MediaQuery minWidth={1025}>
        <LeftCol>
          <OverlaySubTitle tabIndex="-1" ref={focusRef} className="sub-title">
            {floors}
          </OverlaySubTitle>
          <OverlayTitle className="title">{title}</OverlayTitle>
          <OverlaySelector>
            <OverlayButton
              active={activeFloorplan === 0}
              onClick={() => updateActiveFloorplan(0)}
            >
              CORE & SHELL PLAN
            </OverlayButton>
            {floorplanTwo && (
              <OverlayButton
                active={activeFloorplan === 1}
                onClick={() => updateActiveFloorplan(1)}
              >
                TEST FIT 1
              </OverlayButton>
            )}
            {floorplanThree && (
              <OverlayButton
                active={activeFloorplan === 2}
                onClick={() => updateActiveFloorplan(2)}
              >
                TEST FIT 2
              </OverlayButton>
            )}
            {floorplanFour && (
              <OverlayButton
                active={activeFloorplan === 3}
                onClick={() => updateActiveFloorplan(3)}
              >
                TEST FIT 3
              </OverlayButton>
            )}
          </OverlaySelector>

          <InfoSection active>
            <div className="info-title">RENTABLE AREA</div>
            <div className="info-value">{area}</div>
          </InfoSection>
          <InfoSection active>
            {/* <div className="info-title">CEILING HEIGHT</div>
            <div className="info-value">{ceilingHeight}</div> */}
          </InfoSection>
          <InfoSection active={occupancyString} aria-hidden={!occupancyString}>
            {/* <div className="info-title">HEAD COUNT</div>
            <div className="info-value">{occupancyString}</div> */}
          </InfoSection>
          <Keyplan>
            <img
              src="/images/floorplans/doc-key.png"
              alt="Keyplan of One Willoughby Square"
            />
          </Keyplan>
        </LeftCol>
        <RightCol>
          <Floorplan
            active={activeFloorplan === 0}
            aria-hidden={activeFloorplan === 0 && active ? false : true}
            src={floorplanOne}
            alt={floorplanOneAlt}
          />
          <Floorplan
            active={activeFloorplan === 1}
            aria-hidden={activeFloorplan === 1 && active ? false : true}
            src={floorplanTwo}
            alt={floorplanTwoAlt}
          />
          <Floorplan
            active={activeFloorplan === 2}
            aria-hidden={activeFloorplan === 2 && active ? false : true}
            src={floorplanThree}
            alt={floorplanThreeAlt}
          />
          <Floorplan
            active={activeFloorplan === 3}
            aria-hidden={activeFloorplan === 3 && active ? false : true}
            src={floorplanFour}
            alt={floorplanFourAlt}
          />
        </RightCol>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <LeftCol>
          <OverlaySubTitle tabIndex="-1" ref={focusRef} className="sub-title">
            {floors}
          </OverlaySubTitle>
          <OverlayTitle className="title">{title}</OverlayTitle>
          <OverlaySelector>
            <OverlayButton
              active={activeFloorplan === 0}
              onClick={() => updateActiveFloorplan(0)}
            >
              CORE & SHELL PLAN
            </OverlayButton>
            {floorplanTwo && (
              <OverlayButton
                active={activeFloorplan === 1}
                onClick={() => updateActiveFloorplan(1)}
              >
                TEST FIT 1
              </OverlayButton>
            )}
            {floorplanThree && (
              <OverlayButton
                active={activeFloorplan === 2}
                onClick={() => updateActiveFloorplan(2)}
              >
                TEST FIT 2
              </OverlayButton>
            )}
            {floorplanFour && (
              <OverlayButton
                active={activeFloorplan === 3}
                onClick={() => updateActiveFloorplan(3)}
              >
                TEST FIT 3
              </OverlayButton>
            )}
          </OverlaySelector>
        </LeftCol>
        <RightCol>
          <Floorplan
            active={activeFloorplan === 0}
            aria-hidden={activeFloorplan === 0 && active ? false : true}
            src={floorplanOne}
            alt={floorplanOneAlt}
          />
          <Floorplan
            active={activeFloorplan === 1}
            aria-hidden={activeFloorplan === 1 && active ? false : true}
            src={floorplanTwo}
            alt={floorplanTwoAlt}
          />
          <Floorplan
            active={activeFloorplan === 2}
            aria-hidden={activeFloorplan === 2 && active ? false : true}
            src={floorplanThree}
            alt={floorplanThreeAlt}
          />
          <Floorplan
            active={activeFloorplan === 3}
            aria-hidden={activeFloorplan === 3 && active ? false : true}
            src={floorplanFour}
            alt={floorplanFourAlt}
          />
        </RightCol>
        <BottomRow>
          <FactCol>
            <InfoSection active>
              <div className="info-title">RENTABLE AREA</div>
              <div className="info-value">{area}</div>
            </InfoSection>
            <InfoSection active>
              {/* <div className="info-title">CEILING HEIGHT</div>
              <div className="info-value">{ceilingHeight}</div> */}
            </InfoSection>
            <InfoSection
              active={occupancyString}
              aria-hidden={!occupancyString}
            >
              {/* <div className="info-title">HEAD COUNT</div>
              <div className="info-value">{occupancyString}</div> */}
            </InfoSection>
          </FactCol>
          <Keyplan>
            <img
              src="/images/floorplans/doc-key.png"
              alt="Keyplan of One Willoughby Square"
            />
          </Keyplan>
        </BottomRow>
      </MediaQuery>
    </Overlay>
  );
};

export default AvailabilityOverlay;
