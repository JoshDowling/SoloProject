import React, { Component } from 'react';
import axios from 'axios';

class Teambuilderplus extends Component {
    deleteTeam = () => {
        axios.delete(' http://nfl.uksouth.cloudapp.azure.com:8080/solo-project/nfl/account/deleteTeam/' + this.props.ID)
            .then(res => {
                this.props.action();
                console.log(res)
            });
        console.log(this.props.ID);
    }

    updateTeam = (e) => {
        e.preventDefault();
        axios.put(' http://nfl.uksouth.cloudapp.azure.com:8080/solo-project/nfl/account/updateTeam/' + this.props.ID, {
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
                <h1>{'Team Name: ' +this.props.teamName}</h1>
                    <div>
                    <p>{'Team Location: ' +this.props.location} </p>
                    <p>{'Account ID: ' + this.props.accountID}</p>  
                    </div>
                    
                        <legend>Edit Team Below </legend>
                        <div className='column'>
                            <form className='updateForm' onSubmit={this.addTeam}>
                            <div class="form-group"> 

                                <input ref="teamName" type="name"  class="form-control"  required="" autofocus="" placeholder="Enter Team Name*" />
                            </div>
                            <div class="form-group">  
                                <input ref="location" type="name"  class="form-control"  required="" autofocus="" placeholder="Enter New Location*" />
                             </div>
                             <div class="form-group">
                               <input ref="accountID" type="name"  class="form-control"  required="" autofocus="" placeholder="Enter Account ID*" />

                             </div>   

                            </form>
                        </div>
                        <button id='updateButton' class="btn btn-lg btn-primary btn-block" onClick={this.updateTeam}>Update</button>
                        <button id='deleteButton' class="btn btn-lg btn-primary btn-block" onClick={this.deleteTeam}>Delete</button>
                        <br/>
            </div>
        );
    }
}
export default Teambuilderplus;