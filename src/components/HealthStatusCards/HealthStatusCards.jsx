// import React from 'react';
import { healthStatusCards } from '../../data/healthData';
// import { RiLungsLine, RiStethoscopeLine, RiBoneLine } from 'react-icons/ri'; // Example icons
// import './HealthStatusCards.css';

// const IconMap = {
//   Lungs: RiLungsLine,
//   Teeth: RiStethoscopeLine, // Using stethoscope for teeth as a placeholder, find better if available
//   Bone: RiBoneLine,
// };


import { RiLungsLine, RiStethoscopeLine } from 'react-icons/ri';
import { LuBone } from 'react-icons/lu'; // Import LuBone from Lucide Icons
import './HealthStatusCards.css';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import { FaSearchPlus } from 'react-icons/fa';

const IconMap = {
  Lungs: RiLungsLine,
  Teeth: RiStethoscopeLine,
  Bone: LuBone, // Now correctly referencing LuBone
};

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      <div className='plus-icon'>
        <FaSearchPlus className='plus-icon-bar'/>
      </div>
      {healthStatusCards.map(card => {
        const Icon = IconMap[card.organ];
        return (
          <div key={card.id} className="health-card card">
            <div className="health-card-header">
              {Icon && <Icon className="health-icon" />}
              <span className="health-organ">{card.organ}</span>
            </div>
            <p className="health-date">Date: {card.date}</p>
            <div className="health-status-bar">
              <div
                className={`status-fill ${card.status}`}
                style={{ width: `${card.progress}%` }}
              ></div>
            </div>
            <p className="health-issue">{card.issue}</p>
            <span className="details-link">Details →</span>
            
          </div>
        );
      })}
     
      
    </div>
  );
}

export default HealthStatusCards;