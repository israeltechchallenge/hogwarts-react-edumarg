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

  validate() {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
    } = this.state.admin;

    const errors = {};

    if (firstName.trim() === "") return `First Name requiere`;
    if (firstName) {
      const regex = /^[A-Za-z]+$/;
      if (!firstName.match(regex))
        return `Invalid last name, please enter only letters with no special charcters or numbers`;
    }

    if (lastName.trim() === "") return `Last Name requiere`;
    if (lastName) {
      const regex = /^[A-Za-z]+$/;
      if (!lastName.match(regex))
        return `Invalid last name, please enter only letters with no special charcters or numbers`;
    }

    if (email.trim() === "") return `Email requiere`;
    if (email) {
      const regex = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
      if (!regex.test(email))
        return `Invalid email format, please make sure to write a valid email`;
    }

    if (password.trim() === "") return `Password requiere`;
    if (password) {
      const regex = /^(?=.*\d)(?=.*[a - z])(?=.* [A - Z]).{ 4, 8 } $/;
      if (!regex.test(password))
        return " Password must be at least 4 characters, no more than 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.";
    }

    if (passwordConfirm.trim() === "") return `Password requiere`;
    if (password !== passwordConfirm)
      return `Passwords do not match, please make sure you typed same password`;

    return Object.keys(errors).length === 0 ? null : errors;
  }

  validateProperty({ name, value }) {
    if (name === "firstName") {
      if (value.trim() === "") return `First Name requiere`;
      if (value) {
        const regex = /^[A-Za-z]+$/;
        if (!value.match(regex))
          return `Invalid first name, please enter only letters with no special charcters or numbers`;
      }
    }

    if (name === "lastName") {
      if (value.trim() === "") return `Last Name requiere`;
      if (value) {
        const regex = /^[A-Za-z]+$/;
        if (!value.match(regex))
          return `Invalid last name, please enter only letters with no special charcters or numbers`;
      }
    }

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
      if (value) {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
        if (!regex.test(value))
          return " Password must be at least 6 characters, no more than 16 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.";
      }
    }

    if (name === "passwordConfirm") {
      if (value.trim() === "") return `Password Confirmation requiere`;
      else if (value !== this.state.admin.password) {
        return `Password do not match, please make sure you typed the same password`;
      }
    }
  }

  handleChange(event) {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(event.target);
    if (errorMessage) errors[event.target.name] = errorMessage;
    else delete errors[event.target.name];
    console.log("errors", errors);

    const admin = { ...this.state.admin };
    const now = new Date();
    const id = now - new Date("1981-05-20");
    admin.id = id;
    admin[event.target.name] = event.target.value;
    this.setState({ admin, errors });
  }

  handleSubmit(event) {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;

    // if (this.state.password === this.state.passwordConfirm) {
    this.props.OnNewAdmin(this.state.admin);
    event.target.reset();
    this.props.history.replace("/home");
    // } else
    //   alert(
    //     `Password do not match, plase make sure both paswords are the same`
    //   );
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
            {errors.firstName && (
              <div className="alert alert-danger" role="alert">
                {errors.firstName}
              </div>
            )}

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
            {errors.lastName && (
              <div className="alert alert-danger" role="alert">
                {errors.lastName}
              </div>
            )}

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
                value={admin.password}
                id="password"
                name="password"
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            {errors.password && (
              <div className="alert alert-danger" role="alert">
                {errors.password}
              </div>
            )}

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
            {errors.passwordConfirm && (
              <div className="alert alert-danger" role="alert">
                {errors.passwordConfirm}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary my-2"
              disabled={this.validate()}
            >
              Sing Up
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
