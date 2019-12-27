import React, { Component } from "react";
import picture from "../assets/picture.jpg";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="contentWrap">
            {/* <div className="picturediv">
              <img className="picture" src={picture}></img>
            </div> */}
            <div className="content">
              <h4>Hi, My name is Jarrod Krasnoff and I am a</h4>
              <h1>Junior Full-Stack Web-Developer</h1>
              <button className="btn btn-light">About me</button>
              <button className="btn btn-light">Portfolio</button>
            </div>
          </div>
    );
  }
}

export default Home;