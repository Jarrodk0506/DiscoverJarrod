import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Divtest from "../src/components/wrapper/wrapper"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="discover">Discover Jarrod</h2>
          </div>
          <Divtest></Divtest>
        </div >
      </div >
    );
  }
}

export default App;
