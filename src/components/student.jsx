import React, { Component } from "react";
import SkillsTable from "./skillsTable";
class Student extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-md-10 mx-auto">
          <h2 className="my-3">Student</h2>
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

            <div className="row">
              <div className="col-5 mx-auto">
                <h4 className="my-2 text-justify">Current Skills and level</h4>
                <SkillsTable type="current" />
              </div>
              <div className="col-5 mx-auto">
                <h4 className="my-2 text-justify">Desier Skills and level</h4>
                <SkillsTable type="desier" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mx-3">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Student;
