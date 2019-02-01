import React, { Component } from 'react';
import axios from 'axios';

class Teambuilderplus extends Component {
    deleteTeam = () => {
        axios.delete('http://localhost:8080/solo-project/nfl/account/deleteTeam/' + this.props.ID)
            .then(res => {
                this.props.action();
                console.log(res)
            });
        console.log(this.props.ID);
    }

    updateTeam = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/solo-project/nfl/account/updateTeam/' + this.props.ID, {
            teamName: this.refs.teamName.value,
            location: this.refs.location.value,
            accountID: this.refs.accountID.value
        }).then(response => {
            this.props.action();
            console.log(response)
        });
        this.refs.teamName.value = '';
        this.refs.location.value = '';
        this.refs.accountID.value = '';
    }

    render() {
        return (
            <div className='listButton'>
                <fieldset>
                    <legend>{this.props.teamName}</legend>
                    <div>{this.props.location + ', Account ID: ' + this.props.accountID}</div>
                    <fieldset>
                        <legend>Edit Team</legend>
                        <div className='column'>
                            <form className='updateForm' onSubmit={this.addTeam}>
                                <input ref="teamName" type="text" placeholder="Enter Team Name" />
                                <input ref="location" type="text" placeholder="Enter New Location" />
                                <input ref="accountID" type="text" placeholder="Enter Account ID" />
                                <br />

                            </form>
                        </div>
                        <button id='updateButton' onClick={this.updateTeam}>Update</button>
                        <button id='deleteButton' onClick={this.deleteTeam}>Delete</button>
                    </fieldset>
                </fieldset>
            </div>
        );
    }
}
export default Teambuilderplus;