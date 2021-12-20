import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';


export default function Header() {
  return (
    <header>
    <div className="header">
      <h1>Weather or Not</h1>
      <nav>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      </div>
    </header>
  );
}



// export default Header;
