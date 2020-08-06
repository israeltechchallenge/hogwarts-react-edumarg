import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        email: "",
        password: "",
      },
      errors: {},
    };
  }

  handleChange(event) {
    const account = { ...this.state.account };
    account[event.target.name] = event.target.value;
    this.setState({ account });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onLogin(this.state.account);
    event.target.reset();
  }

  render() {
    const { account } = this.state;
    if (this.props.currentAdmin) this.props.history.replace("/home");
    return (
      <React.Fragment>
        <div className="col-md-10 mx-auto">
          <h2 className="my-3">Admin Log In</h2>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={account.email}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={account.password}
                onChange={(event) => this.handleChange(event)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
