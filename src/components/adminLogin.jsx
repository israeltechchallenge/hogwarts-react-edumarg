import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        email: "",
        password: "",
      },
      errors: "",
    };
  }

  validateProperty({ name, value }) {
    if (name === "email") {
      if (value.trim() === "") return `Email requiere`;
      if (value) {
        const regex = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
        if (!regex.test(value))
          return `Invalid email format, please make sure to write a valid email`;
      }
    }
    if (name === "password") {
      if (value.trim() === "") return `Password requiere`;
    }
  }

  validate() {
    const { email, password } = this.state.account;
    if (email.trim() === "") return `Email requiere`;
    else if (email) {
      const regex = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
      if (!regex.test(email))
        return `Invalid email format, please make sure to write a valid email`;
    } else if (password.trim() === "") return `Password requiere`;
    else return null;
  }

  handleChange(event) {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(event.target);
    if (errorMessage) errors[event.target.name] = errorMessage;
    else delete errors[event.target.name];

    const account = { ...this.state.account };
    account[event.target.name] = event.target.value;
    console.log("errors", errors);
    this.setState({ account, errors });
  }

  handleSubmit(event) {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;

    this.props.onLogin(this.state.account);
    event.target.reset();
  }

  render() {
    const { account, errors } = this.state;
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
            {errors.email && (
              <div className="alert alert-danger" role="alert">
                {errors.email}
              </div>
            )}
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
            {errors.password && (
              <div className="alert alert-danger" role="alert">
                {errors.password}
              </div>
            )}
            <button
              type="submit"
              className="btn btn-primary my-3"
              disabled={this.validate()}
            >
              Log In
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
