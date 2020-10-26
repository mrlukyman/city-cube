import React from 'react';
import { Header } from "./components/Header"
import { Background } from "./components/Background" 
import { Review } from "./components/Review"
import { UpperMobileSection } from './components/UpperMobileSection';
import "./index.css"
import { Subscribe } from './components/Subscribe';
import { About } from './components/About';
import { Feature } from './components/Feature';
import content from './data/Content'

function App() {
  return (
    <div>
      <Background />
      <Header />
      {content.texts.map((text, index) => <UpperMobileSection 
        title={text.title} 
        content={text.content} 
      />)}
        
      {content.features.map((feature, index) => <Feature 
        title={feature.title} 
        content={feature.content} 
        screen={feature.screen} 
        direction={index % 2 === 0 ? "normal" : "reversed"} 
      />)}
      <Review />
      <Subscribe />

      <About 
        title={content.about.title} 
        content={content.about.content} 
      />

    </div>
  );
}

export default App;
