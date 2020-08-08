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
    this.setState({ student: editStudent });
  }

  validate() {
    const { firstName, lastName, email } = this.state.student;
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

    return Object.keys(errors).length === 0 ? null : errors;
  }

  validateProperty({ name, value }) {
    console.log("name", name, "value", value);

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
  }

  handleChange(event) {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(event.target);
    if (errorMessage) errors[event.target.name] = errorMessage;
    else delete errors[event.target.name];
    console.log("errors", errors);

    const student = { ...this.state.student };
    student[event.target.name] = event.target.value;
    this.setState({
      student,
      errors,
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

    const errors = this.validate();
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
                value={student.lastName}
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
              <div className="col-5 mx-auto">
                <h4 className="my-2 text-justify">Current Skills and level</h4>
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

              <div className="col-5 mx-auto">
                <h4 className="my-2 text-justify">Desier Skills and level</h4>
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
              disabled={this.validate()}
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
