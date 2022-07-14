import React, { Component } from "react";
import LoveHeart from "../common/LoveHeart";
import TableHeader from "../common/tableHeader";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "dailyRentalRate", label: "Ratings" },
    { label: "Likes" },
    { label: "Edits" },
  ];
  render() {
    const { paginatedMovies, onDelete, onLike } = this.props;
    return (
      <table className="table">
        <TableHeader columns={this.columns} />
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
