import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import RiskAnalyzer from './components/RiskAnalyzer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <RiskAnalyzer />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
