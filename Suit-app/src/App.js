
import React, { Component } from 'react';
import './App.css';
import SuitsContainer from './components/SuitsContainer'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Suit List</h1>
        </div>
        <Navbar />
        <SuitsContainer />
      </div>
    );
  }
}

export default App;
