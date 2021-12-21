import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';


export default function Header() {
  return (
    <header>
    <div className="header">
      <h1>Weather or Not</h1>
      <nav>
        <div>
        <NavLink to="/search">Search</NavLink>
        </div>
        <div>
        <NavLink to="/about">About</NavLink>
        </div>
        <div>
        <NavLink to="/activity">Activity</NavLink>
        </div>
      </nav>
      </div>
    </header>
  );
}



// export default Header;
