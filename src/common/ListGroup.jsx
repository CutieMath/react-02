import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";

class ListGroup extends Component {
  state = { genres: getGenres() };
  render() {
    const genres = this.state.genres;
    return (
      <div class="list-group">
        {genres.map((genre) => (
          <a href="#" className="list-group-item list-group-item-action">
            {genre.name}
          </a>
        ))}
      </div>
    );
  }
}

export default ListGroup;
