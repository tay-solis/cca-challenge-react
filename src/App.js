import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Sections from './components/Sections'
import StudentSectionList from './components/StudentSectionList'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={ Sections }/>
          <Route path="/mycourses" component={ StudentSectionList }/>
        </Switch>
      </div>
    );
  }
}

export default App;
