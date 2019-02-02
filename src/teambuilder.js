import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Teambuilderplus from './teambuilderplus.js';

class teambuilder extends Component {
 
  constructor() {
    super();
    this.handler = this.handler.bind(this);
    this.state = {
        team: "Example",
    }

    this.update = () => {
        axios.get('http://localhost:8080/solo-project/nfl/account/getTeams')
            .then(res => {
                const team = res.data;
                this.setState({ team });
            })
    }
}

handler() {
    this.update();
}

componentDidMount() {
    axios.get('http://localhost:8080/solo-project/nfl/account/getTeams')
        .then(res => {
            const team = res.data;
            this.setState({ team });
        })
}
    
addTeam = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/solo-project/nfl/account/addTeam', {
       teamName: this.refs.teamName.value,
       location: this.refs.location.value,
       accountID: this.refs.accountID.value
    }).then(response => {
        this.update();
    });
    this.refs.teamName.value = null;
    this.refs.location.value = null;
    this.refs.accountID.value = null;
  } 
 
  render() {
    
    let elements = [];
    let team = this.state.team;
    console.log(this.state.team);
    
    for (let i = 0; i < this.state.team.length; i++) {
        elements.push(
            <Teambuilderplus
                action={this.handler}
                ID={this.state.team[i].teamID}
                teamName={this.state.team[i].teamName}
                location={this.state.team[i].location}
               accountID={this.state.team[i].accountID}

            />
        );
    }
  
    return (
       
      <div className = "acpara">
         <div className="databaseSection">
                    <form className='itemForm' onSubmit={this.addTeam}>
                        <fieldset>
                            <legend className= "teambname">Add a New Team</legend>
                            <div class="form-group">
                            <input ref="teamName" type="name"  class="form-control"  required="" autofocus="" placeholder="Enter Team Name*" />
                            </div>
                            <div class="form-group">
                            <input ref="location" type="name"  class="form-control"  required="" autofocus="" placeholder="Enter Team Location*" />
                            </div><div class="form-group">
                            <input ref="accountID" type="name" class="form-control"  required="" autofocus="" placeholder="Enter Account Number*" />
                            </div>
                            <button class="btn btn-lg btn-primary btn-block" type='submit'>Submit</button>
                                                        
                        </fieldset>
                    </form>
                   
                    <br />
                    <h2 className= "teambname"> <u>Current Teams</u></h2>
                    {elements}
            </div>
            <br />
      </div>
    );
  }
}

export default teambuilder;