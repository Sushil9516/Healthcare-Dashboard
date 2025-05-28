import React from 'react';
import './ActivityFeed.css';

function ActivityFeed() {
  // Mock data for the bar chart - heights represent relative activity
  const activityData = [
    { day: 'Mon', height: '60%' },
    { day: 'Tues', height: '40%' },
    { day: 'Wed', height: '80%' },
    { day: 'Thurs', height: '70%' },
    { day: 'Fri', height: '90%' },
    { day: 'Sat', height: '50%' },
    { day: 'Sun', height: '30%' },
  ];

  return (
    <div className="activity-feed-container card">
      <h3>Activity</h3>
      <p className="activity-summary">3 appointments on this week</p>
      <div className="activity-chart">
        {activityData.map(item => (
          <div key={item.day} className="chart-bar-column">
            <div className="chart-bar" style={{ height: item.height }}></div>
            <span className="chart-day">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;