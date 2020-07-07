import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Test from "../pages/test";

const mapStateToProps = () => ({});

const Routing = (props) => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={`/`}>
            <Test />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default connect(mapStateToProps)(Routing);
