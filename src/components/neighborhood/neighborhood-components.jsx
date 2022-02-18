import React from 'react';
import styled from 'styled-components';

import { mediaMin } from '../../stylesheets/MediaQueries';

const InfoList = styled.div`
  background-color: #e5e8ea;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4%;
  box-sizing: border-box;
`;

const InfoListItemContainer = styled.div`
  &:last-child {
    margin: 0;
  }
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 0 8px 0;
`;

const InfoListNumber = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'BrownStd Light';
  background: #000;
  color: #fff;
  margin-right: 2%;
  border-radius: 50%;
  font-size: 10px;
  height: 14px;
  width: 14px;
  transform: translateY(-1px);
  ${mediaMin.tabletLandscape`
  font-size: 12px;
  height: 18px;
  width: 18px;
  transform: translateY(-3px);
  `}
`;

const InfoListText = styled.span`
  font-family: 'BrownStd Light';
  font-weight: 300;
  letter-spacing: 0.3px;
  line-height: 12px;
  font-size: 10px;
  ${mediaMin.tabletLandscape`
    font-size: 12px;
  `}
`;

const InfoListTitle = styled.div`
  font-family: 'BrownStd Regular';
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.6px;
  line-height: 16px;
  margin-top: ${props => (props.first ? '0' : '24px')};
  margin-bottom: 16px;
`;

const InfoListItem = ({ destination, index }) => {
  return (
    <InfoListItemContainer>
      <InfoListNumber>{index + 1}</InfoListNumber>
      <InfoListText>{destination}</InfoListText>
    </InfoListItemContainer>
  );
};

const TabSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  justify-content: space-between;
  height: 75vh;
  opacity: ${props => (props.active ? '1' : '0')};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  transition: 0.5s all ease-in-out;
  ${mediaMin.tabletLandscape`
  height: 45vw;
`}
`;

const InfoListSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  justify-content: space-between;
  font-family: 'BrownStd Light';
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.4px;
  line-height: 24px;
  margin-bottom: 5%;
  max-width: 100%;
  opacity: ${props => (props.active ? '1' : '0')};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  transition: 0.5s all ease-in-out;
`;

const InfoTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: ${props => (props.active ? '#f5f6f7' : '#e5e8ea')};
  padding: 2% 4% 4% 4%;
  margin-bottom: 8px;
  cursor: ${props => (props.active ? 'pointer' : '')};
  height: 100%;
  max-height: ${props => (props.active ? '50%' : 'calc(16.67% - 6px)')};
  transition: max-height 0.25s ease-in-out, background-color 0.25s ease-in-out;
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoTabButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-family: 'BrownStd Bold';
  letter-spacing: 0.35px;
  line-height: 16px;
  min-height: 26px !important;
  align-items: center;
  font-size: 14px;
  margin-top: ${props => props.marginTop}px;
  ${mediaMin.tabletLandscape`
  font-size: 16px;
  `}
  .tab-icon {
    margin-right: 2.5%;
    height: 100%;
    width: auto;
  }
  // height: 26px;
`;

const InfoTabList = styled.div`
  display: block;
  opacity: 1;
  visibility: visible;
  overflow: hidden;
  justify-content: space-evenly;
  height: 100%;
  box-sizing: border-box;
  margin-top: ${props => props.marginTop}px;
`;

const InfoTabListRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  letter-spacing: 0.35px;
  line-height: 16px;
  max-height: 16px;
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom}px` : '16px'};
  font-size: 14px;
  &:last-child {
    margin-bottom: 0;
  }
  ${mediaMin.tabletLandscape`
font-size: 16px;
`}
  .destination {
    display: flex;
    flex-direction: row;
    padding-left: calc(26px + 2.5%);
    font-family: 'BrownStd Light';
  }
  .estimation {
    display: flex;
    flex-direction: row;
    font-family: 'BrownStd Regular';
    padding-right: calc(26px + 2.5%);
  }
`;

const ListSpacer = styled.div`
  height: ${props => props.spacerHeight}px;
`;

export {
  InfoList,
  InfoListTitle,
  InfoListItem,
  TabSection,
  InfoListSection,
  InfoTab,
  InfoTabButton,
  InfoTabList,
  InfoTabListRow,
  ListSpacer
};
