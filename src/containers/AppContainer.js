import React from "react";
// import Routing from "../components/Routing";
import Home from "../pages/Home";
import { connect } from "react-redux";
import { fetchAPI } from "../actions/dataActions";
const actions = { fetchAPI };
const mapStateToProps = (state) => ({
  data: state.data
})

class AppContainer extends React.Component {
  componentDidMount = async () => {
    await this.retrieveAPI();
  };

  retrieveAPI = async () => {
    console.log("Retrieving API...");
    try {
      await this.props.fetchAPI();
      console.log(this.props.data)
    } catch (e) {
      throw new Error("Cannot retrieve API");
    }
  };

  render() {
    return <Home />
  }
}

export default connect(mapStateToProps, actions)(AppContainer);
