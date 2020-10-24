import React from 'react';
import { Header } from "./components/Header"
import { Background } from "./components/Background" 
import { UpperMobileSection } from './components/UpperMobileSection';
import "./index.css"
import { Feature } from './components/Feature';

function App() {
  return (
    <div>
      <Background />
      <Header />
      <UpperMobileSection />
      <Feature />
    </div>
  );
}

export default App;
