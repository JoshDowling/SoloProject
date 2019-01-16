import React, { Component } from 'react';
import nfl from './nfl.png';
import './App.css';

class account extends Component {
  render() {
    return (
       
       <div>
  <form class="form-signin">

    <img class="mb-4" src={nfl} alt="" width="150" height="200"/>
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
    <div class="checkbox mb-3">
   
    <label class="custom-select-sm">
      <input type="checkbox" value="remember-me"/> Remember me
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
 
  </form>
       
  </div>
    );
  }
}

export default account;