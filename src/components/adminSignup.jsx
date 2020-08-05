import React, { Component } from "react";
class SignUp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2>Admin SignUp</h2>

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
              aria-describedby="emailHelp"
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
      </React.Fragment>
    );
  }
}

export default SignUp;
