import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
import './App.css';
import './styles/base.css'; // Import global styles
import './styles/utilities.css'; // Import utility styles

function App() {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <main className="main-content-area">
        <DashboardMainContent />
      </main>
    </div>
  );
}

export default App;