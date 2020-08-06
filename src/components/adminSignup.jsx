import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      errors: {},
    };
  }

  handleChange(event) {
    const admin = { ...this.state.admin };
    const now = new Date();
    const id = now - new Date("1981-05-20");
    admin.id = id;
    admin[event.target.name] = event.target.value;
    this.setState({ admin });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password === this.state.passwordConfirm) {
      this.props.OnNewAdmin(this.state.admin);
      event.target.reset();
      this.props.history.replace("/home");
    } else
      alert(
        `Password do not match, plase make sure both paswords are the same`
      );
  }

  render() {
    const { admin, errors } = this.state;
    return (
      <React.Fragment>
        <div className="col-md-10 mx-auto">
          <h2 className="my-3">Admin Sign Up</h2>

          <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={admin.firstName}
                onChange={(event) => this.handleChange(event)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={admin.lastName}
                onChange={(event) => this.handleChange(event)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={admin.email}
                onChange={(event) => this.handleChange(event)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                value={admin.password}
                id="password"
                name="password"
                onChange={(event) => this.handleChange(event)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password2">Password Confirmation</label>
              <input
                type="password"
                className="form-control"
                value={admin.passwordConfirm}
                id="passwordConfirm"
                name="passwordConfirm"
                onChange={(event) => this.handleChange(event)}
              />
            </div>

            <button type="submit" className="btn btn-primary my-2">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
