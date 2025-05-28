import React from 'react';
import * as RiIcons from 'react-icons/ri'; // Import all icons for dynamic use
import './SimpleAppointmentCard.css';

// Map icon names from data to actual react-icons components
const AppointmentIconMap = {
  RiCheckLine: RiIcons.RiCheckLine,
  RiEyeLine: RiIcons.RiEyeLine,
  RiHeartLine: RiIcons.RiHeartLine,
  RiBrainLine: RiIcons.RiBrainLine,
};

function SimpleAppointmentCard({ appointment }) {
  const IconComponent = AppointmentIconMap[appointment.icon];

  return (
    <div className="simple-appointment-card">
      <div className="card-icon-wrapper">
        {IconComponent && <IconComponent className="card-icon" />}
      </div>
      <div className="card-details">
        <p className="card-title">{appointment.title}</p>
        <span className="card-time">{appointment.time}</span>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;