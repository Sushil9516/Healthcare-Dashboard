import React from 'react';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import './DashboardOverview.css';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';

function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      <div className="dashboard-overview-container card">
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <div className="activity-feed-container card">
        <ActivityFeed />
      </div>
    </div>
  );
}

export default DashboardOverview;