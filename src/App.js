import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch></Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
