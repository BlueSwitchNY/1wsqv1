import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Row, LeftCol, RightCol, TextSection, MobileTextSection, Spacer } from "../utils/grid"
import { BlueHeading } from "../utils"
import { mediaMin } from "../../stylesheets/MediaQueries"
import Footer from "../footer"
import { BottomScrollListener } from "react-bottom-scroll-listener"

const Logo = styled.img`
	width: 70px;
	margin: 8px 0 0 0;
`

const ContactPageContainer = styled.div`
width: 100%
display: flex;
flex-direction: column;
`

const ContactPageContainerInner = styled.div`
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

const ContactContentLeft = styled.div`
	height: 40%;
	width: 100%;
	margin-top: 7em;
	padding: 2em 0 2em;
	box-sizing: border-box;
	h5 {
		font-family: "BrownStd Bold";
		margin-bottom: 2em;
		${mediaMin.desktopXLarge`
        font-size: 2rem;
      `};
	}
	p {
		font-family: "BrownStd Light";
		line-height: 1.25em;
	}
	${mediaMin.tabletLandscape`
    height: 30%;
  `};
	${mediaMin.desktop`
    height: 100%;
    width: 25%;
    padding-left: 4em;
    position: fixed;
    top: 0;
    left: 0;
  `};
	${mediaMin.desktopXLarge`
    padding-top: 10em;
`};
`

const ContactContentRight = styled.div`
	width: 100%;
	box-sizing: border-box;
	${mediaMin.desktop`
  height: 100%;
  width: 75%;
  margin-top: 5em;
  `};
	${mediaMin.desktopXLarge`
  padding-top: 10em;
`};
`

const Contact = () => {
	const [footerShow, setFooterShow] = useState(false)
	const [activeSection, setActiveSection] = useState(0)
	const [windowHeight, setWindowHeight] = useState(0)

	const sectionRef1 = useRef(null)

	const refArray = [sectionRef1]

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

	return (
		<ContactPageContainer>
			<BlueHeading pageTitle="CONTACT" headerBG="/images/contact/heading" />
			<ContactPageContainerInner>
				<ContactContentLeft>
					<h5>CONTACT</h5>
				</ContactContentLeft>

				<ContactContentRight>
					<MobileTextSection>
						<p>
							EXCLUSIVE LEASING AGENT <br />
							<Logo className="cbre-logo" src="/images/contact/cbre.svg" alt="CBRE" />
						</p>
					</MobileTextSection>
					<MobileTextSection>
						<p>
							PAUL J. AMRICH
							<br />
							Vice Chairman <br />
							<a href="mailto:paul.amrich@cbre.com">paul.amrich@cbre.com</a>
							<br />
							<a href="tel:212-984-8122">212-984-8122</a> <br />
						</p>
					</MobileTextSection>
					<MobileTextSection>
						<p>
							NEIL V. KING III
							<br />
							Vice Chairman <br />
							<a href="mailto:neil.king@cbre.com">neil.king@cbre.com</a>
							<br />
							<a href="tel:212-984-8352">212-984-8352</a>
							<br />
						</p>
					</MobileTextSection>
					<MobileTextSection>
						<p>
							ZACHARY I. PRICE
							<br />
							Senior Vice President
							<br />
							<a href="mailto:zachary.price@cbre.com">zachary.price@cbre.com</a>
							<br />
							<a href="tel:2126187080">212-618-7080</a>
							<br />
						</p>
					</MobileTextSection>
					<MobileTextSection>
						<p>
							JAMES ACKERSON
							<br />
							Senior Vice President <br />
							<a href="mailto:james.ackerson@cbre.com">james.ackerson@cbre.com</a>
							<br />
							<a href="tel:212-984-6647">212-984-6647</a> <br />
						</p>
					</MobileTextSection>

					<MobileTextSection>
						<p>
							ALEX D’AMARIO
							<br />
							Senior Associate <br />
							<a href="mailto:alex.damario@cbre.com">alex.damario@cbre.com</a>
							<br />
							<a href="tel:212-984-6697">212-984-6697</a>
							<br />
						</p>
					</MobileTextSection>
				</ContactContentRight>
			</ContactPageContainerInner>
			<Footer footerShow={footerShow} />
			<BottomScrollListener
				offset="10"
				onBottom={() => {
					setFooterShow(true)
				}}
			/>
		</ContactPageContainer>
	)
}

export default Contact
