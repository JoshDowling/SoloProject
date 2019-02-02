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

     checkUser = () => {

      axios.post('http://localhost:8080/solo-project/nfl/account/login', {
        username: this.state.username,
        password: this.state.password
      })
        .then((response) => {
          if (response.data[0] == this.state.username) {
            sessionStorage.setItem("logUser", response.data[0]);
  
  
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
    handleSubmit = (e) => {
  
      this.checkUser();
  
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }

      
  render() {
    return (
       
       <div className = "acpara">
  
  
  <form class="form-signin" onSubmit={this.handleSubmit}>
    
    <a href= "/"><img class="mb-4" src={nfl} alt="" width="150" height="200"/></a>
    <h1 class="h3 mb-3 font-weight-normal">{ sessionStorage.getItem("logUser") === null ? "Please sign in":sessionStorage.getItem("logUser") + " Is Logged In"}</h1>
    <label for="username" class="sr-only">Username</label>
    <div class="form-group"> 
          <input onChange={this.handleChange} type="name" id="username" class="form-control" placeholder="Username" required="" autofocus="" />
          </div>
          <label for="inputPassword" class="sr-only">Password</label>
          <div class="form-group">
          <input onChange={this.handleChange} type="password" id="password" class="form-control" placeholder="Password" required="" />
    </div>

  <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>Sign in</button>
 
  </form>
       
  </div>
    );
  }
}

export default account;