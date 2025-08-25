import React from 'react';

// You will need to save the robot image to your assets folder
// For now, I'm using a placeholder URL.
const robotImageUrl = 'https://i.imgur.com/vH512yA.png';

const Schedule = () => {
  return (
    <section className="schedule-section">
      <div className="container">
        <h2 className="schedule-headline">
          <span className="outline-text">3 DAYS</span>
          <span>HACKATHON</span>
        </h2>
        <p className="schedule-description">
          Connect with designers worldwide, celebrating world-class content and forging
          connections across industries, verticals, and geographical boundaries.
        </p>

        <div className="schedule-grid">
          <div className="schedule-day">
            <span className="day-label">DAY 1</span>
            <h3>Kickoff and Orientation</h3>
          </div>
          <div className="schedule-day">
            <span className="day-label">DAY 2</span>
            <h3>Building and Collaborating</h3>
          </div>
          <div className="schedule-day">
            <span className="day-label">DAY 3</span>
            <h3>Presentation and Judging</h3>
          </div>
          <img src={robotImageUrl} alt="Robot graphic" className="schedule-robot" />
        </div>
      </div>
    </section>
  );
};

export default Schedule;