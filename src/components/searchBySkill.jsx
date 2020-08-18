import React, { Component } from "react";
class StudentsBySkills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="card mx-auto my-3" style={{ width: "60rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              Students enrolled count by {this.props.type} skill
            </h5>
            <form
              className="card-text"
              onSubmit={(event) => this.handleSubmit(event)}
            >
              <label className="mx-3" htmlFor="controlSelect">
                Pick a Skill:
              </label>
              <select className="form-control" id="controlSelect">
                <option>Potion Making</option>
                <option>Spells</option>
                <option>Quidditch</option>
                <option>Animagus</option>
                <option>Apparate</option>
                <option>Metamorphmagi</option>
                <option>Parcelongue</option>
              </select>
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

export default StudentsBySkills;
