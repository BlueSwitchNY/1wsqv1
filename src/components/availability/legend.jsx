import React from 'react';
import styled from 'styled-components';

const LegendRow = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  font-family: 'BrownStd Light';
  .leased-indicator {
    opacity: 0.8;
    margin-right: 3%;
  }
  .available-indicator {
    opacity: 0.8;
    margin-right: 3%;
    margin-left:15px;
  }
`;

const Legend = () => {
  return (
    <LegendRow>
      <img
        className="leased-indicator"
        src="/images/availability/leased-icon.svg"
        alt="leased indicator"
      />
      LEASED
      <img
        className="available-indicator"
        src="/images/availability/available-icon.svg"
        alt="available indicator"
      />
      AVAILABLE
    </LegendRow>
  );
};

export default Legend;
