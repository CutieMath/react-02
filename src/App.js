import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import Genres from "./components/genres";

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="col">
          <Genres />
        </div>
        <div class="col">
          <Movies />
        </div>
      </div>
    );
  }
}

export default App;
