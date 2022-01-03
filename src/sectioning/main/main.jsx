// import * as React from "react";
// import { connect } from "react-redux";
// import { executeSearch } from "../../redux/actions/actions";
// import { IconButton } from "@mui/material";
// import { InputLabel } from '@mui/material';
// import { FormControl } from '@mui/material';
// import { OutlinedInput } from '@mui/material';
// import { SatelliteTwoTone, Search } from '@mui/icons-material';
// import { useState, useEffect } from "react";
// import './style.css';


  



// function Main({ executeSearch, results }) {

//   const [values, setValues] = useState({
//     location: ""
//   });
//   const handleChange = (prop) => (e) => {
//     setValues({ ...values, [prop]: e.target.value  })
//     console.log(values)
//   };

//   const handleClick = e => {
//     e.preventDefault()
//     setValues({
//       ...values
//     });
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${values.location}&units=imperial&appid=23960c9ac35ca92497bd443010347bf1`)
//     .then(res => res.json())
//     .then(data => console.log(data.main.temp))
//     // executeSearch(values.location)
//   };

//   return (
//      <main>
//        <div className="main-container">
//      <FormControl fullWidth sx={{ m: 1 }}>
//           <InputLabel htmlFor="outlined-adornment-location">Location</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-location"
//             value={values.location}
//             onChange={handleChange("location")}
//             endAdornment={<IconButton 
//               position="end"
//               onClick={handleClick}
//               >{
//               <Search edge="end"/>}
//               </IconButton>}
//             label="location"
//           />
//         </FormControl>
//         {results}
//         </div>
//      </main>
//   );
// }

// const mapDispatchtoProps = {
//   executeSearch
// };

// const mapStateToProps = state => ({
//   results: state.search.results
// })

// export default connect(mapStateToProps, mapDispatchtoProps)(Main);


// import { connect } from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import Searching from '../../routes/search/search'
import About from '../../routes/about/about'
import Activity from '../../routes/activity/activity';
import Blue from '../../Blue_Gradient.svg'
import './style.css';

function Main() {

  return (
      <div class="main">
        <Routes>
        I am main
        <Route path="/" element={<p>Welcome Home</p>} />
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
