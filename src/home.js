import React, { Component } from 'react';
import rw from './rw.jpg';
import './App.css';

class home extends Component {
  render() {
    return (
      <div className = "acpara">
       <div>
        <p>Welcome to The NFL Team Builder application</p>
        <p className= "smallText">New to American Football? Watch an introduction below</p>
        <iframe width="90%" height="490"  src="https://www.youtube.com/embed/uE7qVAtNwQk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 		      <br/>
           <br/>
           <p>This application will allow you to create an American Football team yourself.</p> 
       		<p> Ever wondered what your dream team may look like? </p>  
           <p>Well now is your chance.</p>
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