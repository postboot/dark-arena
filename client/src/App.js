import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Jumbo from "./Components/Jumbo";
import YesButton from "./Components/YesButton";
import NoButton from "./Components/NoButton";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img src="https://upload.wikimedia.org/wikipedia/en/d/d3/Darka.jpg" alt="logo" />
          <h2>Welcome to Colosseum of Softlit Areas</h2>
        </div>
        <Jumbo/>
        <YesButton/>
        <NoButton/>
      </div>
    );
  }
}

export default App;
