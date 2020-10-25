import React from 'react';
import { Header } from "./components/Header"
import { Background } from "./components/Background" 
import { Review } from "./components/Review"
import { UpperMobileSection } from './components/UpperMobileSection';
import "./index.css"
import { Subscribe } from './components/Subscribe';
import Footer from './components/Footer';
import { Feature } from './components/Feature';

function App() {
  return (
    <div>
      <Background />
      <Header />
      <UpperMobileSection />
      <Feature />
      <Review />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
