import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FilmButton from "../home/film-button";
import { mediaMin } from '../../stylesheets/MediaQueries';

const HeadingContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 100%;
  background: #00041d;
  overflow: hidden;
  z-index: 300;
  position: fixed;
  top: 0;
  ${mediaMin.desktopXLarge`
    font-size: 1.5rem;
`}

`;

const HeadingContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HeadingContainerBottom = styled.div`
  flex-direction: column;
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  padding: 2em;
`;

const BottomLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 50%;
    width: 100%;
    a{
      font-family: "BrownStd Thin";
      color: #fff;
      font-size: 2rem;
    }
`;

const BottomVideoLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 3em;
    height: 30%;
    width: 100%;
`;

const BottomCTA = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    height: 20%;
    width: 100%;
      a {
        font-size: 1.25rem;
        margin-left: 1em;
        font-family: "BrownStd Thin";
        color: #fff;
      }
`;

const HeadingLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 50%;
  padding-left: 1.5em;
    img {
      height: 2.5em;
    }
    ${mediaMin.tabletLandscape`
      width: 15%;
      padding-right: 1em;
      align-items: flex-end;
    `}
    ${mediaMin.desktop`
      padding-left: 0;
    `}
    ${mediaMin.desktopLarge`
      width: 10%;
    `}
`;

const HeadingLinks = styled.div`
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-right: 10%;
    height: 100%;
    width: 85%;
    p {
      margin: 0 1em 0;
      font-family: "BrownStd Thin";
      color: #fff;
    }
    ${mediaMin.tabletLandscape`
      display: flex;
  `}
`;


const HamburgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 2em;
    width: 2em;
    margin-right: 2em;
    img {
      height: 100%;
      width: 100%;
    }
    ${mediaMin.tabletLandscape`
    display: none;
`}
`;

const HomeLinkLogo = {
  height:`100%`,
  width: `100%`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `inherit`
}

// const OpacityLayer = styled.div`
//   z-index: 0;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background-color: red;
// `;

// const LeftColumn = styled.div`
//   z-index: 100;
//   position: absolute;
//   left: 0;
//   top: 0;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: ${props => props.windowHeight}px;
//   opacity: ${props => 1 - props.scrollProgress / (props.windowHeight * 0.5)};
//   width: 100%;
//   padding: 72px 36px;
//   ${mediaMin.tablet`
//     width: 50%;
//   `}
//   ${mediaMin.tabletLandscape`
//     padding: 80px 48px;
//     width: auto;
//     height: ${props => props.windowHeight * 0.7}px;
//     opacity: ${props => 1 - props.scrollProgress / (props.windowHeight * 0.32)};
// `}
//   .scroll-down {
//     position: absolute;
//     bottom: 80px;
//     right: 77.25px;
//     height: 20px;
//     transform: ${props =>
//       props.bounced ? 'translateY(-10px)' : 'translateY(0)'};
//     transition: transform 0.5s ease;
//     ${mediaMin.tabletLandscape`
//       display: none;
//     `};
//   }
//   .bottom,
//   .top {
//     display: flex;
//     flex-direction: column;
//     font-family: 'BrownStd Bold';
//     a {
//       z-index: 100;
//       img {
//         width: 100%;
//       }
//     }
//     .page-title {
//       font-size: 18px;
//       letter-spacing: 1px;
//       line-height: 18px;
//       margin-top: 24px;
//     }
//     button {
//       padding: 8px 24px;
//       border: 2px solid #fff;
//       font-size: 12px;
//       line-height: 16px;
//       width: 120px;
//       margin-top: 24px;
//     }
//   }
// `;

// const FixedLogo = styled.div`
//   position: fixed;
//   z-index: 200;
//   transition: opacity 0.5s ease-in-out;
//   opacity: ${props => (props.scrollProgress >= props.windowHeight ? '1' : '0')};
//   height: ${props => props.windowHeight * 0.1}px;
//   margin-left: 36px;
//   ${mediaMin.tabletLandscape`
//     margin-left: 48px;
//     opacity: ${props =>
//       props.scrollProgress >= props.windowHeight * 0.6 ? '1' : '0'};
//          height: ${props => props.windowHeight * 0.06}px;
//   `}
//   a {
//     height: 100%;
//     display: flex;
//     align-items: center;
//     img {
//       height: 50%;
//     }
//   }
// `;

const BlueHeading = () => {
  const [openNav, setOpenNav] = useState(false)


  return (
    <HeadingContainer style={{height: openNav ? `100vh` : `5em`}}>
      <HeadingContainerTop style={{height: openNav ? `10%` : `100%`}}>
      <HeadingLogo>
        <Link style={HomeLinkLogo} to='/'>
          <img src='/images/logo-white.svg' alt='1WSQ Logo'/>
        </Link>
      </HeadingLogo>
      <HamburgerMenu onClick={() => setOpenNav(!openNav)}>
        {
          openNav ? <img src='/images/icons/close-nav-icon.svg' alt='1WSQ'/>
          : <img src='/images/icons/hamburger-icon.svg' alt='1WSQ'/>
        }
      </HamburgerMenu>
      <HeadingLinks>
        <Link to='/building/'>
          <p>BUILDING</p>
        </Link>
        <Link to='/availability/'>
          <p>AVAILABILITY</p>
        </Link>
        <Link to='/neighborhood/'>
          <p>NEIGHBORHOOD</p>
        </Link>
        <Link to='/incentives/'>
          <p>INCENTIVES</p>
        </Link>
        <Link to='/contact/'>
          <p>CONTACT</p>
        </Link>
      </HeadingLinks>
      </HeadingContainerTop>
      <HeadingContainerBottom style={{display: openNav ? `flex` : `none`}}>
        <BottomLinks>
        <Link to='/building/'>
            <p>BUILDING</p>
          </Link>
          <Link to='/availability/'>
            <p>AVAILABILITY</p>
          </Link>
          <Link to='/neighborhood/'>
            <p>NEIGHBORHOOD</p>
          </Link>
          <Link to='/incentives/'>
            <p>INCENTIVES</p>
          </Link>
          <Link to='/contact/'>
            <p>CONTACT</p>
          </Link>
        </BottomLinks>
        <BottomVideoLink>
            <FilmButton
              aria-label="play 1wsq film"
            />
        </BottomVideoLink>
        <BottomCTA>
          <Link to="/team">
            <div className="small-nav-link">TEAM</div>
          </Link>
          <Link to="/press">
            <div className="small-nav-link">PRESS</div>
          </Link>
          <Link to="/legal">
            <div className="small-nav-link">LEGAL</div>
          </Link>
        </BottomCTA>
      </HeadingContainerBottom>
    </HeadingContainer>
  );
};

export default BlueHeading;
