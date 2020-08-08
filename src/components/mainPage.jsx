import React, { Component } from "react";
import { Link } from "react-router-dom";
import school_shield from "../img/shield_icon.png";
import MyModal from "./modal";
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: this.props.students,
      studentToDelete: "",
    };
  }
  render() {
    const enrolledStudents = this.state.students.length;
    return (
      <React.Fragment>
        <MyModal
          id="deleteModal"
          onDelete={() => this.props.onDelete(this.state.studentToDelete)}
          studentToDelete={this.state.studentToDelete}
        />
        <div className="col-sm-10 mx-auto">
          {this.props.currentAdmin && (
            <React.Fragment>
              <div className="d-flex my-3 col-sm-10 align-items-center">
                <h2 className="mr-2">Main Paige</h2>
                <div>
                  <img
                    src={school_shield}
                    alt="school shield"
                    width="32"
                    height="32"
                  ></img>
                </div>
              </div>
              <h6 className="my-2 col-sm-10">
                {enrolledStudents
                  ? `There are currently ${enrolledStudents} enrolled students at Hogwarts`
                  : `Currently there are not students enrroled at Hogwarts`}
              </h6>
              <div className="table-responsive">
                <table className="table col">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Email</th>
                      <th scope="col">Current Skills</th>
                      <th scope="col">Desier Skills</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.students.map((student) => (
                      <tr key={student.id}>
                        <th scope="row">
                          {this.state.students.indexOf(student) + 1}
                        </th>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td>
                          <table className="table">
                            <thead className="thead-light">
                              <tr>
                                <th className="my-0 py-0" scope="col">
                                  Current Skill
                                </th>
                                <th className="my-0 py-0" scope="col">
                                  Level
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {Object.keys(student.currentSkills).map(
                                (skill) => (
                                  <tr key={`current${skill}`}>
                                    <td>{skill}</td>
                                    <td>{student.currentSkills[skill]}</td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </td>

                        <td>
                          {" "}
                          <table className="table">
                            <thead className="thead-light">
                              <tr>
                                <th className="my-0 py-0" scope="col">
                                  Desier Skill
                                </th>
                                <th className="my-0 py-0" scope="col">
                                  Level
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {Object.keys(student.desierSkills).map(
                                (skill) => (
                                  <tr key={`desier${skill}`}>
                                    <td>{skill}</td>
                                    <td>{student.desierSkills[skill]}</td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </td>
                        <td>
                          <Link
                            className="btn btn-sm py-1 btn-warning"
                            to={`/student/${student.id}`}
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            data-toggle="modal"
                            data-target="#deleteModal"
                            onClick={() =>
                              this.setState({ studentToDelete: student })
                            }
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </React.Fragment>
          )}
          {!this.props.currentAdmin && (
            <div className="col d-flex flex-column m-auto justify-content-center align-items-center text-md-center">
              <h1>
                Welcome, please Log In or Sign Up to view and edit students
              </h1>
              <div>
                <img src={school_shield} alt="school shield"></img>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default MainPage;
