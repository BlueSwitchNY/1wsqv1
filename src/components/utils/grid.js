import styled from "styled-components";
import { mediaMin } from "../../stylesheets/MediaQueries";

const Row = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-top: 100vh;
  flex-direction: column;
  padding: 72px 36px;
  ${mediaMin.tabletLandscape`

  padding: 80px 48px;
    flex-direction: row;
    margin-top: 70vh;
  `}
`;

const BuildingRow = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-top: 100vh;
  flex-direction: column;
  padding: 72px 0 0 36px;
  ${mediaMin.tabletLandscape`

  padding: 80px 48px;
    flex-direction: row;
    margin-top: 70vh;
  `}
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaMin.tabletLandscape`
  width: 25%;
  padding-right: 60px;
  `}
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaMin.tabletLandscape`
  width: 75%;

  `}
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  box-sizing: border-box;
  transition: opacity 0.25s ease-in-out;
  ${mediaMin.tabletLandscape`
    height: 15em;
    width: 100%;
    padding-left: 4em;
    padding-right: 45%;
    padding-bottom: 2em;
  `}
  ${mediaMin.desktopXLarge`
    height: 20em;
  `}
  h5 {
    font-family: "BrownStd Bold";
    height: 18px;
    color: #000;
    font-size: 18px;
    letter-spacing: 1px;
    margin-bottom: 1em;
    ${mediaMin.desktopXLarge`
      font-size: 1.75rem;
  `}
  }
  p {
    font-family: "BrownStd Light";
    color: #000;
    font-size: 16px;
    letter-spacing: 0.4px;
    line-height: 24px;
    ${mediaMin.desktopXLarge`
    font-size: 1.75rem;
`}
  }
`;

const AltTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  box-sizing: border-box;
  transition: opacity 0.25s ease-in-out;
  // background: gold;
  ${mediaMin.tabletLandscape`
    justify-content: flex-start;
    width: 100%;
    padding-left: 4em;
    padding-right: 20%;
    padding-top: 5.5em;
  `}
  ${mediaMin.desktopXLarge`
    height: 20em;
  `}
  h5 {
    font-family: "BrownStd Bold";
    height: 18px;
    color: #000;
    font-size: 18px;
    letter-spacing: 1px;
    margin-bottom: 1em;
    ${mediaMin.desktopXLarge`
      font-size: 1.75rem;
  `}
  }
  p {
    font-family: "BrownStd Light";
    color: #000;
    font-size: 16px;
    letter-spacing: 0.4px;
    line-height: 24px;
    ${mediaMin.desktopXLarge`
    font-size: 1.75rem;
`}
  }
`;

const MobileTextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 2em;
  h5 {
    font-family: "BrownStd Bold";
    height: 18px;
    margin-bottom: 24px;
    color: #000;
    font-size: 18px;
    margin-bottom: 5%;
    letter-spacing: 1px;
    line-height: 18px;
    margin-bottom: 5%;
  }
  h6 {
    font-family: "BrownStd Light";
    color: #000;
    font-size: 24px;
    letter-spacing: 0.4px;
    line-height: 24px;
    margin: 8px 0 0 0;
    font-weight: 300;
  }
  p {
    font-family: "BrownStd Light";
    color: #000;
    font-size: 16px;
    letter-spacing: 0.4px;
    line-height: 24px;
  }
  a {
    color: #000;
    &:visited,
    &:hover {
      color: #000;
    }
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .responsive-image-container {
    margin-bottom: 80px;
  }
`;

const Spacer = styled.div`
  height: 40px;
  ${mediaMin.tabletLandscape`
    height: 80px;
  `}
`;

const HorizontalSlider = styled.div`
  display: flex;
  flex-direction: row;
  height: 30vh;
  margin-bottom: 24px;
  overflow-x: scroll;
  overflow-y: hidden;
  .responsive-image-container {
    margin-right: 4vw;
    max-width: unset;
    .repsonsive-image {
      height: 100%;
      width: 100%;
    }
  }
`;

const ButtonRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 10%;
  justify-content: space-between;
  ${mediaMin.tabletLandscape`
    justify-content: flex-start;
  `}
`;

const MapButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 2.5em;
  width: 2.5em;
  margin-bottom: 1em;
  border-radius: 2.5em;
  background-size: cover;
  background: position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const BodyContainer = styled.div`
  position: relative;
  height: 148px;
`;

const BodyText = styled.p`
  position: absolute;
  color: #000;
  font-size: 16px;
  font-family: "BrownStd Light";
  margin-bottom: 5%;
  letter-spacing: 0.4px;
  line-height: 24px;
  opacity: ${(props) => (props.active ? "1" : "0")};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  transition: all 0.5s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5em;
  width: 100%;
`;

const AltContainer = styled.div`
  padding-top: 5em;
  width: 100%
  display: flex;
  flex-direction: row;
  ${mediaMin.desktopXLarge`
    padding-top: 10em;
  `}
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%
  // background: royalblue;
  justify-content: flex-start;
`;

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%
  padding: 5em 2em 2em 0;
`;

const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-family: "BrownStd Regular";
  height: 2em;
  width: 10em;
  ${mediaMin.desktopXLarge`
    width: 16em;
    margin-bottom: 1em;
  `}
    p {
      cursor: pointer;
    }
`;

const MapContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 25em;
    width: 95%;
    padding: 1em;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
    margin-bottom: 1em;
    ${mediaMin.tablet`
    height: 35em;
    width: 85%;
    `}
    ${mediaMin.tabletLandscape`
    height: 35em;
    width: 100%;
    `}
    ${mediaMin.desktop`
    width: 100%;
    height: 40em;
    `}
    ${mediaMin.desktopLarge`
      height: 50em;
    `}
    ${mediaMin.desktopXLarge`
    height: 70em;
  `}
`;


export {
  Row,
  BuildingRow,
  LeftCol,
  RightCol,
  TextSection,
  AltTextSection,
  MobileTextSection,
  ImageSection,
  Spacer,
  HorizontalSlider,
  ButtonRow,
  MapButton,
  BodyContainer,
  BodyText,
  Container,
  AltContainer,
  ContainerLeft,
  ContainerRight,
  LinkSection,
  MapContainer,
};
