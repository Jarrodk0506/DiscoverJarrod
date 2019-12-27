import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar"
import Home from "./components/home/home"
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Route exact path="/" component={Home} />
        </div>
      </Router>

      // <div className="App">
      //   <div className="container-fluid">
      //     <Sidebar />
      //     <Home />
      //   </div >
      // </div >
    );
  }
}

export default App;
