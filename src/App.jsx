import { connect } from 'react-redux';
import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header'
import Main from './sectioning/main/main';
import './App.css';


function App({ results }) {
  return (
    <>
    {results == undefined && (<div className="App" >
    <div className="y-sticky">

<Header /> 
<Main />
</div> 
<Footer />
    </div>)
    }
    {results > 50 && (<div  className="App" >
      
    <div className="y-sticky">

<Header /> 
<div id="warm">
<Main />
<Footer />
</div> 
</div>
    </div>)
    }
    {results && results < 50 && (<div className="App" >
      
    <div className="y-sticky">

<Header /> 
<div id="cold">
<Main />


<Footer />
</div> 
</div>
    </div>)
    }
    </>
  );
}

const mapStateToProps = state => ({
  results: state.search.results
})

export default connect(mapStateToProps, null)(App);