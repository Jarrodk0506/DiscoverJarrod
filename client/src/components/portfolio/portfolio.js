import React, { Component } from "react";
import "./portfolio.css";
import shortcutz from "../assets/shortcutz.png"
import kodex from "../assets/kodex.JPG"
import trivia from "../assets/trivia.JPG"
import wordGuess from "../assets/wordGuess.JPG"
import train from "../assets/train.JPG"
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
                                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a href=" https://k0dex.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={kodex} className="d-block w-100" alt="..." /></a>
                                        <div className="carousel-text">
                                            <p>Kodex</p>
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
                                            <p>Trivia</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <a href="https://jarrodk0506.github.io/Word-Guess-Game/" target="_blank" rel="noopener noreferrer"><img src={wordGuess} className="d-block w-100" alt="..." /></a>
                                        <div className="carousel-text">
                                            <p>word-guess-game</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <a href="https://jarrodk0506.github.io/Train-Schedule/" target="_blank" rel="noopener noreferrer"><img src={train} className="d-block w-100" alt="..." /></a>
                                        <div className="carousel-text">
                                            <p>Train</p>
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
