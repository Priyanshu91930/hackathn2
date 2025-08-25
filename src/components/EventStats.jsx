import React from 'react';

const EventStats = () => {
  return (
    <section className="event-stats-section">
      <div className="container">
        <div className="stat-item">
          <span className="stat-number">4+</span>
          <span className="stat-label">FORMATS</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5+</span>
          <span className="stat-label">WORKSHOPS</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">20+</span>
          <span className="stat-label">SPEAKERS</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">16+</span>
          <span className="stat-label">TALKS</span>
        </div>
      </div>
    </section>
  );
};

export default EventStats;