import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = (movie) => {
    console.log(movie);
  };
  render() {
    return (
      <table class="table">
        {" "}
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Ratings</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    );
  }
}

export default Movies;
