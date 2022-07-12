import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import LoveHeart from "../common/LoveHeart";
import Pagination from "../common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../common/ListGroup";

class Movies extends Component {
  state = {
    genres: [],
    movies: [],
    pageSize: 4,
    currPage: 1,
  };
  // Use component did mount so that the data have time to query from the backend
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }
  handleDelete = (movie) => {
    const newMovies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: newMovies });
  };
  handleGenreSelect = (genre) => {
    console.log(genre);
  };
  handleLike = (movie) => {
    const newMovies = [...this.state.movies];
    const index = newMovies.indexOf(movie);
    newMovies[index].liked = !newMovies[index].liked;
    this.setState({ movies: newMovies });
  };
  handlePageChange = (pageClicked) => {
    this.setState({ currPage: pageClicked });
  };

  render() {
    const { length: moviesCount } = this.state.movies;
    // destructuring the elements so the code is cleaner
    const { movies, genres, pageSize, currPage } = this.state;
    if (moviesCount === 0) return <p>No movies in the database x</p>;
    const paginatedMovies = paginate(movies, currPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup items={genres} onItemSelect={this.handleGenreSelect} />
        </div>
        <div className="col">
          <p>Showing {moviesCount} movies in the database.</p>
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
                    <LoveHeart
                      loved={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handleDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={moviesCount}
            pageSize={pageSize}
            onPageClick={this.handlePageChange}
            currPage={currPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
