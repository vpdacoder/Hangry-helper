import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Trending from './Trending';
import Helper from './Helper';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Cuisine from './Cuisine';
import Location from './Location';
import Feeling from './Feeling';


class App extends Component {
  render() {
    return (
      <Router>
          <div className='container'>
            <Nav />
            <Cuisine />
            <Location />
            <Feeling />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/helper' component={Helper} />
              <Route path='/trending' component={Trending} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
