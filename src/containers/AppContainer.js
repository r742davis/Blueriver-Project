import React from "react";
// import Routing from "../components/Routing";
import Home from "../pages/Home";
import { connect } from "react-redux";
import { fetchAPI } from "../actions/testActions";
const actions = { fetchAPI };
function mapStateToProps(state) {
  return {};
}

class AppContainer extends React.Component {
  state = {};

  componentDidMount = async () => {
    await this.retrieveAPI();
  };

  retrieveAPI = () => {
    console.log("Retrieving API...");
    try {
      this.props.fetchAPI();
    } catch (e) {
      throw new Error("Cannot retrieve API");
    }
  };

  render() {
    return <Home />
  }
}

export default connect(mapStateToProps, actions)(AppContainer);
