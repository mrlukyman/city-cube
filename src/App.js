import React from 'react';
import { Features } from "./components/Features"
import { Header } from "./components/Header"
import { Background } from "./components/Background" 
import { UpperMobileSection } from './components/UpperMobileSection';
import "./index.css"

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
