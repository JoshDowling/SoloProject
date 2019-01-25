import React, { Component } from 'react';
import axios from 'axios';
import nfl from './nfl.png';
import './App.css';

class account extends Component {
  
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    }
  }

// update() {
//   let userInput = document.getElementById('inputUsername').value;
//   let userInput2 = document.getElementById('inputPassword').value;

// }
  
  addaccount = () =>{
  axios.post("http://localhost:8080/solo-project/nfl/account/addAccount",{
        username: this.state.username,
        password: this.state.password

      })
      .then(function (response){
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
    });
      
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.addaccount();
    
  }

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      });
  }

  render() {
    return (
       
       <div className = "acpara">
  <form class="form-signin" onSubmit={this.handleSubmit}>
    
    <img class="mb-4" src={nfl} alt="" width="150" height="200"/>
    <h1 class="h3 mb-3 font-weight-normal">Please Sign In</h1>
    <label for="inputUsername" class="sr-only">Username</label>
    <input onChange={this.handleChange} type="username" id="username" class="form-control" placeholder="Username" required="" autofocus=""/>
    <label for="inputPassword" class="sr-only">Password</label>
    <input onChange={this.handleChange} type="password" id="password" class="form-control" placeholder="Password" required=""/>
    <div class="checkbox mb-3"></div>
     
  
  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
 
  </form>
       
  </div>
    );
  }
}

export default account;