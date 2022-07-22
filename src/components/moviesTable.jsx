import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoveHeart from "../common/LoveHeart";
import Table from "../common/table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movieItem) => (
        <Link to={`/movies/${movieItem._id}`}>{movieItem.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "dailyRentalRate", label: "Ratings" },
    {
      label: "Likes",
      content: (movie) => (
        <LoveHeart
          loved={movie.liked}
          onClick={() => this.props.onLike(movie)}
        />
      ),
    },
    {
      label: "Edits",
      content: (movie) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { paginatedMovies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={paginatedMovies}
      />
    );
  }
}

export default MoviesTable;
