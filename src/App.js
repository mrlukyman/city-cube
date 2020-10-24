import React from 'react';
import { Header } from "./components/Header"
import { Background } from "./components/Background" 
import { UpperMobileSection } from './components/UpperMobileSection';
import "./index.css"
import { Features } from './components/Features';

function App() {
  return (
    <div>
      <Background />
      <Header />    {/*  container medzi componenty ? */}
      <UpperMobileSection />
      <Features />
    </div>
  );
}

export default App;
