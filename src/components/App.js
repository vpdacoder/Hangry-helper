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


class App extends Component {
  render() {
    return (
      <Router>
          <div className='container'>
            <Nav />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/helper' component={Helper} />
              <Route path='/trending' component={Trending} />
              <Route render={function () {
                return <p>Not Found</p>
              }} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
