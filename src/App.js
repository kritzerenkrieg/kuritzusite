import './App.css';
import React, { Component } from 'react';
import Navbar from "./component/navbar.js";

class App extends Component {
  render() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src="https://i.ibb.co/jw60y4b/Group-11-2.png" alt="logo" />
        <p>
          Edit src/App.js and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
