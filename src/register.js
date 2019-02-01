import React, { Component } from 'react';
import nfl from './nfl.png';
import './App.css';
import axios from 'axios';


class register extends Component {
    
    constructor() {
        super();
        this.state = {
          name: null,
          username: null,
          password: null
        }
      }
    
      addaccount = () =>{
      axios.post("http://localhost:8080/solo-project/nfl/account/addAccount",{
            name: this.state.name,
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
            
<div  class="form-signin" onSubmit={this.handleSubmit}>
<form class="form-signin" onSubmit={this.handleSubmit}>
            <a href="/"><img class="mb-4" src={nfl}  alt="" width="150" height="200"/> </a>
            <h1 class="h3 mb-3 font-weight-normal">Please Register an Account</h1>
                <div class="form-content">
                                            <div >
                            <div class="form-group">
                            <label for="inputName" class="sr-only">Your Name</label>
                                <input onChange={this.handleChange} type="name" id="name" class="form-control" placeholder="Your Name*" required="" autofocus=""/>
                                </div>
                            <div class="form-group"> 
                            <label for="inputUsername" class="sr-only">Username</label>
                                <input onChange={this.handleChange} type="username" id="username" class="form-control" placeholder="Username*" required="" autofocus=""/>
                                </div>
                                            
                            <div class="form-group">
                            <label for="inputPassword" class="sr-only">Password</label>
                                <input onChange={this.handleChange} type="password" id="password" class="form-control" placeholder="Password*" required=""/>
                            </div>  
                       </div>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                </form>
        </div>
      </div>
    );
  }
}

export default register;