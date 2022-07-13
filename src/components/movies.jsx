import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import LoveHeart from "../common/LoveHeart";
import Pagination from "../common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../common/ListGroup";
import MoviesTable from "./moviesTable";

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

    // Keep the level of components consistant
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
          <MoviesTable
            paginatedMovies={paginatedMovies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
          />
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
