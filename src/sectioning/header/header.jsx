import * as React from 'react';
import HeaderLogo from '../../Header.svg'
import './style.css';


function Header() {
  return (
    <header>
      <div>
        <img src={HeaderLogo} alt="Header Img" />
      </div>
    </header>
  );
}



export default Header;
