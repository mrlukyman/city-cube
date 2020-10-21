import React from 'react';
import { Features } from "./components/Features"
import { Header } from "./components/Header"
import { Background } from "./components/Background" 
import { AppPreview } from "./components/AppPreview"
import "./index.css"

function App() {
  return (
    <div>
      <Background />
      <Header />    {/*  container medzi componenty ? */}
      <AppPreview />
      <Features />
    </div>
  );
}

export default App;
