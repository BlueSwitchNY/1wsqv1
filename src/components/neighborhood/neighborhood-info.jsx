import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"

import {
	InfoList,
	InfoListTitle,
	InfoListItem,
	TabSection,
	InfoListSection,
	InfoTab,
	InfoTabButton,
	InfoTabList,
	InfoTabListRow,
	ListSpacer,
} from "./neighborhood-components"
import { diningList, amenitiesList, travelTimes } from "../../data/neighborhood"

const { trainToManhattan, trainToBrooklyn, walkToBrooklyn, toAirports } = travelTimes

const NeighborhoodInfoPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	// height: 40%;
	position: relative;
	// background: green;
`

const NeighborhoodInfo = ({ currentMap }) => {
	const [activeTab, setActiveTab] = useState(0)
	const [marginTop, setMarginTop] = useState(0)
	const [marginBottom, setMarginBottom] = useState(0)
	const [spacerHeight, setSpacerHeight] = useState(0)

	const titleRef = useRef(null)
	const backupTitleRef = useRef(null)
	const contentRef = useRef(null)
	const contentRefOne = useRef(null)
	const contentRefTwo = useRef(null)
	const contentRefThree = useRef(null)
	const listRefOne = useRef(null)
	const listRefTwo = useRef(null)
	const tabRef = useRef(null)

	const setMargins = () => {
		let marginTopVar, paddingTop

		if (activeTab === 3) {
			marginTopVar = backupTitleRef.current.parentNode.clientHeight
			paddingTop = window
				.getComputedStyle(backupTitleRef.current.parentNode)
				.getPropertyValue("padding-top")
			paddingTop = parseInt(paddingTop) * 2
			marginTopVar = marginTopVar - paddingTop - backupTitleRef.current.offsetHeight
			marginTopVar = marginTopVar / 2
		} else {
			marginTopVar = titleRef.current.parentNode.clientHeight
			paddingTop = window
				.getComputedStyle(titleRef.current.parentNode)
				.getPropertyValue("padding-top")
			paddingTop = parseInt(paddingTop) * 2
			marginTopVar = marginTopVar - paddingTop - titleRef.current.offsetHeight
			marginTopVar = marginTopVar / 2
		}

		let marginBottom

		switch (activeTab) {
			case 0:
				marginBottom = parseInt(contentRef.current.offsetHeight) - 80
				break
			case 1:
				marginBottom = parseInt(contentRefOne.current.offsetHeight) - 80
				break
			case 2:
				marginBottom = parseInt(contentRefTwo.current.offsetHeight) - 80
				break
			case 3:
				marginBottom = parseInt(contentRefThree.current.offsetHeight) - 80
				break
			default:
				break
		}

		setMarginTop(marginTopVar)
		setMarginBottom(marginBottom / 6)

		adjustSpacer()
	}

	const adjustSpacer = () => {
		const spacerHeightArray = [
			listRefOne.current.offsetHeight,
			listRefTwo.current.offsetHeight,
			tabRef.current.offsetHeight,
		]

		const newSpacerHeight = spacerHeightArray.sort((a, b) => {
			return b - a
		})[0]

		setSpacerHeight(newSpacerHeight)
	}

	const changeTab = id => {
		if (id !== activeTab) {
			setActiveTab(id)
		}
	}

	const generateList = section => {
		const result = []
		section.forEach((el, idx) => {
			result.push(<InfoListTitle first={idx === 0}>{el.sectionTitle}</InfoListTitle>)
			el.destinations.forEach((destination, idx2) => {
				result.push(<InfoListItem destination={destination} index={idx2} />)
			})
		})
		return result
	}

	const generateTravelTimes = list =>
		list.map((el, idx) => (
			<InfoTabListRow marginBottom={marginBottom}>
				<span className="destination">{el.destination.replace(/ /g, "\u00a0")}</span>
				<span className="estimation">{el.eta.replace(/ /g, "\u00a0")}</span>
			</InfoTabListRow>
		))

	useEffect(() => {
		setMargins()
		window.addEventListener("resize", setMargins)
		return () => {
			window.removeEventListener("resize", setMargins)
		}
	}, [])

	useEffect(() => {
		adjustSpacer()
	}, [currentMap])

	return (
		<NeighborhoodInfoPage>
			<ListSpacer spacerHeight={spacerHeight} />
			<TabSection
				active={currentMap === 0}
				aria-hidden={currentMap === 0 ? false : true}
				ref={tabRef}>
				<InfoTab active={activeTab === 0} onClick={() => changeTab(0)}>
					<InfoTabButton
						marginTop={marginTop}
						aria-label="estimated transit time to nearby manhattan locations">
						<img
							className="tab-icon"
							src="/images/neighborhood/train.svg"
							alt="train icon"
						/>
						<span>TO MANHATTAN</span>
					</InfoTabButton>
					<InfoTabList marginTop={marginTop} ref={contentRef}>
						{generateTravelTimes(trainToManhattan)}
					</InfoTabList>
				</InfoTab>
				<InfoTab active={activeTab === 1} onClick={() => changeTab(1)}>
					<InfoTabButton
						marginTop={marginTop}
						ref={backupTitleRef}
						aria-label="estimated transit time to nearby brooklyn locations">
						<img
							className="tab-icon"
							src="/images/neighborhood/train.svg"
							alt="train icon"
						/>
						<span>TO BROOKLYN</span>
					</InfoTabButton>
					<InfoTabList marginTop={marginTop} ref={contentRefOne}>
						{generateTravelTimes(trainToBrooklyn)}
					</InfoTabList>
				</InfoTab>
				<InfoTab active={activeTab === 2} onClick={() => changeTab(2)}>
					<InfoTabButton
						marginTop={marginTop}
						aria-label="estimated transit time on foot to nearby brooklyn locations">
						<img
							className="tab-icon"
							src="/images/neighborhood/walk.svg"
							alt="walking icon"
						/>
						<span>TO BROOKLYN</span>
					</InfoTabButton>
					<InfoTabList marginTop={marginTop} ref={contentRefTwo}>
						{generateTravelTimes(walkToBrooklyn)}
					</InfoTabList>
				</InfoTab>
				<InfoTab active={activeTab === 3} onClick={() => changeTab(3)}>
					<InfoTabButton
						marginTop={marginTop}
						ref={titleRef}
						aria-label="estimated transit time to nearby airports">
						<img
							className="tab-icon"
							src="/images/neighborhood/car.svg"
							alt="car icon"
						/>
						<span>TO AIRPORTS</span>
					</InfoTabButton>
					<InfoTabList marginTop={marginTop} ref={contentRefThree}>
						{generateTravelTimes(toAirports)}
					</InfoTabList>
				</InfoTab>
			</TabSection>
			<InfoListSection
				active={currentMap === 1}
				ref={listRefOne}
				aria-hidden={currentMap === 1 ? false : true}>
				<InfoList>{generateList(diningList)}</InfoList>
			</InfoListSection>
			<InfoListSection
				active={currentMap === 2}
				ref={listRefTwo}
				aria-hidden={currentMap === 2 ? false : true}>
				<InfoList>{generateList(amenitiesList)}</InfoList>
			</InfoListSection>
		</NeighborhoodInfoPage>
	)
}

export default NeighborhoodInfo
