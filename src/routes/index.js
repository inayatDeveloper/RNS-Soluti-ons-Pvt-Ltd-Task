import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "../store";
import SignIn from "../components/signIn";
import DashBorad from "../components/dashBorad";
import SignUp from "../components/signUp";
const Routes = (props) => {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signUp" component={SignUp} />} />
          <Route path="/dash/borad" component={DashBorad} />} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Routes;
