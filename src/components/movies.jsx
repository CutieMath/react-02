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
    // make a new array so that all genres can be used
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  handleDelete = (movie) => {
    const newMovies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: newMovies });
  };
  handleGenreSelect = (genre) => {
    // set currPage to one when a different genre is selected
    this.setState({ selectedGenre: genre, currPage: 1 });
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
    const { movies, genres, pageSize, currPage, selectedGenre } = this.state;
    if (moviesCount === 0) return <p>No movies in the database x</p>;

    // filter the move
    const filteredMovies =
      selectedGenre && selectedGenre._id // only filter the genres if it has ID property
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;
    // paginate the movie
    const paginatedMovies = paginate(filteredMovies, currPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filteredMovies.length} movies in the database.</p>
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
            itemsCount={filteredMovies.length}
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
