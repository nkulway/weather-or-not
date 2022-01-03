import './style.css';
import { NavLink } from 'react-router-dom';
import Blue from '../../Blue_Gradient.svg'
import { FormatQuoteRounded } from '@mui/icons-material';


function Footer() {
  return (
     <footer class="footer">
       <ul>
         <li>
           Home
         </li>
         <li>
           Search
         </li>
         <li>
           About
         </li>
       </ul>
  
       {/* <img src={Blue} /> */}
     </footer>
  );
}

export default Footer;
