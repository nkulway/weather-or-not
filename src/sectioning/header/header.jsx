import * as React from 'react';
import HeaderLogo from '../../Header.svg'
import './style.css';


export default function Header() {
  return (
    <header>
      <div>
      <img src={HeaderLogo} alt="Header Img" />
      </div>
    </header>
  );
}



// export default Header;
