import React, { Component } from 'react';
import logo from './images/logo.svg';
import img1 from './images/img1.jpg';


import './App.css';
import './explore.css';
import Explore from './explore.js';





class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <p className="App-intro">
          Woovly - explore page 
        </p>
        <Explore/>  
      </div>
    );
  }
}

export default App;
