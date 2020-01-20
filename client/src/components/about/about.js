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
                        <p>
                            My name is Jarrod Krasnoff. I'm an aspiring web developer. I was born and raised in Florida and worked in
                            the timeshare industy for many years. I was always drawn towards tech and so I decided to make my
                            career choice in the tech industry. I've been attending UCF coding bootcamp and am currently learning
                            Full-stack development.
                        </p>
                        <p>
                            I attended a class at Valencia College in C++. I learned a little bit but had a very difficult
                            semester with the teacher becoming ill half way through the course. I'd like to look into many
                            more languages in the future to broaden my talent.
                        </p>
                        <p>
                            I'm currently looking for entry level employment to begin my experience in the development field. I am
                            interested in coding robotics, Video games, and am also interested in learning graphic design. Now that
                            I've found the career field I love I'm excited to learn as much as I possibly can about everything.
                        </p>
                        <p>
                            Some Technologies I've learned so far : React, Node.JS, MySql, MongoDB, Handlebars, AJAX, API, HTML, CSS, Javascript, and a little bit of PHP and Laravel for PHP.
                        </p>
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
