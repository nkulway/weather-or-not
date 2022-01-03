import React from 'react'
import Blue from '../../Blue_Gradient.svg'
import CardWarm from '../../components/card/cardWarm';
import { connect } from 'react-redux'
import './style.css';

function Activity({ results }) {


  const handleTemp = () => {
    if(results > 40){
      return <CardWarm />
    } else {
      return <p>its cold</p>
    }
  }

  
  return (
     <div className="activity">
       <div className="activity-container">
        <div>
          <h1>{results}°f</h1>
        {handleTemp()} 
        </div>
      </div>
     </div>
  );
}

const mapStateToProps = state => ({
  results: state.search.results
  // humidity: state.search.results.humidity
})

export default connect(mapStateToProps, null)(Activity);
