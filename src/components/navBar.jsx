import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-item nav-link" to="/student">
                Add student
              </NavLink>
              {!this.props.currentAdmin && (
                <NavLink className="nav-item nav-link" to="/login">
                  Login
                </NavLink>
              )}
              {!this.props.currentAdmin && (
                <NavLink className="nav-item nav-link" to="/signup">
                  Sign Up
                </NavLink>
              )}
              )
              {this.props.currentAdmin && (
                <NavLink
                  className="nav-item nav-link"
                  onClick={this.props.handleLogOut}
                  to="/home"
                >
                  Logout
                </NavLink>
              )}
            </div>
            {this.props.currentAdmin && (
              <span className="navbar-text ml-auto">
                Loged In as {this.props.currentAdmin}
              </span>
            )}
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
