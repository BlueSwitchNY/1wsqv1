import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { BottomScrollListener } from "react-bottom-scroll-listener"

import Footer from "../footer"
import { Row, LeftCol, RightCol, TextSection, Spacer } from "../utils/grid"
import { BlueHeading } from "../utils"
import { team } from "../../data/team"
import { mediaMin } from "../../stylesheets/MediaQueries"

const TeamText = styled.div`
	display: flex;
	flex-direction: column;
	font-family: "BrownStd Light";
	margin-bottom: 80px;
	box-sizing: border-box;
	${mediaMin.tabletLandscape`
  padding-right: 25%;
  `}
	.title {
		font-size: 16px;
		letter-spacing: 0.4px;
		line-height: 24px;
		margin-bottom: 8px;
		${mediaMin.desktopXLarge`
    font-size: 1.5rem;
  `};
	}
	.name {
		font-size: 24px;
		letter-spacing: 1px;
		line-height: 24px;
		margin-bottom: 16px;
		${mediaMin.desktopXLarge`
    font-size: 1.75rem;
  `};
	}
	.bio {
		font-size: 16px;
		font-weight: 300;
		letter-spacing: 0.4px;
		line-height: 24px;
		margin-bottom: 24px;
		${mediaMin.desktopXLarge`
      font-size: 1.5rem;
    `};
	}
	.link {
		font-size: 12px;
		font-family: "BrownStd Bold";
		letter-spacing: 0.6px;
		line-height: 16px;
		color: #000;
		${mediaMin.desktopXLarge`
    font-size: 1.5rem;
  `};
		&:hover,
		&:visited {
			color: #000;
		}
	}
`

const TeamPageContainer = styled.div`
  width: 100%
  display: flex;
  flex-direction: column;
 `

const TeamPageContainerInner = styled.div`
 width: 100%
 display: flex;
 flex-direction: column;
 padding: 2em;
 box-sizing: border-box;
 ${mediaMin.tablet`
    padding: 2em;
 `};
 ${mediaMin.desktop`
  flex-direction: row;
  justify-content: flex-end;
`};
`

const TeamContentLeft = styled.div`
	height: 40%;
	width: 100%;
	margin-top: 7em;
	padding: 2em 0 2em;
	box-sizing: border-box;
	font-family: "BrownStd Bold";
	h5 {
		${mediaMin.desktopXLarge`
        font-size: 2rem;
      `};
	}
	${mediaMin.tabletLandscape`
    height: 30%;
  `};
	${mediaMin.desktop`
    height: 100%;
    width: 20%;
    padding-left: 4em;
    position: fixed;
    top: 0;
    left: 0;
  `};
	${mediaMin.desktopXLarge`
    padding-top: 10em;
`};
`

const TeamContentRight = styled.div`
	width: 100%;
	box-sizing: border-box;
	${mediaMin.desktop`
  height: 100%;
  width: 75%;
  margin-top: 7em;
  `};
	${mediaMin.desktopXLarge`
  padding-top: 10em;
`};
`

const TeamItem = ({ team }) => {
	return (
		<TeamText key={team.name}>
			<div className="title">{team.title}</div>
			<div className="name">{team.name}</div>
			<div className="bio">{team.bio}</div>
			<a className="link" href={team.url} target="_blank" rel="noopener noreferrer">
				VIEW WEBSITE
			</a>
		</TeamText>
	)
}

const Team = () => {
	const [footerShow, setFooterShow] = useState(false)
	// const [activeSection, setActiveSection] = useState(0);
	// const [windowHeight, setWindowHeight] = useState(0);

	// const sectionRef1 = useRef(null);

	// const refArray = [sectionRef1];

	// const handleScroll = () => {
	//   const transitionPoint = windowHeight * 0.1 + 80 + window.scrollY;
	//   refArray.forEach((ref, idx) => {
	//     const top = ref.current.offsetTop;
	//     const bottom = ref.current.offsetTop + ref.current.offsetHeight;
	//     if (idx === 0 && transitionPoint < top) {
	//       setActiveSection(0);
	//     } else if (
	//       activeSection === 0 &&
	//       idx === 0 &&
	//       transitionPoint >= bottom
	//     ) {
	//       setActiveSection(1);
	//     } else if (transitionPoint >= top && transitionPoint < bottom) {
	//       setActiveSection(idx + 1);
	//     }
	//   });
	// };

	// useEffect(() => {
	//   setWindowHeight(document.documentElement.clientHeight);
	//   window.addEventListener('resize', () => {
	//     setWindowHeight(document.documentElement.clientHeight);
	//   });
	//   return () => {
	//     window.removeEventListener('resize', () => {
	//       setWindowHeight(document.documentElement.clientHeight);
	//     });
	//   };
	// }, []);

	// useEffect(() => {
	//   document.addEventListener('scroll', handleScroll);
	//   return () => {
	//     document.removeEventListener('scroll', handleScroll);
	//   };
	// });

	const generateTeam = () => {
		return team.map(el => {
			return <TeamItem team={el} />
		})
	}

	return (
		<TeamPageContainer>
			<BlueHeading />
			<TeamPageContainerInner>
				<TeamContentLeft>
					<h5>TEAM</h5>
				</TeamContentLeft>
				<TeamContentRight>{generateTeam()}</TeamContentRight>
			</TeamPageContainerInner>
			<Footer footerShow={footerShow} />
			<BottomScrollListener
				offset="10"
				onBottom={() => {
					setFooterShow(true)
				}}
			/>
		</TeamPageContainer>
	)
}

export default Team
