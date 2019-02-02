import React, { Component } from 'react';
import rw from './rw.jpg';
import './App.css';

class home extends Component {
  render() {
    return (
      <div className = "acpara">
       <div>
        <p>Welcome to The NFL Team Builder application</p>
      
 		      <p>This application will allow you to create an American Football team yourself.</p> 
       		<p> Ever wondered what your dream team may look like? Well now is your chance.</p>  
          <p className= "smallText"><a href="account">Login</a> or <a href="register">Register</a> an account to start creating your team.</p>
          <p>  </p>
          <img class="homeimage" src={rw} alt="" width="350" height="500"/>
          <br/>
      </div>
      </div>
    );
  }
}

export default home;