import React, { Component } from "react";
import "./portfolio.css";

class Portfolio extends Component {

    about = () => {
        this.props.history.push({
            pathname: "/about"
        });
    };

    home = () => {
        this.props.history.push({
            pathname: "/"
        });
    };

    render() {
        return (
            <div className="contentWrap">
                <div className="content">
                    <div className="portfolioTitle">
                        <h1>This is a portfolio</h1>
                    </div>
                    <div className="portfolioButtons">
                        <button className="glow-on-hover" onClick={this.home} type="button">Home</button>
                        <button className="glow-on-hover" onClick={this.about} type="button">About</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
