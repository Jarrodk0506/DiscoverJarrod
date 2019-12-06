import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import github from "./github.png"
import linkedin from "./linkedin.jpg"
import instagram from "./instagram.png"
import Divtest from "../src/components/wrapper/wrapper"


class App extends Component {

  handleGitClick = e => {
    e.preventDefault();
    console.log("clicked");
  }


  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="discover">Discover Jarrod</h2>
            <ul>
              <li>
                <button id="linkButton"><img onClick={this.handleGitClick} id="linkImage" src={github} alt="github" href="https://github.com/Jarrodk0506" target="_blank" /></button>
              </li>
              <li>
                <button id="linkButton"><img onClick={this.handleGitClick} id="linkImage" src={linkedin} alt="github" href="https://github.com/Jarrodk0506" target="_blank" /></button>
              </li>
              <li>
                <button id="linkButton"><img onClick={this.handleGitClick} id="linkImage" src={instagram} alt="github" href="https://github.com/Jarrodk0506" target="_blank" /></button>
              </li>
            </ul>
          </div>
        <div className="contentWrap">
          <h1> Test font </h1>
        </div>
          {/* <Divtest></Divtest> */}
        </div >
      </div >
    );
  }
}

export default App;
