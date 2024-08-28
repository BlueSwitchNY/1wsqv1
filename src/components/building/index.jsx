import React, { useState, useEffect } from "react"
import { BottomScrollListener } from "react-bottom-scroll-listener"
import MediaQuery from "react-responsive"

import Footer from "../footer"
import ImageGallery from "./image-gallery"
import { BlueHeading } from "../utils"
import BuildingDesktop from "./building-desktop"
import BuildingMobile from "./building-mobile"
import { buildingGallery } from "../../data/building"
import VideoOverlay from "../utils/video-overlay"

const Building = () => {
	const [galleryState, setGalleryState] = useState(false)
	const [videoState, setVideoState] = useState(false)
	const [galleryIndex, setGalleryIndex] = useState(0)
	const [footerShow, setFooterShow] = useState(false)

	const toggleVideoOverlay = () => {
		setVideoState(!videoState)
	}

	const openGallery = index => {
		setGalleryState(true)
		setGalleryIndex(index)
	}

	const closeGallery = () => {
		setGalleryState(false)
	}

	useEffect(() => {
		let htmlNode = document.getElementById("html")
		if (galleryState) {
			htmlNode.style.overflowY = "hidden"
		} else {
			htmlNode.style.overflowY = "auto"
		}
	}, [galleryState])

	return (
		<>
			<BlueHeading
				pageTitle="THE BUILDING"
				headerBG="/images/building/heading"
				openGallery={openGallery}
				toggleVideoOverlay={toggleVideoOverlay}
			/>
			<MediaQuery minWidth={1025}>
				<BuildingDesktop openGallery={openGallery} />
			</MediaQuery>
			<MediaQuery maxWidth={1024}>
				<BuildingMobile openGallery={openGallery} />
			</MediaQuery>
			<ImageGallery
				photoArray={buildingGallery}
				galleryState={galleryState}
				galleryIndex={galleryIndex}
				closeGallery={closeGallery}
			/>
			<VideoOverlay videoOverlayState={videoState} toggleVideo={toggleVideoOverlay} />
			<BottomScrollListener
				offset="10"
				onBottom={() => {
					setFooterShow(true)
				}}
			/>
			<Footer footerShow={footerShow} />
		</>
	)
}

export default Building
