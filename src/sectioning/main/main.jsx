import {Routes, Route} from 'react-router-dom'
import About from '../../routes/about/about'
import Activity from '../../routes/activity/activity';
import Landing from '../../routes/landing/landing';
import Searching from '../../routes/search/search'
import './style.css';

function Main() {

  return (
      <div className="main">
        <Routes>
        I am main
        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="search" element={<Searching />}>
          <Route path=":id" element={<p>Some ID has been found</p>} />
        </Route>
        <Route path="activity" element={<Activity />} />

        <Route path="*" element={<p>There's nothing here!</p>} />
        </Routes>
      </div>
  );
}




export default Main;
