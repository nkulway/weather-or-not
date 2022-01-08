import { connect } from 'react-redux';
import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header'
import Main from './sectioning/main/main';
import './App.css';


function App({ results }) {
  return (
    <>
      {results == undefined && (
        <div className="y-sticky">
          <Header /> 
            <Main />
          <Footer />
        </div>)
      }

      {results > 50 && (
        <div className="y-sticky">
          <div id="warm">
            <Header /> 
              <Main />
            <Footer />
          </div>
        </div>)
      }

      {results && results < 50 && (
        <div className="y-sticky">
          <div id="cold">
            <Header /> 
              <Main />
            <Footer />
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