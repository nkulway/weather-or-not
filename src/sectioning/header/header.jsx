import * as React from 'react';
import HeaderLogo from '../../Header.svg'
import './style.css';


function Header() {
  return (
    <header>
      <div className="header-img">
        <img src={HeaderLogo} alt="Header Img" />
      </div>
      <ul className="navs">
         <li>
           <a href="/">Home</a>
         </li>
         <li>
           <a href="/search">Search</a>
         </li>
         <li>
           <a href="/about">About</a>
         </li>
       </ul>
    </header>
  );
}



export default Header;
