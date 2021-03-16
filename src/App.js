import React from 'react';
import styled from 'styled-components';
import { Container } from "./components/common/GlobalStyles"
import GlobalStyle from "./components/common/GlobalStyles"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Background } from "./components/Background" 
import { UpperMobileSection } from './components/UpperMobileSection';
import { Newsletter } from './components/Newsletter';
import { About } from './components/About';
import { Feature } from './components/Feature';
import content from './data/Content'
import { LowerIconText } from './components/LowerIconText';
import { Motivation } from './components/Motivation';
import { Navbar } from './components';
import { Review } from "./components/Review"

const NavbarWrapper = styled.div`
  background: #141414;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const FeatureWrapper = styled(Container)`
  padding-top: 6rem;

`

const MotivationWrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  padding: 2rem 12px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

const RatingWrapper = styled(Container)`
  display: flex;
  flex-direction: row;

  
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <ContentWrapper>
        {/* <Background /> */}
        {/* {content.texts.map((text, index) => <UpperMobileSection 
          title={text.title} 
          content={text.content} 
          />)} */}
        <FeatureWrapper>
          {content.features.map((feature, index) => <Feature 
            title={feature.title} 
            content={feature.content} 
            screen={feature.screen} 
            direction={index % 2 === 0 ? "normal" : "reversed"} 
          />)}
        </FeatureWrapper>
        <MotivationWrapper>
          {content.motivation.map((motivation, index) => <Motivation 
          title={motivation.title}
          content={motivation.content} 
          name={motivation.name} 
          />)}
        </MotivationWrapper>

        {content.newsletter.map((newsletter, index) => <Newsletter
          title={newsletter.title} 
          content={newsletter.content} 
        />)}

        
        <RatingWrapper>
          {content.review.map((review, index) => <Review 
          content={review.content} 
          name={review.name} 
          />)}
        </RatingWrapper>

        {/* {content.texts.map((texts, index) => <LowerIconText
          paragraphFontSize="small" 
          headingFontSize="big" 
          hColor="white" 
          pColor="white" 
          title={texts.title} 
          content={texts.content} 
        />)} */}

        <About 
          title={content.about.title} 
          content={content.about.content} 
        />
      </ContentWrapper>

    </Router>
  );
}

export default App;
