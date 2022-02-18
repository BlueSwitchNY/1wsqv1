import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaMin } from "../../stylesheets/MediaQueries";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #00041d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  ${mediaMin.tabletLandscape`
    height: 20vh;
  `}
  ${mediaMin.desktopLarge`
    height: 30vh;
  `}
  a {
    opacity: ${(props) => (props.footerShow ? "1" : "0")};
    transition: opacity 0.5s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      color: #fff;
      font-family: "BrownStd Thin";
      font-size: 2rem;
      ${mediaMin.desktopLarge`
        font-size: 3rem;
    `}
      ${mediaMin.desktopXLarge`
    font-size: 4rem;
    `}
    }
    img {
      height: 15px;
      margin-left: 5%;
    }
  }
`;

const Footer = ({ footerShow, noMargin }) => {
  return (
    <FooterContainer footerShow={footerShow} noMargin={noMargin}>
      <Link to="/contact">
        <span>CONTACT</span>
        <img src="/arrow-right.svg" alt="link to contact page" />
      </Link>
    </FooterContainer>
  );
};

export default Footer;
