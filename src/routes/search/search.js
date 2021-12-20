import * as React from "react";
import { connect } from "react-redux";
import { executeSearch } from "../../redux/actions/actions";
import { IconButton } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from '@mui/material';
import { OutlinedInput } from "@mui/material";
import { Search } from '@mui/icons-material';
import { useState } from "react";
import './style.css';


  



function Searching({ executeSearch, results }) {


  const [values, setValues] = useState({
    location: ""
  });
  const [ temp, setTemp ] = useState(null)

  const renderTemp = data => {
    setTemp(data)
  }


  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value  })
    console.log(values)
  };

  const handleClick = e => {
    e.preventDefault()
    setValues({
      ...values
    });
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${values.location}&units=imperial&appid=23960c9ac35ca92497bd443010347bf1`)
    .then(res => res.json())
    .then(data => renderTemp(data.main.temp))
    // executeSearch(values.location)
  };


 

  return (
    
    <div className="search">
       <div className="search-container">
     <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-location">Location</InputLabel>
          <OutlinedInput
            id="outlined-adornment-location"
            value={values.location}
            onChange={handleChange("location")}
            endAdornment={<IconButton 
              position="end"
              onClick={handleClick}
              >{
              <Search edge="end"/>}
              </IconButton>}
            label="location"
          />
        </FormControl>
        {temp}
        </div>
        </div>
    
  );
}

const mapDispatchtoProps = {
  executeSearch
};

const mapStateToProps = state => ({
  results: state.search.results
})

export default connect(mapStateToProps, mapDispatchtoProps)(Searching);
