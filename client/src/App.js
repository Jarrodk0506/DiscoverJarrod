import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar"
import Home from "./components/home/home"


class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Sidebar />
          <Home />
        </div >
      </div >
    );
  }
}

export default App;
