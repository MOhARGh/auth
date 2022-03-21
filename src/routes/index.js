import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./private";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

class AllRoutes extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default AllRoutes;
