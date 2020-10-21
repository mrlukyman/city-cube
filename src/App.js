import React from 'react';
import './App.css';
import { Header } from "./components/Header"
import { Background } from "./components/Background" 
import { AppPreview } from "./components/AppPreview"

function App() {
  return (
    <div>
      <Background />
      <Header />
      <AppPreview />
    </div>
  );
}

export default App;
