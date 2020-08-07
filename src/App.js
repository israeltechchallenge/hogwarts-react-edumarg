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
    createdOn: "",
    lastEdit: "",
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
    createdOn: "",
    lastEdit: "",
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
    createdOn: "",
    lastEdit: "",
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
    id: "a1b2c3d4",
    firstName: "Edu",
    lastName: "Marg",
    email: "e@mail.com",
    createdOn: "",
    password: "123",
  },
];

class App extends Component {
  state = {
    students: "",
    admins: "",
    currentAdmin: "",
  };

  componentWillMount() {
    let currentAccount = localStorage.getItem("currentLogedAdmin");
    currentAccount = JSON.parse(currentAccount);
    let studentList = localStorage.getItem("studentList");
    studentList = JSON.parse(studentList);
    let adminList = localStorage.getItem("adminList");
    adminList = JSON.parse(adminList);
    this.setState({
      students: studentList || mockStudents,
      admins: adminList || mockAdmins,
      currentAdmin: currentAccount,
    });
  }

  handleLogin(account) {
    for (let admin of this.state.admins) {
      if (
        admin.email.toLowerCase() === account.email.toLowerCase() &&
        admin.password === account.password
      ) {
        this.setState({ currentAdmin: admin });
        localStorage.setItem("currentLogedAdmin", JSON.stringify(admin));
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
    const now = new Date();
    newAdmin.createdOn = now.toDateString();
    newAdmins = [newAdmin, ...newAdmins];
    mockAdmins = newAdmins;
    console.log("new admin", mockAdmins);
    this.setState({ admins: newAdmins });
    localStorage.setItem("adminList", JSON.stringify(newAdmins));
  }

  handleDeleteStudent(studentToDelete) {
    let newStudents = this.state.students.filter(
      (student) => student.id !== studentToDelete.id
    );
    this.setState({ students: newStudents });
    mockStudents = newStudents;
    localStorage.setItem("studentList", JSON.stringify(newStudents));
  }

  handleSaveStudent(student) {
    console.log("new student", student);
    const now = new Date();
    let newStudents = [...this.state.students];
    let studentInDb = newStudents.find((s) => s.id === student.id);

    if (student.id) {
      const index = newStudents.indexOf(studentInDb);
      student.lastEdit = now.toDateString();
      newStudents[index] = { ...student };
    }

    // new student logic
    else if (!student.id) {
      const id = now - new Date("1981-05-20");
      student.id = id.toString();
      student.createdOn = now.toDateString();
      newStudents = [student, ...newStudents];
    }

    localStorage.setItem("studentList", JSON.stringify(newStudents));
    this.setState({ students: newStudents });
  }

  render() {
    const { currentAdmin, students } = this.state;
    return (
      <React.Fragment>
        <Router>
          <NavBar
            currentAdmin={currentAdmin}
            handleLogOut={() => this.handleLogOut()}
          />
          <Switch>
            <Route
              path="/home"
              render={(props) => (
                <MainPage
                  students={students}
                  currentAdmin={currentAdmin}
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
                  currentAdmin={currentAdmin}
                />
              )}
            />
            <Route
              path="/student/:id"
              render={(props) => (
                <Student
                  {...props}
                  studentList={students}
                  onSaveStudent={(student) => this.handleSaveStudent(student)}
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
