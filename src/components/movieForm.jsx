import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", rate: 0 },
    genres: [],
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    rate: Joi.number().min(0).max(10).required().label("Ratings"),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
  }

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form>
          {this.renderInput("title", "Title")}
          {this.renderSingleSelect("genre", "Genre", this.state.genres)}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
