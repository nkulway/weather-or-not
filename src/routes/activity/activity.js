import React from 'react'
import CardWarm from '../../components/card/cardWarm';
import { connect } from 'react-redux'
import './style.css';

function Activity({ results }) {


  const handleTemp = () => {
    if(results > 40){
      return <CardWarm />
    } else {
      return <p>Its cold</p>
    }
  }

  
  return (
     <div className="activity">
       <div className="activity-container">
        <h2>Activity</h2>
        <h3>What can you do in this weather?</h3>
        <div>
          <p>It is {results} degrees farenheight outside at the moment. Why dont you consider doing some of these activities?</p>
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
