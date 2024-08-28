import React, { useState, useEffect } from "react"
import MediaQuery from "react-responsive"
import { BottomScrollListener } from "react-bottom-scroll-listener"

import { neighborhoodGallery } from "../../data/neighborhood"
import ImageGallery from "../building/image-gallery"
import Footer from "../footer"
import { BlueHeading } from "../utils"
import NeighborhoodDesktop from "./neighborhood-desktop"
import NeighborhoodMobile from "./neighborhood-mobile"

const Neighborhood = () => {
	const [galleryState, setGalleryState] = useState(false)
	const [galleryIndex, setGalleryIndex] = useState(0)
	const [footerShow, setFooterShow] = useState(false)
	const [currentMap, setCurrentMap] = useState(0)
	const [mapZoomed, setMapZoomed] = useState(true)

	const openGallery = index => {
		setGalleryState(true)
		setGalleryIndex(index)
	}

	const closeGallery = () => {
		setGalleryState(false)
	}

	const changeCurrentMap = id => {
		setCurrentMap(id)
		setMapZoomed(true)
	}

	const zoomIn = () => {
		setMapZoomed(true)
	}

	const zoomOut = () => {
		setMapZoomed(false)
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
		<div className="neighborhood-container">
			<BlueHeading />
			<MediaQuery minWidth={1024}>
				<NeighborhoodDesktop
					currentMap={currentMap}
					changeCurrentMap={changeCurrentMap}
					zoomIn={zoomIn}
					zoomOut={zoomOut}
					mapZoomed={mapZoomed}
				/>
			</MediaQuery>
			<MediaQuery maxWidth={1024}>
				<NeighborhoodMobile
					currentMap={currentMap}
					changeCurrentMap={changeCurrentMap}
					zoomIn={zoomIn}
					zoomOut={zoomOut}
					mapZoomed={mapZoomed}
				/>
			</MediaQuery>
			<Footer footerShow={footerShow} />
			<BottomScrollListener
				offset="10"
				onBottom={() => {
					setFooterShow(true)
				}}
			/>
			<ImageGallery
				photoArray={neighborhoodGallery}
				galleryState={galleryState}
				galleryIndex={galleryIndex}
				closeGallery={closeGallery}
			/>
		</div>
	)
}

export default Neighborhood
