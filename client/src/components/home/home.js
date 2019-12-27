import React, { Component } from "react";
import picture from "../assets/picture.jpg";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="contentWrap">
        <div className="content">
          <div className="title">
            <h5>Hi, My name is Jarrod Krasnoff and I am a</h5>
            <h1>Junior Full-Stack Web-Developer</h1>
          </div>
          <div className="buttons">
            <button className="glow-on-hover" type="button">About me</button>
            <button className="glow-on-hover" type="button">Portfolio</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
