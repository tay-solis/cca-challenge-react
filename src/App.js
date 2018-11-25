import React, { Component } from 'react';

import Header from './components/Header'
import Sections from './components/Sections'
import StudentSectionList from './components/StudentSectionList'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Sections />
      </div>
    );
  }
}

export default App;
