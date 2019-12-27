import React, { Component } from "react";
import "./home.css";

class Home extends Component {

  about = () => {
    this.props.history.push({
      pathname: "/about"
    });
  }

  portfolio = () => {
    console.log("portfolio");
  }

  render() {
    return (
      <div className="contentWrap">
        <div className="content">
          <div className="title">
            <h4>Hi, My name is Jarrod Krasnoff and I am a</h4>
            <h1>Junior Full-Stack Web-Developer</h1>
          </div>
          <div className="buttons">
            <button className="glow-on-hover" onClick={this.about} type="button">About me</button>
            <button className="glow-on-hover" onClick={this.portfolio} type="button">Portfolio</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
