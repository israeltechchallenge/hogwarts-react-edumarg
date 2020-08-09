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
import config from "./config.json";
import axios from "axios";

// let mockStudents = [
// {
//   id: "1a2b3c4e",
//   firstName: "Harry",
//   lastName: "Potter",
//   email: "potter@email.com",
//   createdOn: "",
//   lastEdit: "",
//   currentSkills: {
//     potionMaking: "3",
//     spells: "3",
//     quidditch: "5",
//     animagus: "2",
//     apparate: "1",
//     metamorphmagi: "1",
//     parcelongue: "5",
//   },
//   desierSkills: {
//     potionMaking: "5",
//     spells: "5",
//     quidditch: "5",
//     animagus: "3",
//     apparate: "2",
//     metamorphmagi: "2",
//     parcelongue: "5",
//   },
// },
// {
//   id: "5f6g7h8i",
//   firstName: "Hermione",
//   lastName: "Granger",
//   email: "granger@email.com",
//   createdOn: "",
//   lastEdit: "",
//   currentSkills: {
//     potionMaking: "5",
//     spells: "5",
//     quidditch: "1",
//     animagus: "2",
//     apparate: "3",
//     metamorphmagi: "1",
//     parcelongue: "1",
//   },
//   desierSkills: {
//     potionMaking: "5",
//     spells: "5",
//     quidditch: "1",
//     animagus: "4",
//     apparate: "4",
//     metamorphmagi: "5",
//     parcelongue: "1",
//   },
// },
// {
//   id: "1a2b5f6g",
//   firstName: "Ron",
//   lastName: "Weasley",
//   email: "rweasley@email.com",
//   createdOn: "",
//   lastEdit: "",
//   currentSkills: {
//     potionMaking: "2",
//     spells: "2",
//     quidditch: "2",
//     animagus: "3",
//     apparate: "3",
//     metamorphmagi: "3",
//     parcelongue: "1",
//   },
//   desierSkills: {
//     potionMaking: "4",
//     spells: "4",
//     quidditch: "5",
//     animagus: "3",
//     apparate: "3",
//     metamorphmagi: "3",
//     parcelongue: "1",
//   },
// },
// ];

// let mockAdmins = [
//   {
//     id: "a1b2c3d4",
//     firstName: "Edu",
//     lastName: "Marg",
//     email: "e@mail.com",
//     createdOn: "",
//     lastEdit: "",
//     password: "123Abc",
//   },
// ];

class App extends Component {
  state = {
    students: "",
    admins: "",
    currentAdmin: "",
  };

  async componentDidMount() {
    const [studentsData, adminsData] = await Promise.all([
      axios.get(`${config.URL}students`),
      axios.get(`${config.URL}admins`),
    ]);
    this.setState({
      students: studentsData.data,
      admins: adminsData.data,
    });
    this.getStudents = setInterval(async () => {
      const [studentsData, adminsData] = await Promise.all([
        axios.get(`${config.URL}students`),
        axios.get(`${config.URL}admins`),
      ]);
      this.setState({
        students: studentsData.data,
        admins: adminsData.data,
      });
    }, 1800000);
  }

  componentWillUnmount() {
    clearInterval(this.getTwitts);
  }

  handleLogin(account) {
    for (let admin of this.state.admins) {
      if (
        admin.email.toLowerCase() === account.email.toLowerCase() &&
        admin.password === account.password
      ) {
        this.setState({ currentAdmin: account });

        alert("Log In success");
        return;
      }
    }
    alert("login fail");
  }

  handleLogOut() {
    this.setState({ currentAdmin: "" });
  }

  handleSaveAdmin(admin) {
    const now = new Date();
    let newAdmins = [...this.state.admins];
    let adminInDb = newAdmins.find((a) => a.email === admin.email);

    if (adminInDb) {
      const index = newAdmins.indexOf(adminInDb);

      admin.lastEdit = now.toDateString();
      newAdmins[index] = { ...admin };
    } else if (!adminInDb) {
      const id = now - new Date("1981-05-20");
      admin.id = id.toString();
      admin.createdOn = now.toDateString();
      newAdmins = [admin, ...newAdmins];
    }

    this.setState({ admins: newAdmins });
  }

  handleDeleteStudent(studentToDelete) {
    let newStudents = [...this.state.students];
    const index = newStudents.indexOf(studentToDelete);

    newStudents.splice(index, 1);

    this.setState({ students: newStudents });
  }

  handleSaveStudent(student) {
    const now = new Date();
    let newStudents = [...this.state.students];
    let studentInDb = newStudents.find((s) => s.email === student.email);

    if (studentInDb) {
      const index = newStudents.indexOf(studentInDb);
      student.lastEdit = now.toDateString();
      newStudents[index] = { ...student };
    }

    // new student logic
    else if (!studentInDb) {
      const id = now - new Date("1981-05-20");
      student.id = id.toString();
      student.createdOn = now.toDateString();
      newStudents = [student, ...newStudents];
    }

    this.setState({ students: newStudents });
  }

  render() {
    const { currentAdmin, students, admins } = this.state;
    return (
      <React.Fragment>
        <Router>
          <NavBar
            currentAdmin={currentAdmin}
            handleLogOut={() => this.handleLogOut()}
          />{" "}
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
            />{" "}
            <Route
              path="/signup/:email"
              render={(props) => (
                <SignUp
                  {...props}
                  OnSaveAdmin={(admin) => this.handleSaveAdmin(admin)}
                  adminList={admins}
                />
              )}
            />{" "}
            <Route
              path="/login"
              render={(props) => (
                <LogIn
                  {...props}
                  onLogin={(account) => this.handleLogin(account)}
                  currentAdmin={currentAdmin}
                />
              )}
            />{" "}
            <Route
              path="/student/:email"
              render={(props) => (
                <Student
                  {...props}
                  studentList={students}
                  onSaveStudent={(student) => this.handleSaveStudent(student)}
                />
              )}
            />{" "}
            <Route path="/not-found" component={NotFound} />{" "}
            <Redirect from="/" exact to="/home" />
            <Redirect from="/" to="/not-found" />
          </Switch>{" "}
        </Router>{" "}
      </React.Fragment>
    );
  }
}

export default App;
