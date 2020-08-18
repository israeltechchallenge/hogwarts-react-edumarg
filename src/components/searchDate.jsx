import React, { Component } from "react";

class StudentsByDate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="card mx-auto" style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">Students enrolled count by date</h5>
            <form
              className="card-text"
              onSubmit={(event) => this.handleSubmit(event)}
            >
              <label className="mx-3" htmlFor="mydate">
                Pick a date:
              </label>
              <input type="date" id="mydate" />
              <button type="submit" className="btn btn-primary mx-3">
                Select
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StudentsByDate;
