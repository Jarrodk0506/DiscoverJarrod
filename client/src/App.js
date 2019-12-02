import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="discover">Discover Jarrod</h2>
          </div>
        </div >
      </div >
    );
  }
}

export default App;
