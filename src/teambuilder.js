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
        axios.get('http://nfl.uksouth.cloudapp.azure.com:8080/solo-project/nfl/account/getTeams')
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
    axios.get('http://nfl.uksouth.cloudapp.azure.com:8080/solo-project/nfl/account/getTeams')
        .then(res => {
            const team = res.data;
            this.setState({ team });
        })
}
    
addTeam = (e) => {
    e.preventDefault();
    axios.post('http://nfl.uksouth.cloudapp.azure.com:8080/solo-project/nfl/account/addTeam', {
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
    let teams = this.state.team;
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
                            <legend>New Team</legend>
                            <input ref="teamName" type="text" placeholder="Enter Team Name" />
                            <input ref="location" type="text" placeholder="Enter Team Location" />
                            <input ref="accountID" type="text" placeholder="Enter Your Account #" />
                            <br />
                            <button type='submit'>Submit</button>
                                                        
                        </fieldset>
                    </form>
                    {elements}
            </div>
      </div>
    );
  }
}

export default teambuilder;