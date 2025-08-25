import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import UnlockSection from './components/UnlockSection';
import Speakers from './components/Speakers';
import EventStats from './components/EventStats';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import Prizes from './components/Prizes';
import ConferencePass from './components/ConferencePass'; // 1. Import ConferencePass
import Footer from './components/Footer';                 // 2. Import Footer

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
      
      <UnlockSection />
      <Speakers />
      <EventStats />
      <Schedule />
      
      <div className="container">
        <Sponsors />
        <Prizes />
        {/* 3. Add the ConferencePass section */}
        <ConferencePass /> 
      </div>
      
      {/* 4. Add the Footer */}
      <Footer />

    </div>
  );
}

export default App;