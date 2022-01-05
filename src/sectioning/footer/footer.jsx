import './style.css';
import { NavLink } from 'react-router-dom';
// import Blue from '../../Blue_Gradient.svg'
// import { FormatQuoteRounded } from '@mui/icons-material';


function Footer() {
  return (
     <footer>
       <ul className="footer">
         <li>
           <NavLink to="/">Home</NavLink>
         </li>
         <li>
         <NavLink to="/search">Search</NavLink>
         </li>
         <li>
         <NavLink to="/about">About</NavLink>
         </li>
       </ul>
  
       {/* <img src={Blue} /> */}
     </footer>
  );
}

export default Footer;
