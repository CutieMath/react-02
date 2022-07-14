import React, { Component } from "react";
import LoveHeart from "../common/LoveHeart";

class MoviesTable extends Component {
  // !IMPORTANT!
  // Change the sortColumn state in this component so it's reusable
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      // if same path (the path was clicked twice)
      // Then toggle desc and asc
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      // if different path
      // Sort the path in asc order
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { paginatedMovies, onDelete, onLike } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th
              style={{ cursor: "pointer" }}
              scope="col"
              onClick={() => this.raiseSort("title")}
            >
              Title
            </th>
            <th
              style={{ cursor: "pointer" }}
              scope="col"
              onClick={() => this.raiseSort("genre.name")}
            >
              Genre
            </th>
            <th
              style={{ cursor: "pointer" }}
              scope="col"
              onClick={() => this.raiseSort("dailyRentalRate")}
            >
              Ratings
            </th>
            <th scope="col">Likes</th>
            <th scope="col">Edits</th>
          </tr>
        </thead>
        <tbody>
          {paginatedMovies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <LoveHeart loved={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
