import React, { Component } from "react";
import Input from "../common/input";

class LoginForm extends Component {
  // Note: null and undefined cannot be used as the value of the controlled state
  state = {
    account: { username: "", password: "" },
  };

  // Note: minimise the use of Ref
  username = React.createRef();

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
    // Get the value from input fields
    const username = this.username.current.value;
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
            value={account.name}
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
