// import React from 'react';
// import { upcomingSchedule } from '../../data/appointmentsData';
// import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';
// import './UpcomingSchedule.css';

// function UpcomingSchedule() {
//   return (
//     <div className="upcoming-schedule-container card">
//       <h3>The Upcoming Schedule</h3>
//       {upcomingSchedule.map(dayEntry => (
//         <div key={dayEntry.day} className="schedule-day-group">
//           <p className="schedule-day-title">On {dayEntry.day}</p>
//           {dayEntry.appointments.map(appointment => (
//             <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default UpcomingSchedule;



import React from 'react';
import { upcomingSchedule } from '../../data/appointmentsData';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';
import './UpcomingSchedule.css';

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule-container">
      <h3 className="schedule-heading">The Upcoming Schedule</h3>
      {upcomingSchedule.map(dayEntry => (
        <div key={dayEntry.day} className="schedule-day-group">
          <p className="schedule-day-title">On {dayEntry.day}</p>
          <div className="appointment-cards-container">
            {dayEntry.appointments.map(appointment => (
              <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
