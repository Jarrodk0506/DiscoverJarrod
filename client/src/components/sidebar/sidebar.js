import React, { Component } from "react";
import "./sidebar.css";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.jpg"
import instagram from "../assets/instagram.png"
import logo from "../assets/logo.svg";

class Sidebar extends Component {

    render() {
        return (
                <div className="sidebar">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="discover">Discover Jarrod</p>
                    <ul>
                        <li>
                            <button id="linkButton"><a href="https://github.com/Jarrodk0506" target="_blank" rel="noopener noreferrer"><img id="linkImage" src={github} alt="github" /></a></button>                        </li>
                        <li>
                            <button id="linkButton"><a href="https://linkedin.com/in/jarrod-krasnoff-tech" target="_blank" rel="noopener noreferrer"><img id="linkImage" src={linkedin} alt="github" /></a></button>                        </li>
                        <li>
                            <button id="linkButton"><a href="https://www.instagram.com/jdkrasnoff/?hl=en" target="_blank" rel="noopener noreferrer"><img id="linkImage" src={instagram} alt="github" /></a></button>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default Sidebar;

