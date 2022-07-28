import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", rate: 0 },
    errors: {},
  };
  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    rate: Joi.number().min(0).max(10).required().label("Ratings"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
