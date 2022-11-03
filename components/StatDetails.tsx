import React from "react";
import { useStore } from "../store/store";

const StatDetails = () => {
  const { stats } = useStore();
  const gamesWon = stats?.gamesWon;
  const gamesPlayed = stats?.gamesPlayed ?? 1;

  const gamesWonPlayedRatio = gamesWon / gamesPlayed;
  const gamesWonPercent = isNaN(gamesWonPlayedRatio) ? 0 : gamesWonPlayedRatio;

  return (
    <div
      style={{
        padding: "0px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span>
          {stats?.gamesWon} / {stats?.gamesPlayed}
        </span>
        <span style={{ color: "#ababab", fontSize: "13px" }}>Correct</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span>{Math.round(gamesWonPercent * 100).toFixed(1)}</span>
        <span style={{ color: "#ababab", fontSize: "13px" }}>Correct %</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span>
          {stats?.currentStreak} : {stats?.maxStreak}
        </span>
        <span style={{ color: "#ababab", fontSize: "13px" }}>
          Current : Max Streak
        </span>
      </div>
    </div>
  );
};

export default StatDetails;
