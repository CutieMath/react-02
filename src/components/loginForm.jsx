import React, { Component } from "react";
import Input from "../common/input";
import Joi from "joi-browser";
import { result } from "lodash";

class LoginForm extends Component {
  // Note: null and undefined cannot be used as the value of the controlled state
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  // Note: minimise the use of Ref
  username = React.createRef();
  validate = () => {
    const result = Joi.validate(this.state.account, this.schema);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      // map array into an object
      errors[item.path[0]] = item.message;
    }
    console.log(errors);
    return errors;

    // Basic method for form validation
    // const errors = {};
    // const { account } = this.state;
    // if (account.username.trim() === "")
    //   errors.username = "Username is required.";
    // if (account.password.trim() === "")
    //   errors.password = "Password is required.";
    // return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    // basic validation
    if (name === "username") {
      if (value.trim() === "") {
        return "Username is required";
      }
    }
    if (name === "password") {
      if (value.trim() === "") {
        return "Password is required";
      }
    }
  };

  // This can be replaced by autoFocus attribute
  // componentDidMount() {
  //   this.username.current.focus();
  // }
  handleChange = ({ currentTarget: input }) => {
    // Validation on change
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    this.setState({ errors });

    // Change the state of the account for rendering
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Verify the input fields
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} }); // set to empty object
    if (errors) return;
    // Get the value from input fields
    console.log("submitted");
    // const username = this.username.current.value;
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            fieldName="username"
            label="User Name"
            value={account.username}
            placeholder="User Name"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            fieldName="password"
            label="Password"
            value={account.password}
            placeholder="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="mt-4 btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
