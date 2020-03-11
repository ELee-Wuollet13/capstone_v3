
import React, { Component } from 'react';
import './App.css';
import SuitsContainer from './components/SuitsContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Suit List</h1>
        </div>
        <SuitsContainer />
      </div>
    );
  }
}

export default App;
