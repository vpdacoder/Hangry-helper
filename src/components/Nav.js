var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/helper'>Hangry Helper</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/trending'>Trending</NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
