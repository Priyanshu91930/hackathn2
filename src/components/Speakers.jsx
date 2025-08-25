import React from 'react';

// You will need to add your own speaker images to the assets folder.
// For now, I'm using placeholder URLs.
const speakerData = [
  {
    name: 'MIRACLE KORSGAARD',
    title: 'CEO & COO AT ZONLO',
    image: 'https://i.imgur.com/vXB43Qv.png',
  },
  {
    name: 'DAVIS GEORGE',
    title: 'CO-FOUNDER AT PINO',
    image: 'https://i.imgur.com/I5O9L5A.png',
  },
  {
    name: 'RYAN DIAS',
    title: 'FOUNDER AT PLUN',
    image: 'https://i.imgur.com/pyz6610.png',
  },
  {
    name: 'KIERRA CULHANE',
    title: 'CEO & CO-FOUNDER AT Z',
    image: 'https://i.imgur.com/yq36YF5.png',
  },
];

const Speakers = () => {
  // We duplicate the speaker data to create a seamless looping animation
  const duplicatedSpeakers = [...speakerData, ...speakerData];

  return (
    <section className="speakers-section">
      <div className="container">
        <h2 className="speakers-headline">
          <span className="outline-text">OUR</span>
          <span>SPEAKERS</span>
        </h2>
        
        <div className="speaker-carousel-container">
          <div className="speaker-carousel-track">
            {duplicatedSpeakers.map((speaker, index) => (
              <div className="speaker-card" key={index}>
                <img src={speaker.image} alt={`Headshot of ${speaker.name}`} />
                <h3>{speaker.name}</h3>
                <p>{speaker.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="carousel-dots">
          <span></span>
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>

        <button className="btn">VIEW ALL SPEAKERS</button>
      </div>
    </section>
  );
};

export default Speakers;