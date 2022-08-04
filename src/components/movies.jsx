import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { Link } from "react-router-dom";

import Pagination from "../common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../common/ListGroup";
import SearchBox from "../common/searchBox";
import MoviesTable from "./moviesTable";

import _, { filter } from "lodash";

class Movies extends Component {
  state = {
    genres: [],
    movies: [],
    pageSize: 4,
    currPage: 1,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" }, // initial state for sorting
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
    this.setState({ selectedGenre: genre, searchQuery: "", currPage: 1 });
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
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currPage: 1 });
  };

  getArrangedPageData = () => {
    const {
      movies: allMovies,
      pageSize,
      currPage,
      selectedGenre,
      sortColumn,
      searchQuery,
    } = this.state;

    // filter/search the move
    let filteredMovies = allMovies;
    if (searchQuery) {
      filteredMovies = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id) {
      filteredMovies = allMovies.filter(
        (m) => m.genre._id === selectedGenre._id
      );
    }

    // sort the movie
    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    // paginate the movie
    const paginatedMovies = paginate(sortedMovies, currPage, pageSize);
    // function return
    return { totalCount: filteredMovies.length, paginatedMovies };
  };

  render() {
    const { length: moviesCount } = this.state.movies;
    // destructuring the elements so the code is cleaner
    const { genres, pageSize, currPage, sortColumn, searchQuery } = this.state;
    if (moviesCount === 0) return <p>No movies in the database x</p>;
    const { totalCount, paginatedMovies } = this.getArrangedPageData();
    // Keep the level of abstraction consistant
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
          <Link to="/movies/new">
            <button className="btn btn-primary mb-3">New Movie</button>
          </Link>
          <p>Showing {totalCount} movies in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            paginatedMovies={paginatedMovies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
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
