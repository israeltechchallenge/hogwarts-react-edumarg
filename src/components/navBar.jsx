import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentAdmin } = this.props;
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
              {currentAdmin && (
                <NavLink className="nav-item nav-link" to="/student/new">
                  Add student
                </NavLink>
              )}
              {!currentAdmin && (
                <NavLink className="nav-item nav-link" to="/login">
                  Log In
                </NavLink>
              )}
              {!currentAdmin && (
                <NavLink className="nav-item nav-link" to="/signup">
                  Sign Up
                </NavLink>
              )}
              )
              {currentAdmin && (
                <NavLink
                  className="nav-item nav-link"
                  onClick={this.props.handleLogOut}
                  to="/home"
                >
                  Log Out
                </NavLink>
              )}
            </div>
            {currentAdmin && (
              <span className="navbar-text ml-auto">
                Loged In as {currentAdmin.firstName} {currentAdmin.lastName}
              </span>
            )}
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
