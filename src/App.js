import React, { Component } from "react";
import "./App.css";
import { HomePage } from "../src/components/home";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default connect()(App);
