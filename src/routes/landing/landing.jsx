// import { FilterDrama } from '@mui/icons-material';
// import { FilterDramaTwoTone } from '@mui/icons-material';
import LandingInfo from '../../Landing_Info.svg'
import Search from '../search/search'
import Weather from '../../final_weather.svg'
import './style.css';

function Landing() {
  return (
     <div className="landing">
       <div className="landing-search">
        <img src={LandingInfo} alt="landing_text" />
        <Search />
      </div>
      <div className="landing-image">
        <img src={Weather} alt="weather_img" />
        
      </div>
     </div>
  );
}


export default Landing;
