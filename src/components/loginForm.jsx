import React, { Component } from "react";
import Input from "../common/input";
import Joi from "joi-browser";
import Form from "../common/form";

class LoginForm extends Form {
  // Note: null and undefined cannot be used as the value of the controlled state
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  // Schema is dependent upon each form
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            fieldName="username"
            label="User Name"
            value={data.username}
            placeholder="User Name"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            fieldName="password"
            label="Password"
            value={data.password}
            placeholder="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
