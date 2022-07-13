import React from "react";
import LoveHeart from "../common/LoveHeart";
const MoviesTable = (props) => {
  const { paginatedMovies, onDelete, onLike, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th
            style={{ cursor: "pointer" }}
            scope="col"
            onClick={() => onSort("title")}
          >
            Title
          </th>
          <th
            style={{ cursor: "pointer" }}
            scope="col"
            onClick={() => onSort("genre.name")}
          >
            Genre
          </th>
          <th
            style={{ cursor: "pointer" }}
            scope="col"
            onClick={() => onSort("dailyRentalRate")}
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
};

export default MoviesTable;
