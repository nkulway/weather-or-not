import * as React from "react";
import { connect } from "react-redux";
import { executeSearch } from "../../redux/actions/actions";
import { IconButton } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from '@mui/material';
import { OutlinedInput } from "@mui/material";
import { Search } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './style.css';

function Searching({ executeSearch, results }) {

  let navigate = useNavigate()


  const [values, setValues] = useState({
    location: ""
  });

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value  })
    console.log(values)
  };

  const handleClick = e => {
    e.preventDefault()
    setValues({
      ...values
    });
    executeSearch(values.location)
    console.log(results)
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
              onSubmit={results &&( navigate('/about'))}
              >{<Search edge="end"/>}
              </IconButton>}
            label="location"
          />
        </FormControl>
        {results}
        </div>
        </div>
  );
}

const mapDispatchtoProps = {
  executeSearch
};

// how to handle undefined 'results'in reducer
const mapStateToProps = state => ({
  results: state.search.results
})

export default connect(mapStateToProps, mapDispatchtoProps)(Searching);
