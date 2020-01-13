import React, { Component } from "react";
import "./portfolio.css";
import shortcutz from "../assets/shortcutz.png"
import kodex from "../assets/kodex.JPG"
import trivia from "../assets/trivia.JPG"
import wordGuess from "../assets/wordGuess.JPG"
import noms from "../assets/noms.JPG"

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
                    <div className="jumbotron">
                        <div className="jumboContent">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a href=" https://k0dex.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={kodex} className="d-block w-100" alt="..." /></a>
                                        <div className="carousel-text">
                                            <p>Kodex</p><p> a platform where code experts could get together and help each other fix problems with their code. Get ideas and find better practices. Create and edit your profile. Add your skills to the profile. Find top trending topics and what's new in the programing community Members can create posts where people from all over the nation can help solve problems with your code. </p><p>Technologies used: <ul className="techUsed"><li>Node.js</li><li>Express</li><li>MySQL</li><li>Passport-local</li> <li>Bcrypt</li><li> Handlebar</li></ul></p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <a href="https://github.com/Jarrodk0506/ShortCutz" target="_blank" rel="noopener noreferrer"><img src={shortcutz} className="d-block w-100" alt="..." /></a>
                                        <div className="carousel-text">
                                            <p>ShortCutz</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <a href="https://jarrodk0506.github.io/Trivia-game/" target="_blank" rel="noopener noreferrer"><img src={trivia} className="d-block w-100" alt="..." /></a>
                                        <div className="carousel-text">
                                            <p>90's Themed Nickelodeon Trivia game!</p><p>This is a fun quick project to learn how to use setTimeOut function. Try and Get all the questions correct! Fun trivia from every 90's Nickelodeon cartoons I loved from "aaahh!!! Real Monsters" to "Rugrats". You only get 10 seconds per question so do your best and good luck!</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <a href="https://jarrodk0506.github.io/Word-Guess-Game/" target="_blank" rel="noopener noreferrer"><img src={wordGuess} className="d-block w-100" alt="..." /></a>
                                        <div className="carousel-text">
                                            <p>Planetary Word-Guess-Game</p><p> Type the letter you guess one by one to guess what is the mystery planet! Watch as the game replaces the dashes with correctly guessed letters! Letters guess incorrectly go into the letters guessed section. Game will count your wins and how many tries you have left. You only get 10 tries, Good luck! P.s. Enjoy an instrumental if you'd please with the play button</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <a href="https://jarrodk0506.github.io/Project-1/index.html" target="_blank" rel="noopener noreferrer"><img src={noms} className="d-block w-100" alt="..." /></a>
                                        <div className="carousel-text">
                                            <p>Noms</p>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
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
