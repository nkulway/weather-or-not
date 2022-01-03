import Blue from './Blue_Gradient.svg'
import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header'
import Main from './sectioning/main/main';
import './App.css';


function App() {
  return (
    <div className="App">
              <div className="y-sticky">

        <Header /> 
        <Main />
        </div> 
        <Footer />
       
        {/* <img src={Blue} />       */}
    </div>
  );
}

export default App;
