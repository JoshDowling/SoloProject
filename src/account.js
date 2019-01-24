import React, { Component } from 'react';
import axios from 'axios';
import nfl from './nfl.png';
import './App.css';

class account extends Component {
  
  constructor() {
    super();
    this.state = {
      account: ""
    };
  }

update() {
  let userInput = document.getElementById('inputUsername').value;
  let userInput2 = document.getElementById('inputPassword').value;
  axios.post("http://localhost:8080/solo-project/nfl/account/addAccount")
      .then((response) => {
        this.setState( {account:response.data.Search[0]})
        console.log(this.state.account)
      }
   );
      console.log(userInput)

  }

  render() {
    return (
       
       <div className = "acpara">
  <form class="form-signin">
    
    <img class="mb-4" src={nfl} alt="" width="150" height="200"/>
    <h1 class="h3 mb-3 font-weight-normal">Please Sign In</h1>
    <label for="inputUsername" class="sr-only">Username</label>
    <input type="username" id="inputUsername" class="form-control" placeholder="Username" required="" autofocus=""/>
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
    <div class="checkbox mb-3"></div>
     
  
  <button class="btn btn-lg btn-primary btn-block" onClick={() => this.update()} type="submit">Sign in</button>
 
  </form>
       
  </div>
    );
  }
}

export default account;