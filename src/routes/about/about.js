import Cloud from '../../cloud.svg'
import './style.css';

function About() {
  return (
     <div>
       <div className="about">
          <div className="about-info">
            <h3>This app provides a list of activities for the client to participate in by themselves or with others.  In the future I plan to add a backend to this project allowing the user to create a profile and create activities of their own.  I developed this app in an attempt to practice developing a fully mobile responsive, multipage webpage.</h3>
          </div>
          <div className="cloud">
          <img src={Cloud} alt="cloud" />
          </div>
          <div className="about-list">
           <h3>Technology Used</h3>
            <br></br>
            <hr />
            <h3>React</h3>
            <hr />
            <h3>Redux</h3>
            <hr />
            <h3>Material UI</h3>
            <hr />
            <h3>HTML</h3>
            <hr />
            <h3>CSS</h3>
          </div>
          
        </div>
     </div>
  );
}


export default About;
