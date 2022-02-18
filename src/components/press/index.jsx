/* eslint-disable no-loop-func */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import BottomScrollListener from 'react-bottom-scroll-listener';

import { Row, LeftCol, RightCol, TextSection, Spacer } from '../utils/grid';
import Footer from '../footer';
import { parseDateforScreenReader, truncateSummary } from './utils';
import { BlueHeading } from '../utils';
import { mediaMin } from '../../stylesheets/MediaQueries';

const PressList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: wrap;
  width: 100%;
  img {
    margin: 0 auto;
  }
`;

const PressItemContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10vh;
  ${mediaMin.tabletLandscape`
    padding-right: 10vh;
    width: 50%;
    margin-bottom: 5vh;
  `}
  .date {
    font-family: 'BrownStd Light';
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.35px;
    line-height: 16px;
    margin-bottom: 24px;
    ${mediaMin.tabletLandscape`
      margin-bottom: 40px;
    `}
    ${mediaMin.desktopXLarge`
    font-size: 1.25rem;
  `};
  }
  .summary {
    font-family: 'BrownStd Light';
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.35px;
    line-height: 16px;
    margin-bottom: 24px;
    ${mediaMin.tabletLandscape`
      margin-bottom: 32px;
    `}
  }
  .publication {
    font-family: 'BrownStd Light';
    font-size: 24px;
    letter-spacing: 1px;
    line-height: 24px;
    margin-bottom: 24px;
    ${mediaMin.tabletLandscape`
      margin-bottom: 32px;
    `}
  }
  .title {
    font-family: 'BrownStd Bold';
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.35px;
    line-height: 16px;
    margin-bottom: 8px;
    ${mediaMin.desktopXLarge`
    font-size: 1.5rem;
    line-height: 1.25em;
  `};
  }
  .link {
    font-family: 'BrownStd Regular';
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.6px;
    line-height: 16px;
    color: #000;
    margin-bottom: 5%;
    z-index: 1;
    position: relative;
    text-decoration: none;
    display: inline-block;
    padding-bottom: 2%;
    transition: color ease 0.3s;
    cursor: pointer;
    ${mediaMin.tabletLandscape`
      margin-bottom: 10%;
    `}
    ${mediaMin.desktopXLarge`
    font-size: 1.5rem;
  `};
    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: #0000ff;
      z-index: 1;
      height: 2px;
    }

    &::before {
      width: 0%;
      left: 0;
      bottom: 0;
      transition: width ease 0.4s;
    }

    &::after {
      width: 100%;
      left: 0;
      bottom: 0;
      transition: all ease 0.6s;
    }

    &:hover {
      &::before {
        width: 100%;
      }

      &::after {
        left: 100%;
        width: 0%;
        transition: all ease 0.2s;
      }
    }
  }
`;

const PressPageContainer = styled.div`
width: 100%
display: flex;
flex-direction: column;
`;

const PressPageContainerInner = styled.div`
width: 100%
display: flex;
flex-direction: column;
padding: 1em;
box-sizing: border-box;
${mediaMin.tablet`
   padding: 2em;
`};
${mediaMin.desktop`
 flex-direction: row;
 justify-content: flex-end;
`};
`;

const PressContentLeft = styled.div`
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
`;

const PressContentRight = styled.div`
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

const PressItem = ({ pressItemData }) => {
  const {
    publication_name,
    date,
    article_title,
    article_summary,
    full_article_link,
    full_article_pdf
  } = pressItemData.acf;
  return (
    <PressItemContainer key={article_title}>
      <div className="publication">{publication_name}</div>
      <div className="date" aria-label={parseDateforScreenReader(date)}>
        {date}
      </div>
      <div className="title">{article_title}</div>
      <div className="summary">{truncateSummary(article_summary)}</div>
      <a
        className="link"
        href={full_article_pdf ? full_article_pdf : full_article_link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to full article"
      >
        FULL ARTICLE
      </a>
    </PressItemContainer>
  );
};

const Press = () => {
  const [pressData, setPressData] = useState([]);
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

  const fetchPress = async () => {
    let pressData = [];
    const contactsRes = await fetch(
      'https://cms.dbox.com/wp-json/wp/v2/1wsq_press'
    );
    const pages = contactsRes.headers.get('x-wp-totalpages');
    for (let i = 1; i <= pages; i++) {
      pressData.push(
        fetch(`https://cms.dbox.com/wp-json/wp/v2/1wsq_press?page=${i}`).then(
          res => {
            return res.json();
          }
        )
      );
    }
    pressData = await Promise.all(pressData).then(result => {
      return result.flat();
    });
    pressData = pressData.sort((a, b) => {
      return new Date(b.acf.date) - new Date(a.acf.date);
    });

    setPressData(pressData);
  };

  const generatePressItems = () => {
    return pressData.map(el => {
      return <PressItem pressItemData={el} />;
    });
  };

  useEffect(() => {
    fetchPress();
    setWindowHeight(document.documentElement.clientHeight);
    window.addEventListener('resize', () => {
      setWindowHeight(document.documentElement.clientHeight);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWindowHeight(document.documentElement.clientHeight);
      });
    };
  }, []);

  // useEffect(() => {
  //   document.addEventListener('scroll', handleScroll);
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll);
  //   };
  // });

  return (
    <PressPageContainer>
      <BlueHeading pageTitle="PRESS" headerBG="/images/press/heading" />
      <PressPageContainerInner>
        <PressContentLeft>
          <h5>PRESS</h5>
        </PressContentLeft>

        <PressContentRight>
          <PressList>
            {pressData.length === 0 ? (
              <img
                src="/images/press/Spinner.svg"
                className="loading-spinner"
                alt="loading"
              />
            ) : (
              generatePressItems()
            )}
          </PressList>
        </PressContentRight>
      </PressPageContainerInner>
      <Footer footerShow={footerShow} />
      <BottomScrollListener
        offset="10"
        onBottom={() => {
          setFooterShow(true);
        }}
      />
    </PressPageContainer>
  );
};

export default Press;
