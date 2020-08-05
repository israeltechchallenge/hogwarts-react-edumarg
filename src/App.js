import React from "react";
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

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/home" render={(props) => <MainPage {...props} />} />
          <Route path="/signup" render={(props) => <SignUp {...props} />} />
          <Route path="/login" render={(props) => <LogIn {...props} />} />
          <Route path="/student" render={(props) => <Student {...props} />} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect from="/" to="/not-found" />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
