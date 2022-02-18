import React from 'react';
import styled from 'styled-components';

import { mediaMin } from '../../stylesheets/MediaQueries';
import NeighborhoodMap from './neighborhood-map';
import NeighborhoodInfo from './neighborhood-info';

const NeighborhoodGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${mediaMin.tabletLandscape`
    // padding-right: 30%;
  `}
`;

const NeighborhoodMapContainer = ({
  currentMap,
  mapZoomed,
  zoomIn,
  zoomOut
}) => {
  return (
    <NeighborhoodGrid>
      <NeighborhoodMap
        currentMap={currentMap}
        mapZoomed={mapZoomed}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
      />
      <NeighborhoodInfo currentMap={currentMap} />
    </NeighborhoodGrid>
  );
};

export default NeighborhoodMapContainer;
