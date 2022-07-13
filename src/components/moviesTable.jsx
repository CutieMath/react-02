import React from "react";
import LoveHeart from "../common/LoveHeart";
const MoviesTable = (props) => {
  const { paginatedMovies, onDelete, onLike } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Ratings</th>
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