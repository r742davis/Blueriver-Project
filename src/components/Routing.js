import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import TESTPAGE from "../pages/TESTPAGE";

const mapStateToProps = () => ({});

const Routing = (props) => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={`/home`}>
            <TESTPAGE />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default connect(mapStateToProps)(Routing);
