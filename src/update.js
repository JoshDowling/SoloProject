import React, { Component } from 'react';
import nfl from './nfl.png';
import './App.css';
import axios from 'axios';


class register extends Component {
    
        
      updateaccount = (e) => {
        e.preventDefault();
        axios.put('http://nfl.uksouth.cloudapp.azure.com:8080/solo-project/nfl/account/updateAccount/'+ (sessionStorage.getItem("logUser")),{
              name: this.refs.name.value,
              username: this.refs.username.value,
              password: this.refs.password.value

          }).then(response => {
              this.props.action();
              console.log(response)
          });
          this.refs.name.value = '';
          this.refs.username.value = '';
          this.refs.password.value = '';
      }

     
render() {
    return (
       
       <div className = "acpara">
            
<div  >
            <a href="/"><img class="mb-4" src={nfl}  alt="" width="150" height="200"/> </a>             
                        <h1>Update Account Below </h1>
                    
                        <div className='column'>
                            
                            <div class="form-group"> 
                                <input ref="name" type="name"  class="form-control"  required="" autofocus="" placeholder="Enter Name*" />
                            </div>
                            <div class="form-group">  
                                <input ref="username" type="name"  class="form-control"  required="" autofocus="" placeholder="Enter Username*" />
                             </div>
                             <div class="form-group">
                               <input ref="password" type="password"  class="form-control"  required="" autofocus="" placeholder="Enter Password*" />
                             </div>   

                           
                        </div>
                        <button id='updateButton' class="btn btn-lg btn-primary btn-block" onClick={this.updateaccount}>Update Account</button>
        </div>
      </div>
    );
  }
}

export default register;