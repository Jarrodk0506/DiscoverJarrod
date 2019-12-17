import React, { Component } from "react";
import "./sidebar.css";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.jpg"
import instagram from "../assets/instagram.png"
import logo from "../assets/logo.svg";

class Sidebar extends Component {

    handleGitClick = e => {
        e.preventDefault();
        console.log("clicked");
      }


    render() {
        return (
            <div className="sidebar">
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
        );
    }
}

export default Sidebar;

