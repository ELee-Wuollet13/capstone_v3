
import React, { Component } from 'react';
import './App.css';
import SuitsContainer from './components/SuitsContainer'
import Navbar from './components/Navbar'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="container">

      <Header />
        <Navbar />
        <SuitsContainer />
      </div>
    );
  }
}

export default App;
