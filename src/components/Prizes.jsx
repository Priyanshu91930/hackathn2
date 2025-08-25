import React from 'react';

// Placeholder images for the decorative elements and prize icons
const ticketImg = 'https://i.imgur.com/Y3Oj6M2.png';
const coinImg = 'https://i.imgur.com/5L9bA5k.png';
const prizeIcon1 = 'https://i.imgur.com/uQy5nB2.png';
const prizeIcon2 = 'https://i.imgur.com/J3g916e.png';
const prizeIcon3 = 'https://i.imgur.com/QkY5A4A.png';

const Prizes = () => {
  return (
    <section className="prizes-section">
      <div className="container">
        <h2 className="section-headline">PRIZES</h2>
        <p className="section-description">
          Get ready to launch your project! The top performers will receive awards,
          prizes, and recognition.
        </p>

        <div className="prizes-grid">
          <img src={ticketImg} alt="Prize ticket" className="prize-ticket-graphic" />
          <img src={coinImg} alt="Gold coin" className="prize-coin-graphic" />

          {/* Main Prize Card */}
          <div className="main-prize-card">
            <h3>METAVERSE VISIONARY</h3>
            <span className="prize-amount">$50K</span>
            <p>
              Prepare for the project launch! Outstanding contributors will be
              rewarded with awards, prizes, and acknowledgment.
            </p>
          </div>

          {/* Smaller Prize Cards */}
          <div className="small-prizes-container">
            <div className="small-prize-card">
              <img src={prizeIcon1} alt="Immersive interaction icon" />
              <div>
                <span className="prize-amount small">$30K</span>
                <p>Immersive Interaction</p>
              </div>
            </div>
            <div className="small-prize-card">
              <img src={prizeIcon2} alt="Virtual crowd's choice icon" />
              <div>
                <span className="prize-amount small">$10K</span>
                <p>Virtual Crowd's Choice</p>
              </div>
            </div>
            <div className="small-prize-card">
              <img src={prizeIcon3} alt="Metaverse for good icon" />
              <div>
                <span className="prize-amount small">$10K</span>
                <p>Metaverse for Good</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;