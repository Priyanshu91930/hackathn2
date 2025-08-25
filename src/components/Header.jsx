import React from 'react';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        SARTHI<span>.COM</span>
      </div>
      <nav className="main-nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#stories">Stories</a></li>
        </ul>
        <button className="btn">REGISTER TODAY</button>
      </nav>
       {/* A placeholder for a mobile menu icon */}
      <button className="nav-toggle" aria-label="Open navigation">&#9776;</button>
    </header>
  );
};

export default Header;