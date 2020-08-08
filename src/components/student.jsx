import React, { Component } from "react";
import SkillsTable from "./skillsTable";
import { validate, validateProperty } from "../common/validation";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        currentSkills: {},
        desierSkills: {},
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
    if (!editStudent) {
      this.props.history.replace("/not-found");
      return;
    }
    this.setState({
      student: editStudent,
      currentSkills: editStudent.currentSkills,
      desierSkills: editStudent.desierSkills,
    });
  }

  handleChange(event) {
    const errors = { ...this.state.errors };
    const errorMessage = validateProperty(event.target);
    if (errorMessage) errors[event.target.name] = errorMessage;
    else delete errors[event.target.name];

    const student = { ...this.state.student };
    student[event.target.name] = event.target.value;
    this.setState({
      student,
      errors: errors || {},
    });
  }

  handleOnChangeCurrentSkills(event) {
    const currentSkills = { ...this.state.currentSkills };
    currentSkills[event.target.name] = event.target.value;
    this.setState({
      currentSkills,
    });
  }

  handleOnChangeDesierSkills(event) {
    const desierSkills = { ...this.state.desierSkills };
    desierSkills[event.target.name] = event.target.value;
    this.setState({
      desierSkills,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const errors = validate(this.state.student);
    this.setState({ errors });
    if (errors) return;

    let newStudent = { ...this.state.student };
    newStudent.currentSkills = this.state.currentSkills;
    newStudent.desierSkills = this.state.desierSkills;

    this.props.onSaveStudent(newStudent);
    event.target.reset();
    this.props.history.replace("/home");
  }

  render() {
    const { student, errors } = this.state;
    return (
      <React.Fragment>
        <div className="col-sm-10 mx-auto">
          <h2 className="my-3 col-sm-10">Student</h2>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="form-group col-sm-10">
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
            {errors.firstName && (
              <div className="alert alert-danger" role="alert">
                {errors.firstName}
              </div>
            )}

            <div className="form-group col-sm-10">
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
            {errors.lastName && (
              <div className="alert alert-danger" role="alert">
                {errors.lastName}
              </div>
            )}

            <div className="form-group col-sm-10">
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
            {errors.email && (
              <div className="alert alert-danger" role="alert">
                {errors.email}
              </div>
            )}

            <div className="row">
              <div className="col-sm-5 mx-auto">
                <h4 className="my-2 text-justify col-sm-10">
                  Current Skills and level
                </h4>
                <SkillsTable
                  type="current"
                  onChange={(event) => this.handleOnChangeCurrentSkills(event)}
                />
              </div>
              {errors.currentSkills && (
                <div className="alert alert-danger" role="alert">
                  {errors.currentSkills}
                </div>
              )}

              <div className="col-sm-5 mx-auto">
                <h4 className="my-2 text-justify col-sm-10">
                  Desier Skills and level
                </h4>
                <SkillsTable
                  type="desier"
                  onChange={(event) => this.handleOnChangeDesierSkills(event)}
                />
              </div>
            </div>
            {errors.desiertSkills && (
              <div className="alert alert-danger" role="alert">
                {errors.desiertSkills}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary mx-3"
              disabled={validate(this.state.student)}
            >
              Save
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Student;
