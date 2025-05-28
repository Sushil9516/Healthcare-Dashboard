import React from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine, RiStethoscopeLine } from 'react-icons/ri';
import { calendarDays, currentAppointments } from '../../data/calendarData';
import './CalendarView.css';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';

function CalendarView() {
  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="calendar-view-container card">
      <div className="calendar-header">
        <h3>October 2021</h3>
        <div className="calendar-nav">
          <RiArrowLeftSLine className="nav-arrow" />
          <RiArrowRightSLine className="nav-arrow" />
        </div>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}
        {calendarDays.map((dayInfo, index) => (
          <div
            key={dayInfo.date}
            className={`calendar-date-cell ${
              [3, 5].includes(index) ? "active-date" : ""
            }`}
          >
            <span className="date-number">{dayInfo.date}</span>
            {dayInfo.times.map((time, idx) => (
              <span key={idx} className="appointment-time">
                {time}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="appointment-details-section">
        {currentAppointments.map((appointment) => (
          <div key={appointment.id} className="current-appointment-card ">
            <div
              className={
                appointment.type === "Dentist" ? "active-appointment" : ""
              }
            >
              <div className="appointment-icon-wrapper">
                <p className="appointment-type">{appointment.type}</p>

                <RiStethoscopeLine className="appointment-type-icon" />
              </div>
              <div className="appointment-info">
                <span className="appointment-time-detail">
                  {appointment.time}
                </span>
                <p className="appointment-details-inline">
                  {appointment.doctor}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
     <UpcomingSchedule />
    </div>
  );
}

export default CalendarView;
