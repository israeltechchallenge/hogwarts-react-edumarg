import React, { Component } from "react";

class Login extends Component {
  state = {
    acount: {
      email: "",
      password: "",
    },
    errors: {},
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-md-10 mx-auto">
          <h2 className="my-3">Admin Log In</h2>
          <form onSubmit={() => this.handleSubmit()}>
            <div className="form-group">
              <label htmlFor="InputEmail">Email address</label>
              <input type="email" className="form-control" id="InputEmail" />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="InputPassword"
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
