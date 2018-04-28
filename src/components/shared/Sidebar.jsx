import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar full-height">
    <div className="logo-container">
      <img className="logo-image" src="http://www.clker.com/cliparts/7/9/N/b/B/g/boom-hi.png" alt="Review Butler Logo"/>
    </div>
    <ul>
      <li>
        <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/morning-routines" activeClassName="active">Morning Routines</NavLink>
      </li>
      <li>
        <NavLink to="/videos" activeClassName="active">Videos</NavLink>
      </li>
      <li>
        <NavLink to="/chat" activeClassName="active">Chat</NavLink>
      </li>
      <li>
        <NavLink to="/profile" activeClassName="active">My Profile</NavLink>
      </li>
      <li>
        <NavLink to="/logout" activeClassName="active">Logout</NavLink>
      </li>
    </ul>
  </div>
);

export default Sidebar;
