import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import BottomScrollListener from 'react-bottom-scroll-listener';

import Footer from '../footer';
import { Row, LeftCol, RightCol, TextSection, Spacer } from '../utils/grid';
import { BlueHeading } from '../utils';
import { variables } from '../../stylesheets/variables';
import { mediaMin } from '../../stylesheets/MediaQueries';

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${mediaMin.tabletLandscape`
    padding-right: 25%;
  `}
`;

const GridRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${mediaMin.tabletLandscape`
  height: ${props => props.height};
    flex-direction: row;
  `}
`;

const GridCol = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mediaMin.tabletLandscape`
  width: ${props => (props.fullWidth ? '100%' : '50%')};
  margin-left: 8px;
  margin-right: 8px;
  `}
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  background-color: ${variables.colors.darkBlue};
  color: #fff;
  margin: 8px 0;
  padding: 32px;
  ${mediaMin.tabletLandscape`
  padding: 32px 40px;
  margin-top: ${props => (props.top ? '0' : '8px')};
  margin-bottom: 8px;
    height: ${props => (props.height ? props.height : '100%')};
  `}
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-family: 'BrownStd Bold';
  font-weight: bold;
  letter-spacing: 0.6px;
  font-size: ${props => (props.table ? '16px' : '24px')};
  line-height: ${props => (props.table ? '16px' : '24px')};
  ${mediaMin.tabletLandscape`
    font-size: 24px;
    line-height: 24px;
  `}
`;

const SubTitle = styled.span`
  font-family: 'BrownStd Thin';
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
  margin: ${props => (props.table ? '8px 0 0 0' : '0 0 24px 0')};
`;

const MedText = styled.span`
  font-family: 'BrownStd Thin';
  font-size: 16px;
  font-weight: 300;
  line-height: 16px;
`;

const BoldText = styled.span`
  font-family: 'BrownStd Bold';
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.6px;
  line-height: 24px;
`;

const BigNum = styled.span`
  display: flex;
  font-family: 'BrownStd Thin';
  font-weight: 100;
  letter-spacing: -2px;
  font-size: 80px;
  line-height: 80px;
  margin-left: ${props => (props.table ? '8px' : '0')};
  background-color: ${props =>
    props.table ? 'rgba(113,152,217,0.4);' : 'transparent'};
  align-items: ${props => (props.table ? 'center' : '')};
  padding: ${props => (props.table ? '0 8px' : '')};
  ${mediaMin.tabletLandscape`
    padding: ${props => (props.table ? '0 18px' : '')};
    font-size: 96px;
    line-height: 96px;
    
  `}
`;

const Symbol = styled.span`
  font-family: 'BrownStd Thin';
  font-weight: 100;
  font-size: 48px;
  line-height: 48px;
  transform: ${props =>
    props.table ? 'translateY(-10px)' : 'translateY(8px)'};
  ${mediaMin.tabletLandscape`
    font-size: 56px;
    line-height: 56px;
    `}
