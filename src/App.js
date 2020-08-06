import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/navBar";
import MainPage from "./components/mainPage";
import LogIn from "./components/adminLogin";
import SignUp from "./components/adminSignup";
import Student from "./components/student";
import NotFound from "./components/notFound";

let mockStudents = [
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

let mockAdmins = [
  {
    id: "mastoideo",
    firstName: "Edu",
    lastName: "Marg",
    email: "edu@mail.com",
    password: "12345",
  },
];

class App extends Component {
  state = {
    students: "",
    admins: "",
    currentAdmin: "",
  };

  componentDidMount() {
    this.setState({ students: mockStudents, admins: mockAdmins });
  }

  handleLogin(account) {
    for (let admin of this.state.admins) {
      if (
        admin.email.toLowerCase() === account.email.toLowerCase() &&
        admin.password === account.password
      ) {
        this.setState({ currentAdmin: admin });
        alert("Log In success");
        return;
      }
    }
    alert("login fail");
  }

  handleLogOut() {
    this.setState({ currentAdmin: "" });
  }
  handleNewAdmin(newAdmin) {
    let newAdmins = [...this.state.admins];
    newAdmins = [newAdmin, ...newAdmins];
    mockAdmins = newAdmins;
    this.setState({ admins: newAdmins });
  }
  handleNewStudent(newStudent) {
    console.log("hande new student", newStudent);
    let newStudents = [...this.state.students];
    newStudents = [newStudent, ...newStudents];
    this.setState({ students: newStudents });
  }

  handleDeleteStudent(studentToDelete) {
    const orignalStudent = [...this.state.students];
    const newStudents = orignalStudent.filter(
      (student) => student.id !== studentToDelete.id
    );
    mockStudents = newStudents;
    this.setState({ students: newStudents });
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar
            currentAdmin={this.state.currentAdmin}
            handleLogOut={() => this.handleLogOut()}
          />
          <Switch>
            <Route
              path="/home"
              render={(props) => (
                <MainPage
                  students={this.state.students}
                  currentAdmin={this.state.currentAdmin}
                  onDelete={(student) => this.handleDeleteStudent(student)}
                  {...props}
                />
              )}
            />
            <Route
              path="/signup"
              render={(props) => (
                <SignUp
                  {...props}
                  OnNewAdmin={(newAdmin) => this.handleNewAdmin(newAdmin)}
                />
              )}
            />
            <Route
              path="/login"
              render={(props) => (
                <LogIn
                  {...props}
                  onLogin={(account) => this.handleLogin(account)}
                  currentAdmin={this.state.currentAdmin}
                />
              )}
            />
            <Route
              path="/student"
              render={(props) => (
                <Student
                  {...props}
                  onNewStudent={(newStudent) =>
                    this.handleNewStudent(newStudent)
                  }
                />
              )}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect from="/" to="/not-found" />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
