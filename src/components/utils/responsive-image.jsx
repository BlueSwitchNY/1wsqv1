import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { mediaMin } from "../../stylesheets/MediaQueries"

const ResponsiveImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	// height: 50em;
	height: 30em;
	width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	margin-bottom: 1em !important;
	${mediaMin.tablet`
    height: 37em;
  `}
	${mediaMin.tabletLandscape`
    height: 40em;
`}
  ${mediaMin.desktop`
    height: 50em;
  `} 
  ${mediaMin.desktopLarge`
  height: 60em;
`}
  ${mediaMin.desktopXLarge`
  height: 80em;
  `}
`

const ContactLinks = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	font-family: "BrownStd Light";
	a {
		font-size: 1.5rem;
		margin: 0 1.5em 0;
		color: #fff;
		transition: transform 0.2s ease-in-out;
		${mediaMin.desktopXLarge`
      font-size: 2.5rem
  `}
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
`

const ResponsiveImage = props => {
	const { srcPath, displayLinks } = props

	return (
		<ResponsiveImageContainer
			className="responsive-image-container"
			style={{ backgroundImage: `url(${srcPath}.jpg)` }}>
			<ContactLinks style={{ display: displayLinks ? `inherit` : `none` }}>
				<Link to="/team">
					<div className="small-nav-link">TEAM</div>
				</Link>
				<Link to="/press">
					<div className="small-nav-link">PRESS</div>
				</Link>
				<Link to="/legal">
					<div className="small-nav-link">LEGAL</div>
				</Link>
			</ContactLinks>
		</ResponsiveImageContainer>
	)
}

export default ResponsiveImage
