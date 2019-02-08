import React, { Component } from 'react';
import nfl from './nfl.png';
import './App.css';
import teambuilder from'./teambuilder.js';
import register from './register.js';
import Account from './account';
import Home from './home.js';
import Update from './update.js';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
       <Router>
       <div>
        
        <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              {(sessionStorage.getItem("logUser"))=== null ? <li><Link to="/register">Register</Link></li>:<li><Link to="/teambuilder">Team Builder</Link></li>}
              
              {(sessionStorage.getItem("logUser")) === null ? <li><Link to="/account">Login</Link></li> : <li><Link to="/update">Update Account</Link></li>}
              <li><Link to="/account" onClick={() => { sessionStorage.removeItem("logUser"); window.location.reload() }}>Logout</Link></li>

            </ul>
          </nav>
          <div className= "logo"><a href="/"><img src={nfl} className="nfl-logo" alt="logo" /></a></div>
          <div className= "logo2"><a href="/"><img src={nfl} className="nfl-logo2" alt="logo" /></a></div>
       

        <div className="nfl">
        <h1 className= "nfl-main-heading">Welcome to The NFL Team Builder</h1>
           <header className="nfl-header">
              <Route exact path="/" component={Home} />
              {(sessionStorage.getItem("logUser"))=== null ?  <Route path="/teambuilder" component={register} />:<Route path="/teambuilder" component={teambuilder} />}
              <Route path="/register" component={register} />
              <Route path="/account" component={() => <Account username={this.user} />} />
              <Route path="/update" component={Update} />


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
