import React from 'react';
import * as RiIcons from 'react-icons/ri'; // Import all icons from react-icons/ri
import { navLinks } from '../../data/navData';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar-container">
      <div className="sidebar-header">
        {/* Placeholder for small logo/icon if needed */}
      <h3>Health<span>care.</span></h3>
      </div>
      <nav className="sidebar-nav">
        <p className="nav-section-title">General</p>
        <ul>
          {navLinks.map(link => {
            const IconComponent = RiIcons[link.icon]; // Dynamically get icon component
            return (
              <li key={link.id} className="nav-item">
                <a href="#">
                  {IconComponent && <IconComponent className="nav-icon" />}
                  <span>{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;