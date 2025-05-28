import React from 'react';
import { RiSearchLine, RiNotificationLine, RiAddLine } from 'react-icons/ri';
import './Header.css';
import userAvatar from '../../assets/images/avatar.jpg'; // Placeholder image

function Header() {
  return (
    <header className="header-container">
      <div className="header-search">
        <div className="input-bar">
          <RiSearchLine className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="action-icon">
          <RiNotificationLine  className='notification-icon'/>
        </div>
      </div>
      <div className="header-actions">
       
          <img src={userAvatar} alt="User Avatar" className="user-avatar" />
          <div className="plus-button">
            <RiAddLine />
          </div>
        
      </div>
    </header>
  );
}

export default Header;