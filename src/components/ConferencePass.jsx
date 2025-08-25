import React from 'react';

// Placeholder for the decorative "Admit One" ticket
const admitOneTicket = 'https://i.imgur.com/3q5gN3h.png';

const ConferencePass = () => {
  return (
    <section className="conference-pass-section">
      <div className="container">
        <div className="headline-wrapper">
          <h2 className="section-headline">
            <span className="outline-text">CONFERENCE</span>
            <span>PASSES</span>
          </h2>
          <img src={admitOneTicket} alt="Admit one ticket" className="pass-ticket-graphic" />
        </div>
        
        <div className="pass-card">
          <div className="pass-details">
            <h3>3 DAYS CONFERENCE PASS</h3>
            <p>Full access to the entire 3 day's programming</p>
          </div>
          <div className="pass-purchase">
            <span className="pass-price">$60</span>
            <span className="multiplier">x</span>
            <input type="number" defaultValue="1" min="1" className="quantity-input" />
          </div>
          
          <hr className="pass-divider" />

          <div className="pass-actions">
            <input type="text" placeholder="Discount Code" className="discount-input" />
            <button className="btn">CONTINUE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferencePass;