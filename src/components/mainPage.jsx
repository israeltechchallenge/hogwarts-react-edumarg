import React, { Component } from "react";

const mockStudents = [
  {
    id: "1a2b3c4e",
    firstName: "Harry",
    lastName: "Potter",
    email: "potter@email.com",
    currentSkills: {
      potionMaking: "3",
      spells: "3",
      quidditch: "5",
      animagus: "2",
      apparate: "1",
      metamorphmagi: "1",
      parcelongue: "5",
    },
    desierSkills: {
      potionMaking: "5",
      spells: "5",
      quidditch: "5",
      animagus: "3",
      apparate: "2",
      metamorphmagi: "2",
      parcelongue: "5",
    },
  },
  {
    id: "5f6g7h8i",
    firstName: "Hermione",
    lastName: "Granger",
    email: "granger@email.com",
    currentSkills: {
      potionMaking: "5",
      spells: "5",
      quidditch: "1",
      animagus: "2",
      apparate: "3",
      metamorphmagi: "1",
      parcelongue: "1",
    },
    desierSkills: {
      potionMaking: "5",
      spells: "5",
      quidditch: "1",
      animagus: "4",
      apparate: "4",
      metamorphmagi: "5",
      parcelongue: "1",
    },
  },
  {
    id: "1a2b5f6g",
    firstName: "Ron",
    lastName: "Weasley",
    email: "rweasley@email.com",
    currentSkills: {
      potionMaking: "2",
      spells: "2",
      quidditch: "2",
      animagus: "3",
      apparate: "3",
      metamorphmagi: "3",
      parcelongue: "1",
    },
    desierSkills: {
      potionMaking: "4",
      spells: "4",
      quidditch: "5",
      animagus: "3",
      apparate: "3",
      metamorphmagi: "3",
      parcelongue: "1",
    },
  },
];

class MainPage extends Component {
  state = { students: mockStudents };
  render() {
    const enrolledStudents = this.state.students.length;
    return (
      <React.Fragment>
        <div className="col-md-10 mx-auto">
          <h2 className="my-3">Main Paige</h2>
          <h6>
            {enrolledStudents
              ? `There are currently ${enrolledStudents} enrolled students at Hogwarts`
              : `Currently there are not students enrroled at Hogwarts`}
          </h6>
          <table className="table">
            <thead className="thead-dark">
              <tr>
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
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Skill</th>
                          <th scope="col">Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(student.currentSkills).map((skill) => (
                          <tr>
                            <td>{skill}</td>
                            <td>{student.currentSkills[skill]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>

                  <td>
                    {" "}
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Skill</th>
                          <th scope="col">Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(student.desierSkills).map((skill) => (
                          <tr>
                            <td>{skill}</td>
                            <td>{student.desierSkills[skill]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <button type="button" className="btn btn-sm btn-warning">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-sm btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody> */}
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default MainPage;