`;

const FactTable = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const FactRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  background: purple;
  padding: ${props => (props.tall ? '40px 24px' : '19px 24px')};
  background-color: ${props =>
    props.odd ? 'rgba(113,152,217,0.2);' : 'transparent'};
  ${mediaMin.tabletLandscape`
    padding: ${props => (props.tall ? '40px 30px' : '19px 30px')};
  `}
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const IncentivesPageContainer = styled.div`
width: 100%
display: flex;
flex-direction: column;
`;

const IncentivesPageContainerInner = styled.div`
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
`;

const IncentivesContentLeft = styled.div`
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
    };
    p {
      font-family: "BrownStd Light";
      line-height: 1.25em;
    };
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
`;

const IncentivesContentRight = styled.div`
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
`;

const Incentives = () => {
  const [footerShow, setFooterShow] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const sectionRef1 = useRef(null);

  const refArray = [sectionRef1];

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
    <IncentivesPageContainer>
      <BlueHeading/>
      <IncentivesPageContainerInner>

        <IncentivesContentLeft>
            <h5>UNPARALLELED INCENTIVES</h5>
            <p>
              1WSQ represents a rare coupling of New York City incentives with
              Class A new construction. Tax and energy savings create additional
              significant value for tenants.
            </p>
        </IncentivesContentLeft>

        <IncentivesContentRight>
          <GridContainer>
            <GridRow height="40%">
              <GridCol>
                <GridItem top>
                  <Section>
                    <Title>REAP</Title>
                    <SubTitle>
                      Relocation Employment & Assistance Program
                    </SubTitle>
                  </Section>
                  <Section>
                    <BigNum>
                      <Symbol>$</Symbol>3K
                    </BigNum>
                    <MedText>TAX CREDIT PER EMPLOYEE</MedText>
                    <MedText>PER YEAR</MedText>
                  </Section>
                </GridItem>
              </GridCol>
              <GridCol>
                <GridItem top height="55%">
                  <Section>
                    <Title>ICAP</Title>
                    <SubTitle>
                      Industrial & Commercial Abatement Program
                    </SubTitle>
                  </Section>
                  <Section>
                    <MedText>FOR NEWLY BUILD OR RENOVATED CONSTRUCTION</MedText>
                    <MedText>RENOVATED INDUSTRIAL</MedText>
                  </Section>
                </GridItem>
                <GridItem height="30%">
                  <Section>
                    <BoldText>NO COMMERCIAL</BoldText>
                    <BoldText>RENT TAX</BoldText>
                  </Section>
                </GridItem>
                <GridItem height="30%">
                  <BoldText>LOCATED IN AN</BoldText>
                  <BoldText>OPPORTUNITY ZONE</BoldText>
                </GridItem>
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol>
                <GridItem height="40%">
                  <Section>
                    <Title>ECSP</Title>
                    <SubTitle>Energy Cost Savings Program</SubTitle>
                  </Section>
                  <Section>
                    <BigNum>
                      45<Symbol>%</Symbol>
                    </BigNum>
                    <MedText>REDUCTION OF ELECTRIC</MedText>
                    <MedText>& NATURAL GAS COST</MedText>
                  </Section>
                </GridItem>
              </GridCol>
              <GridCol>
                <GridItem>
                  <Section>
                    <Title>BIR</Title>
                    <SubTitle>Business Incentive Rate</SubTitle>
                  </Section>
                  <Section>
                    <BigNum>
                      35<Symbol>%</Symbol>
                    </BigNum>
                    <MedText>REDUCTION ON</MedText>
                    <MedText>ELECTRIC DELIVERY</MedText>
                  </Section>
                </GridItem>
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol fullWidth>
                <GridItem>
                  <Title>CASE STUDY</Title>
                  <SubTitle>Totaling 29,000 RSF and 200 jobs</SubTitle>
                  <FactTable>
                    <FactRow odd>
                      <Title table>REAP</Title>
                      <Title table>$20</Title>
                    </FactRow>
                    <FactRow>
                      <Title table>ICAP</Title>
                      <Title table>$6</Title>
                    </FactRow>
                    <FactRow odd>
                      <Title table>Commercial Rent Tax Exemption</Title>
                      <Title table>$3</Title>
                    </FactRow>
                    <FactRow>
                      <Title table>ECSP</Title>
                      <Title table>$1</Title>
                    </FactRow>
                    <BottomRow>
                      <FactRow odd tall>
                        <Section>
                          <Title table>TOTAL SAVINGS</Title>
                          <Title table>PER SF</Title>
                          <SubTitle table>
                            Results will vary case by case
                          </SubTitle>
                        </Section>
                      </FactRow>
                      <BigNum table>
                        <Symbol table>$</Symbol>30
                      </BigNum>
                    </BottomRow>
                  </FactTable>
                </GridItem>
              </GridCol>
            </GridRow>
          </GridContainer>
        </IncentivesContentRight>

      </IncentivesPageContainerInner>
      <Footer footerShow={footerShow} />
      <BottomScrollListener
        offset="10"
        onBottom={() => {
          setFooterShow(true);
        }}
      />
    </IncentivesPageContainer>
  );
};

export default Incentives;
