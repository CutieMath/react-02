import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class RegisterForm extends Form {
  state = { data: { username: "", password: "", displayName: "" }, errors: {} };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
    displayName: Joi.string().required().label("Display Name"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("displayName", "Display Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
