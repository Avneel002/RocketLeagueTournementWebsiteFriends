import React from "react";

export default function Dashboard({ setPage, gamerName }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {gamerName}</p>
      <button onClick={() => setPage("stats")}>Go to Stats</button>
      <button onClick={() => setPage("match")}>Go to Match</button>
      <button onClick={() => setPage("leaderboard")}>Leaderboard</button>
    </div>
  );
}
