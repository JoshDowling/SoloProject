import React, { Component } from 'react';

import './App.css';

class teambuilder extends Component {
  render() {
    return (
       
       <div>
        <p>teambuilder</p>
        <p>
          This is the component.
        </p> 

        <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Team</th>
      <th scope="col">Age</th>
      

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Bobcats</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Lions</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>The Bird</td>
      <td>Eagles</td>
      <td>25</td>

    </tr>
  </tbody>
</table> 
      </div>
    );
  }
}

export default teambuilder;