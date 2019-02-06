import React, { Component } from 'react';
import axios from 'axios';
import nfl from './nfl.png';
import './App.css';

class account extends Component {
  
  constructor() {
    super();
    this.state = {
      account: [],
      username: null,
      password: null
    };
     }

update() {
  // let username = document.getElementById('username').value;
  // let password = document.getElementById('password').value;
axios.get("http://nfl.uksouth.cloudapp.azure.com:8080/solo-project/nfl/account/getAccounts")
.then((response) => {
        var username = this.state.username;
        var password = this.state.password;
        
        this.state.account.forEach(function(user){
          if(username===account.username){
            console.log("account found")
          }
          if(password===account.password){
            console.log("account authenticated")
        }
      }
    
);
} 
)}

    
  render() {
    return (
       
       <div className = "acpara">
  <form class="form-signin" onSubmit={this.handleSubmit}>
    
    <a href= "/"><img class="mb-4" src={nfl} alt="" width="150" height="200"/></a>
    <h1 class="h3 mb-3 font-weight-normal">Please Sign In</h1>
    <div class="form-group">
    <label for="inputUsername" class="sr-only">Username</label>
    <input  type="username" id="username" class="form-control" placeholder="Username" required="" autofocus=""/>
   
    </div>
    <div class="form-group">
    <label for="inputPassword" class="sr-only">Password</label>
    <input  type="password" id="password" class="form-control" placeholder="Password" required=""/>
    
    </div>
    <ul> 
     <li className= "accountDisplay">{this.state.account.accountID}</li>
     <li className= "accountDisplay">{this.state.account.name}</li>
     <li className= "accountDisplay">{this.state.account.username}</li>
     <li className= "accountDisplay">{this.state.account.password}</li>
    </ul>
  <button class="btn btn-lg btn-primary btn-block" type="submit"onClick={() => this.login()}>Sign in</button>
 
  </form>
       
  </div>
    );
  }
}

export default account;