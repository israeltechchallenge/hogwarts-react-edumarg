import React, { Component } from "react";
class SignUp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-md-10 mx-auto">
          <h2 className="my-3">Admin Signup</h2>

          <form>
            <div className="form-group">
              <label htmlFor="InputFirstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="InputFirstName"
                name="InputFirstName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputLastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="InputLastName"
                name="InputLastName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="InputEmail"
                name="InputEmail"
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="InputPassword1"
                name="InputPassword1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword2">Repeat Password</label>
              <input
                type="password"
                className="form-control"
                id="InputPassword2"
                name="InputPassword2"
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

export default SignUp;
