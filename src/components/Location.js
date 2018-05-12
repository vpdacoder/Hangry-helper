import React, { Component } from 'react';
var Space = require('../DB/Location');



class Location extends Component {
  render() {
    return (
      <div>
        <h1> Select One </h1>

        <ul className='popular-list'>
          {Space.map(function(data){
            return (
              <li key={data.type}>
                <div className='item'>
                  {data.type}
                </div>
              <div>
                <img className='thumbnail' src={data.picture} />
              </div>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Location;
