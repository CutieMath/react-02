import React, { Component } from "react";
import Input from "../common/input";

class LoginForm extends Component {
  // Note: null and undefined cannot be used as the value of the controlled state
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  // Note: minimise the use of Ref
  username = React.createRef();
  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required.";
    if (account.password.trim() === "")
      errors.password = "Password is required.";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  // This can be replaced by autoFocus attribute
  // componentDidMount() {
  //   this.username.current.focus();
  // }
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Verify the input fields
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;
    // Get the value from input fields
    console.log("submitted");
    // const username = this.username.current.value;
  };
  render() {
    const { account } = this.state;
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
          />
          <Input
            fieldName="password"
            label="Password"
            value={account.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button className="mt-4 btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
