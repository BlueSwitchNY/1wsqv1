import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BackgroundVideo from "./background-video";
import FilmButton from "./film-button";
import VideoOverlay from "../utils/video-overlay";
import { mediaMin } from "../../stylesheets/MediaQueries";

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  text-decoration: none;
  border-bottom: none;
  z-index: 1;
  font-family: "BrownStd Thin";
  position: fixed;
`;

const NavRow = styled.div`
  display: flex;
  width: 100%;
  height 100%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 3em;
  flex-direction: column;
  ${mediaMin.tabletLandscape`
    padding: 2.5em 5em;
  `}
`;

const LeftColumn = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
  top: 5%;
  transform: translate(0, 0);
  .home-logo {
    img {
      width: 100%;
      
    }
  }
  ${mediaMin.tablet`

  `}
  ${mediaMin.tabletLandscape`
  width: 100%;
  height: 60%;
  top: 0;
  height: 100%;
  bottom: unset;
  left: ;
  text-align: right;
  .home-logo {
    img {
      width: 75%;
    }
  `}
`;

const RightColumn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  ${mediaMin.tabletLandscape`
    
    flex-direction: column;
    width: 100%;
    height: 100%;

  `}
`;

const MainNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 90%;
  text-align: right;
  font-size: 2em;
  a {
    color: #fff;
    margin-top: 25px;

    line-height: 32px;
    ${mediaMin.tablet`
     
    `}
    ${mediaMin.tabletLandscape`
    
      margin-top: 16px;
      transition: transform .2s ease-in-out;
      `}
    &:hover {
      color: #fff;
      transform: translateX(4px);
    }
    &:visited {
      color: #fff;
    }
  }
`;

const SmallNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 18px;
  margin-top: 3em;
  font-family: "BrownStd Light";
  a {
    color: #fff;
    transition: transform 0.2s ease-in-out;
    &:hover {
      color: #fff;
      transform: translateX(-4px);
    }
    &:visited {
      color: #fff;
    }
    &:first-child {
      margin-top: 0;
    }
  }
  button {
    ${mediaMin.tabletLandscape`
    margin-top: 2em;
    `}
    &:first-child {
      margin-top: 0;
    }
  }
`;

const ContactNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-family: "BrownStd Light";
  a {
    font-size: 1.25em;
    margin-left: 1em;
    color: #fff;
    transition: transform 0.2s ease-in-out;
    &:hover {
      color: #fff;
      transform: translateX(-4px);
    }
    &:visited {
      color: #fff;
    }
    &:first-child {
      margin-top: 0;
    }
  }
`;

const Home = () => {
  const [videoState, setVideoState] = useState(false);
  const toggleVideoOverlay = () => {
    setVideoState((prev) => !prev);
  };
  return (
    <>
      <HomeContainer>
        <NavRow>
          <LeftColumn left>
            <Link
              to="/"
              className="home-logo"
              aria-label="one willoughby square"
            >
              <img src="/images/logo-text-white.svg" alt="1WSQ Logo" />
            </Link>
            <MainNav>
              <Link to="/building">BUILDING</Link>
              <Link to="/availability">AVAILABILITY</Link>
              <Link to="/neighborhood">NEIGHBORHOOD</Link>
              <Link to="/incentives">INCENTIVES</Link>
              <Link to="/contact">CONTACT</Link>

            </MainNav>
          </LeftColumn>
          <RightColumn right>
            <SmallNav>
              <FilmButton
                onClick={toggleVideoOverlay}
                aria-label="play 1wsq film"
              />
            </SmallNav>
            <ContactNav>
              <Link to="/team">
                <div className="small-nav-link">TEAM</div>
              </Link>
              <Link to="/press">
                <div className="small-nav-link">PRESS</div>
              </Link>
              <Link to="/legal">
                <div className="small-nav-link">LEGAL</div>
              </Link>
            </ContactNav>
          </RightColumn>
        </NavRow>
        <BackgroundVideo />
      </HomeContainer>
      <VideoOverlay
        videoOverlayState={videoState}
        toggleVideo={toggleVideoOverlay}
      />
    </>
  );
};

export default Home;
