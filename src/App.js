import React, { Component } from 'react';
import nfl from './nfl.png';
import './App.css';
import teambuilder from'./teambuilder.js';
import register from './register.js';
import account from './account';
import Home from './home.js';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
       <Router>
       <div>
        
        <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/teambuilder">Team Builder</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/account">My Account</Link></li>

            </ul>
          </nav>
          <div className= "logo"><img src={nfl} className="nfl-logo" alt="logo" /></div>
          <div className= "logo2"><img src={nfl} className="nfl-logo2" alt="logo" /></div>
       

        <div className="nfl">
        <h1 className= "nfl-main-heading">Welcome to The NFL Team Builder</h1>
           <header className="nfl-header">
              <Route exact path="/" component={Home} />
              <Route path="/teambuilder" component={teambuilder} />
              <Route path="/register" component={register} />
              <Route path="/account" component={account} />

          </header>
              
        </div>
        <footer class="footer">
        <p>© Josh Dowling 2019</p>
      </footer>
      </div>
      </Router>
    );
  }
}

export default App;
