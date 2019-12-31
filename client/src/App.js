import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar"
import Home from "./components/home/home"
import About from "./components/about/about"
import Portfolio from "./components/portfolio/portfolio"
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;
