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

axios.interceptors.response.use(null, (error) => {
  if (!error.response) {
    alert(`Unexpected Error, please try again`);
  }
  return Promise.reject(error);
});

class App extends Component {
  state = {
    students: "",
    admins: "",
    currentAdmin: "",
  };

  sorteList(list) {
    const listSorted = list.sort((a, b) => b.lastEdit - a.lastEdit);
    return listSorted;
  }

  async componentDidMount() {
    const [studentsData, adminsData] = await Promise.all([
      axios.get(`${config.URL}students`),
      axios.get(`${config.URL}admins`),
    ]);
    this.setState({
      students: studentsData.data || {},
      admins: adminsData.data || {},
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
      axios.put(`${config.URL}admins/{admin.email}`, admin);
    } else if (!adminInDb) {
      const id = now - new Date("1981-05-20");
      admin.id = id.toString();
      admin.createdOn = now.toDateString();
      admin.lastEdit = now.toDateString();
      newAdmins = [admin, ...newAdmins];
      axios.post(`${config.URL}admins/new`);
    }

    const newAdminsSorted = this.sorteList(newAdmins);
    this.setState({ admins: newAdminsSorted });
  }

  handleDeleteStudent(studentToDelete) {
    console.log("studentToDelete", studentToDelete);
    let newStudents = [...this.state.students];
    const index = newStudents.indexOf(studentToDelete);
    console.log("index", index);
    newStudents.splice(index, 1);
    console.log("after splice", newStudents);
    const newStudentsSorted = this.sorteList(newStudents);
    this.setState({ students: newStudentsSorted });
    axios.delete(`${config.URL}students/${studentToDelete.email}`);
    console.log("state", this.state.students);
  }

  handleSaveStudent(student) {
    const now = new Date();
    let newStudents = [...this.state.students];
    let studentInDb = newStudents.find((s) => s.email === student.email);

    if (studentInDb) {
      const index = newStudents.indexOf(studentInDb);
      student.lastEdit = now.toDateString();
      newStudents[index] = { ...student };
      axios.put(`${config.URL}students/${student.email}`);
    }

    // new student logic
    else if (!studentInDb) {
      const id = now - new Date("1981-05-20");
      student.id = id.toString();
      student.createdOn = now.toDateString();
      newStudents = [student, ...newStudents];
      axios.post(`${config.URL}students/new`);
    }

    const newStudentsSorted = this.sorteList(newStudents);
    this.setState({ students: newStudentsSorted });
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
                  // studentList={students}
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
