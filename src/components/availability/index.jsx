import React, { useState, useEffect } from "react"
import styled from "styled-components"
import MediaQuery from "react-responsive"
import { BottomScrollListener } from "react-bottom-scroll-listener"
import { BlueHeading } from "../utils"
import AvailabilityOverlay from "./overlay"
import Footer from "../footer"

import {
	overlayMidInfo,
	penthouseInfo,
	overlaySuperInfo,
	overlayHighInfo,
} from "../../data/availability"
import AvailabilityDesktop from "./availability-desktop"
import AvailabilityMobile from "./availability-mobile"
import { mediaMin } from "../../stylesheets/MediaQueries"

const AvailabilityPage = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`

const AvailabilityContent = styled.div`
	box-sizing: border-box;
	background-color: #00041d;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	height: auto;
	padding: 1em;
	${mediaMin.tabletLandscape`
    height: 100vh;
    flex-direction: row;
    padding: 4em;
  `}
`

const Availability = () => {
	const [overlayState, setOverlayState] = useState("")
	const [overlayInfo, setOverlayInfo] = useState("")
	const [hoverState, setHoverState] = useState("")
	const [footerShow, setFooterShow] = useState(false)

	const openOverlayHigh = () => {
		setOverlayState("PENT")
		setOverlayInfo(penthouseInfo)
	}

	const openOverlayMid = () => {
		setOverlayState("HIGH")
		setOverlayInfo(overlayHighInfo)
	}

	const openOverlayLow = () => {
		setOverlayState("MID")
		setOverlayInfo(overlayMidInfo)
	}

	const openOverlaySuper = () => {
		setOverlayState("SUPER")
		setOverlayInfo(overlaySuperInfo)
	}

	const closeOverlay = () => {
		setOverlayState("")
	}

	const updateMouseOver = string => {
		setHoverState(string)
	}

	useEffect(() => {
		let htmlNode = document.getElementById("html")

		if (overlayState !== "") {
			htmlNode.style.overflowY = "hidden"
		} else {
			htmlNode.style.overflowY = "auto"
		}
	}, [overlayState])

	return (
		<AvailabilityPage>
			<BlueHeading pageTitle="THE BUILDING" headerBG="/images/building/heading" />
			<AvailabilityContent aria-hidden={overlayState !== ""}>
				<MediaQuery minWidth={1024}>
					<AvailabilityDesktop
						hoverState={hoverState}
						updateMouseOver={updateMouseOver}
						openOverlayHigh={openOverlayHigh}
						openOverlayMid={openOverlayMid}
						openOverlayLow={openOverlayLow}
						openOverlaySuper={openOverlaySuper}
					/>
				</MediaQuery>
				<MediaQuery maxWidth={1023}>
					<AvailabilityMobile
						updateMouseOver={updateMouseOver}
						openOverlayHigh={openOverlayHigh}
						openOverlayMid={openOverlayMid}
						openOverlayLow={openOverlayLow}
						openOverlaySuper={openOverlaySuper}
					/>
				</MediaQuery>
			</AvailabilityContent>
			<Footer footerShow={footerShow} noMargin />
			<AvailabilityOverlay
				aria-hidden={overlayState === ""}
				active={overlayState !== ""}
				closeOverlay={closeOverlay}
				overlayInfo={overlayInfo}
			/>
			<BottomScrollListener
				offset="10"
				onBottom={() => {
					setFooterShow(true)
				}}
			/>
		</AvailabilityPage>
	)
}

export default Availability
