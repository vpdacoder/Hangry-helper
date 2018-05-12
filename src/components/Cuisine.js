import React, { Component } from 'react';
var Info = require('../DB/Cuisine');



class Cuisine extends Component {
  render() {
    return (
      <div>
        <h1> No-gos </h1>
        <p> Cuisine that got no shot of being ingested today </p>
        <ul className='popular-list'>
          {Info.map(function(data){
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

export default Cuisine;
