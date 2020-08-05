import React, { Component } from "react";
class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-md-10 mx-auto">
          <h2 className="my-3">Admin Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="InputEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="InputEmail"
                aria-describedby="emailHelp"
              />
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
