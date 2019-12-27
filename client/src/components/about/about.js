import React, { Component } from "react";
import "./about.css";

class About extends Component {


  render() {
    return (
      <div className="contentWrap">
        <div className="content">
          <div className="title">
            <h1>We're talking aboot me now</h1>
            <button className="glow-on-hover" onClick={this.portfolio} type="button">Portfolio</button>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
