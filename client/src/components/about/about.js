import React, { Component } from "react";
import "./about.css";

class About extends Component {

    home = () => {
        this.props.history.push({
            pathname: "/"
        });
    };

    portfolio = () => {
        this.props.history.push({
            pathname: "/portfolio"
        });
    };

    render() {
        return (
            <div className="contentWrap">
                <div className="content">
                    <div className="aboutTitle">
                        <h1>We're talking aboot me now</h1>
                    </div>
                    <div className="aboutButtons">
                        <button className="glow-on-hover" onClick={this.home} type="button">Home</button>
                        <button className="glow-on-hover" onClick={this.portfolio} type="button">Portfolio</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;