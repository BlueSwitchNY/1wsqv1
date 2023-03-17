import React from 'react';
import styled from 'styled-components';
import { mediaMin } from '../../stylesheets/MediaQueries';

const AvailabilitySelector = styled.div`
  color: #fff;
  font-family: 'BrownStd Light';
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  height: 80%;
  ${mediaMin.tabletLandscape`
  height: 90%;
  `}
`;

const Section = styled.div`
  opacity: ${props => (props.faded ? '0.3' : '1')};
  transition: 0.25s opacity ease-in-out;
  margin-bottom: 3em;
  .availability-section-title {
    font-family: 'BrownStd Light';
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 24px;
    margin-bottom: 16px;
  }
  .availability-section-floors {
    font-family: 'BrownStd Thin';
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.4px;
    line-height: 24px;
  }
  .floorplan-btn {
    position: relative;
    text-decoration: none;
    display: inline-block;
    padding-bottom: 2%;
    transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: #0000ff;
      z-index: 1;
      height: 2px;
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
      opacity: 1 !important;
      &::before {
        width: 100%;
      }

      &::after {
        left: 100%;
        width: 0%;
        transition: all ease 0.2s;
      }
    }
  }
`;

const Selector = ({
  hoverState,
  updateMouseOver,
  openOverlayHigh,
  openOverlayMid,
  openOverlayLow,
  openOverlaySuper
}) => {
  return (
    <AvailabilitySelector>
      <Section
        faded={hoverState && hoverState !== 'HIGH'}
        onMouseEnter={() => updateMouseOver('HIGH')}
        onMouseLeave={() => updateMouseOver('')}
      >
        <div className="availability-section-floors">Floors 27-54</div>
        <div className="availability-section-title">HIGH RISE</div>
        <button className="floorplan-btn" onClick={openOverlayHigh}>
          FLOOR PLAN
        </button>
      </Section>
      <Section
        faded={hoverState && hoverState !== 'MID'}
        onMouseEnter={() => updateMouseOver('MID')}
        onMouseLeave={() => updateMouseOver('')}
      >
        <div className="availability-section-floors">Floors 20-26</div>
        <div className="availability-section-title">MID RISE</div>
        <button className="floorplan-btn" onClick={openOverlayMid}>
          FLOOR PLAN
        </button>
      </Section>
      <Section
        faded={hoverState && hoverState !== 'LOW'}
        onMouseEnter={() => updateMouseOver('LOW')}
        onMouseLeave={() => updateMouseOver('')}
      >
        <div className="availability-section-floors">Floors 7-9</div>
        <div className="availability-section-title">LOW RISE</div>
        <button className="floorplan-btn" onClick={openOverlayLow}>
          FLOOR PLAN
        </button>
      </Section>
      <Section
        faded={hoverState && hoverState !== 'SUPER'}
        onMouseEnter={() => updateMouseOver('SUPER')}
        onMouseLeave={() => updateMouseOver('')}
      >
        <div className="availability-section-floors">Floors 7, 15, 25, 34</div>
        <div className="availability-section-title">SUPERFLOOR</div>
        <button className="floorplan-btn" onClick={openOverlaySuper}>
          FLOOR PLAN
        </button>
      </Section>
    </AvailabilitySelector>
  );
};

export default Selector;
