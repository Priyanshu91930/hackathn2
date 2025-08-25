import runningFigure from '../assets/s2.png';
import floatingFigure from '../assets/s3.png';

const UnlockSection = () => {
return (
<section className="unlock-section">
{/* Left Character Image */}
<div className="unlock-graphic unlock-graphic-left">
<img src={runningFigure} alt="Character running in a virtual world" />
</div>

    
{/* Center Text Content */}
  <div className="unlock-content">
    <p className="event-date">10 FEB - 12 FEB 2023</p>
    <h2 className="unlock-headline">
      UNLOCKING THE<br />METAVERSE
    </h2>
    <button className="btn btn-outline">LEARN MORE</button>
  </div>

  {/* Right Character Image */}
  <div className="unlock-graphic unlock-graphic-right">
    <img src={floatingFigure} alt="Character floating with virtual interfaces" />
  </div>
</section>

  

);
};

export default UnlockSection;