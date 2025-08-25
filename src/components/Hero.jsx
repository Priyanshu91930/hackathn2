import React from "react";
// Import your image correctly from assets
import heroImage from "../assets/s1.png"; // Make sure this path is correct

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Left side: Text Content */}
      <div className="hero-content">
        <h1 className="hero-headline">
          <span className="color-pink">MEGA</span>
          <span className="color-green">HACKATHON</span>
          <span className="color-white">WEEK</span>
        </h1>
        <p className="hero-description">
          Join our Online Design Hackathon to showcase your creativity, tackle unique
          challenges, and win incredible prizes!
        </p>
        <button className="btn">REGISTER TODAY</button>
      </div>

      {/* Right side: Image */}
      <div className="hero-image">
        <img src={heroImage} alt="Metaverse illustration with a hand" />
      </div>
    </section>
  );
};

export default Hero;