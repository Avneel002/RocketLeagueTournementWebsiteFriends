import React from "react";

export default function Leaderboard({ setPage, gamerName }) {
  return (
    <div>
      <h1>Leaderboard</h1>
      <p>Top players</p>
      <p>Your gamer: {gamerName}</p>
      <button onClick={() => setPage("dashboard")}>Back</button>
    </div>
  );
}
