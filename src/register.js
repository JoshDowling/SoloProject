import React, { Component } from 'react';
import nfl from './nfl.png';
import './App.css';

class register extends Component {
  render() {
    return (
       
       <div className = "acpara">
            
<div class="container register-form">
            <div class="form">
            <img class="mb-4" src={nfl} alt="" width="150" height="200"/>
            <h1 class="h3 mb-3 font-weight-normal">Please Register an Account</h1>
                <div class="form-content">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your Name *" value=""/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Username *" value=""/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your Password *" value=""/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Confirm Password *" value=""/>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default register;