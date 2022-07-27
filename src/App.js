import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieDetails from "./components/movieDetails";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/" element={<Navigate to="/movies" />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;
