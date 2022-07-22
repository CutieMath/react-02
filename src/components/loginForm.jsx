import React, { Component } from "react";

class LoginForm extends Component {
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
          <div className="form-group">
            <label htmlFor="username" className="mt-4">
              Username
            </label>
            <input
              // controlled state
              value={account.username}
              onChange={this.handleChange}
              autoFocus
              placeholder="User name"
              id="username"
              type="text"
              className="mt-2 form-control"
              name="username"
              // ref={this.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="mt-4">
              Password
            </label>
            <input
              value={account.password}
              name="password"
              placeholder="Password"
              id="password"
              type="text"
              className="mt-2 form-control"
              onChange={this.handleChange}
            />
          </div>
          <button className="mt-4 btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
