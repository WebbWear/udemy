import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My New React App</h1>
        <Person name="Jeff" age="45" />
        <Person name="Kathleen" age="45" />
        <Person name="Anastasia" age="10" />


      </div>
    );
  }
}

export default App;
