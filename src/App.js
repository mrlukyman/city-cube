import React from 'react';
import { Features } from "./components/Features"
import { Header } from "./components/Header"
import { Background } from "./components/Background" 
import { AppPreview } from "./components/AppPreview"
import { Review } from "./components/Review"
import "./index.css"
import { Subscribe } from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Background />
      <Header />    {/*  container medzi componenty ? */}
      <AppPreview />
      <Features />
      <Review />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
