import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="mb-4 px-4 navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/movies" className="navbar-brand">
        MovieApp
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/movies" className="nav-link">
              Movies
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/customers" className="nav-link">
              Customers
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/rentals" className="nav-link">
              Rentals
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
