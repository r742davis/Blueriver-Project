import React from "react";
import Results from "./Results";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  buildings: state.data.buildingsArray,
});

const Display = (props) => {
  const { buildings } = props;
  let zone = {};
  const zoneNaming =
    buildings &&
    buildings.filter((building) => {
      if (!zone[building.buildingzone]) {
        zone[building.buildingzone] = [];
      }
    });

  for (let name in zone) {
    buildings &&
      buildings.filter((building) => {
        building.buildingzone === name && zone[name].push(building);
      });
  }

  let map = [];

const mappedResults = () => {
  let title = null;
  for (let name in zone) {
    let temp = null;
    if (title !== name) {
      title = name;
    }
    let array = [];
    for (let building of zone[name]) {
      array.push(building.buildingname);
    }
    temp = (
      <>
        <h3>{title}</h3>
        {
          array.map((name) => {
            return <li>{name}</li>;
          })}
      </>
    );
    return temp;
  }

}

  console.log(map.map(item => console.log));

  return (
    <div className="display-container alignment">
      <ul>{mappedResults()}</ul>

    </div>
  );
};

export default connect(mapStateToProps)(Display);
