import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/movies" element={<Movies />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;
