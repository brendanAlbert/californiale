import React from "react";
import StatDetails from "./StatDetails";
import StatsDistribution from "./StatsDistribution";

const Stats = () => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Score Distribution</h4>
      <StatsDistribution />
      <h4 style={{ textAlign: "center" }}>Stats</h4>
      <StatDetails />
    </div>
  );
};

export default Stats;
