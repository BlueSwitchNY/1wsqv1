import React from 'react';
import styled from 'styled-components';

const LegendRow = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  font-family: 'BrownStd Light';
  .leased-indicator {
    opacity: 0.8;
    margin-right: 5%;
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
    </LegendRow>
  );
};

export default Legend;
