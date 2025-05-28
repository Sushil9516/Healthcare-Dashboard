import React from 'react';
import humanBody from '../../assets/images/human-body.png'; // Placeholder image
import { anatomicalHealth } from '../../data/healthData';
import './AnatomySection.css';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image-wrapper">
        <img src={humanBody} alt="Human Anatomy" className="human-body-image" />
        {anatomicalHealth.map(part => (
          <div
            key={part.id}
            className={`health-indicator ${part.status}`}
            style={{ top: part.position.top, left: part.position.left }}
          >
            <span>{part.name}</span>
            <div className="indicator-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnatomySection;