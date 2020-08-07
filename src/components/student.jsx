import React, { Component } from "react";
import SkillsTable from "./skillsTable";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        currentSkills: {
          potionMaking: "",
          spells: "",
          quidditch: "",
          animagus: "",
          apparate: "",
          metamorphmagi: "",
          parcelongue: "",
        },
        desierSkills: {
          potionMaking: "",
          spells: "",
          quidditch: "",
          animagus: "",
          apparate: "",
          metamorphmagi: "",
          parcelongue: "",
        },
      },
      currentSkills: {
        potionMaking: "",
        spells: "",
        quidditch: "",
        animagus: "",
        apparate: "",
        metamorphmagi: "",
        parcelongue: "",
      },
      desierSkills: {
        potionMaking: "",
        spells: "",
        quidditch: "",
        animagus: "",
        apparate: "",
        metamorphmagi: "",
        parcelongue: "",
      },
      errors: {},
    };
  }

  componentDidMount() {
    const studentId = this.props.match.params.id;
    if (studentId === "new") return;
    const editStudent = this.props.studentList.find(
      (student) => student.id === studentId
    );
    this.setState({ student: editStudent });
  }

  handleChange(event) {
    console.log("onchange");
    const student = { ...this.state.student };
    student[event.target.name] = event.target.value;
    this.setState({
      student,
    });
  }

  handleOnChangeCurrentSkills(event) {
    console.log("onchange current", event);
    const currentSkills = { ...this.state.currentSkills };
    currentSkills[event.target.name] = event.target.value;
    this.setState({
      currentSkills,
    });
  }

  handleOnChangeDesierSkills(event) {
    console.log("onchange desier", event);
    const desierSkills = { ...this.state.desierSkills };
    desierSkills[event.target.name] = event.target.value;
    this.setState({
      desierSkills,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newStudent = { ...this.state.student };
    newStudent.currentSkills = this.state.currentSkills;
    newStudent.desierSkills = this.state.desierSkills;
    this.props.onSaveStudent(this.newStudent);
    event.target.reset();
    this.props.history.replace("/home");
  }

  render() {
    const { student } = this.state;
    return (
      <React.Fragment>
        <div className="col-md-10 mx-auto">
          <h2 className="my-3">Student</h2>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={student.firstName}
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
                value={student.lastName}
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
                value={student.email}
                onChange={(event) => this.handleChange(event)}
              />
            </div>

            <div className="row">
              <div className="col-5 mx-auto">
                <h4 className="my-2 text-justify">Current Skills and level</h4>
                <SkillsTable
                  type="current"
                  onChange={(event) => this.handleOnChangeCurrentSkills(event)}
                />
              </div>
              <div className="col-5 mx-auto">
                <h4 className="my-2 text-justify">Desier Skills and level</h4>
                <SkillsTable
                  type="desier"
                  onChange={(event) => this.handleOnChangeDesierSkills(event)}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mx-3">
              Save
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Student;
