import React, { Component } from 'react';
import Hangman from './components/Hangman';
import Memory from './components/Memory';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Death Metal Games</h1>
        </header>
        <p className="App-intro">
          To get started, please choose a module.
        </p>
        <div className="modules">
          <Hangman />
          <Memory />
        </div>
      </div>
    );
  }
}

export default App;
