import React from 'react';
import DashboardOverview from '../DashboardOverview/DashboardOverview';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import './DashboardMainContent.css';

function DashboardMainContent() {
  return (
    <div className="dashboard-main-content">
      <div className="dashboard-header-text">
        <h1>Dashboard</h1>
        <span className="this-week-text">This Week ⌄</span>{" "}
        {/* Add caret icon later */}
      </div>
      <div className="dashboard-grid">
        <DashboardOverview />
        <CalendarView />
        
        {/* <UpcomingSchedule /> */}
      </div>
    </div>
  );
}

export default DashboardMainContent;