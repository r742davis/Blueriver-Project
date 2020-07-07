import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  buildings: state.data.buildingsArray,
});

const Results = (props) => {
  const { buildings } = props;
  console.log(buildings)
  const mappedResults = buildings && buildings.map((building) => {
    return <li>{building.buildingzone}</li>;
  });

  return (
    <div className="results-list">
      <h3>Title</h3>
      <ul>{mappedResults}</ul>
    </div>
  );
};

export default connect(mapStateToProps)(Results);
