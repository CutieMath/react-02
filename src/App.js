import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navBar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Movies />
        </main>
      </>
    );
  }
}

export default App;
