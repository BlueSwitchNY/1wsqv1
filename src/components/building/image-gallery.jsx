import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { ResponsiveImage } from "../utils"
import { mediaMin } from "../../stylesheets/MediaQueries"

const NextArrow = ({ className, onClick }) => (
	<img src="/arrow-right.svg" alt="next arrow" className={className} onClick={onClick} />
)

const PrevArrow = ({ className, onClick }) => (
	<img src="/arrow-left.svg" alt="previous arrow" className={className} onClick={onClick} />
)

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
}

const SliderContainer = styled.div`
	opacity: ${props => (props.active ? "1" : "0")};
	visibility: ${props => (props.active ? "visible" : "hidden")};
	z-index: ${props => (props.active ? "200" : "-1")};
	transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out, z-index 0.01s;
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #000;
	display: flex;
	justify-content: center;
	align-items: center;
	.slick-slider {
		width: 100%;
		height: 100%;
		touch-action: unset;
		.slick-list {
			margin: 0 auto;
			height: 100%;
			width: 100%;
			${mediaMin.tabletLandscape`
      width: 75%;
      `}
			.slick-track {
				height: 100%;
				.slick-slide {
					height: 100%;
					div {
						height: 100%;
					}
				}
			}
		}
		.slick-arrow {
			display: none;
			${mediaMin.tabletLandscape`
      display: block;
      `}
			height: 45px;
			z-index: 100;
		}
		.slick-next {
			right: 44px;
		}
		.slick-prev {
			left: 44px;
		}
	}
`

const SliderSlide = styled.div`
	display: flex !important;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.responsive-image-container {
		display: flex;
		img {
			max-height: 100vh;
			max-width: 100%;
			margin: 0 auto;
		}
	}
`

const CloseButton = styled.button`
	position: fixed;
	z-index: 150;
	border: none;
	cursor: pointer;
	padding: 0;
	background-color: transparent;
	top: 75px;
	right: 36px;
	&:focus {
		outline: none;
	}
	${mediaMin.tabletLandscape`
  top: 24px;
  right: 44px;
  `}
`

const generateSlides = photoArray =>
	photoArray.map(el => (
		<SliderSlide key={el.src}>
			<ResponsiveImage srcPath={el.src} imgAlt={el.alt} />
		</SliderSlide>
	))

const PhotoViewer = ({ photoArray, galleryState, galleryIndex, closeGallery }) => {
	const sliderRef = useRef(null)

	useEffect(() => {
		sliderRef.current.slickGoTo(galleryIndex, true)
	}, [galleryState])

	return (
		<SliderContainer active={galleryState}>
			<CloseButton onClick={closeGallery}>
				<img src="/close.svg" alt="close overlay" loading="lazy" />
			</CloseButton>
			<Slider ref={sliderRef} {...settings}>
				{generateSlides(photoArray)}
			</Slider>
		</SliderContainer>
	)
}

export default PhotoViewer
