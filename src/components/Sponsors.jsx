import React from 'react';

// For a real project, you would import images here
// import bitfwdLogo from '../assets/bitfwd.png';

const Sponsors = () => {
  return (
    <section className="sponsors-section">
      <div className="container">
        <h2 className="section-headline">SPONSORS</h2>
        <div className="sponsors-grid">
          {/* Replace these divs with <img> tags if you have logo files */}
          <div className="sponsor-logo">Bitfwd Capital</div>
          <div className="sponsor-logo">QuantBlock</div>
          <div className="sponsor-logo">Wert</div>
          <div className="sponsor-logo">METAV.RS</div>
          <div className="sponsor-logo">CADUCEUS</div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;