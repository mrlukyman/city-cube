import React from 'react';
import styled from 'styled-components';
import GlobalStyle from "./components/common/GlobalStyles"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Background } from "./components/Background" 
import { ReviewWrapper } from "./components/ReviewWrapper"
import { UpperMobileSection } from './components/UpperMobileSection';
import { Newsletter } from './components/Newsletter';
import { About } from './components/About';
import { Feature } from './components/Feature';
import content from './data/Content'
import { LowerIconText } from './components/LowerIconText';
import { Motivation } from './components/Motivation';
import { MotivationWrap } from './components/MotivationWrap'
import { Navbar } from './components';

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
  // align-content: center;
  
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <ContentWrapper>
        <Background />
        {content.texts.map((text, index) => <UpperMobileSection 
          title={text.title} 
          content={text.content} 
          />)}
        
        {/* {content.features.map((feature, index) => <Feature 
          title={feature.title} 
          content={feature.content} 
          screen={feature.screen} 
          direction={index % 2 === 0 ? "normal" : "reversed"} 
        />)} */}

        {/* <MotivationWrap /> */}

        {/* {content.newsletter.map((newsletter, index) => <Newsletter
          title={newsletter.title} 
          content={newsletter.content} 
        />)} */}

        
        {/* <ReviewWrapper /> */}

        {/* {content.texts.map((texts, index) => <LowerIconText
          paragraphFontSize="small" 
          headingFontSize="big" 
          hColor="black" 
          pColor="black" 
          title={texts.title} 
          content={texts.content} 
        />)} */}

        {/* <About 
          title={content.about.title} 
          content={content.about.content} 
        /> */}
      </ContentWrapper>

    </Router>
  );
}

export default App;
