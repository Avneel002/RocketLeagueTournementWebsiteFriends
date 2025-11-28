import React from "react";

export default function Stats({ setPage }) {
  return (
    <div style={{ padding: 50 }}>
      <h1>Stats</h1>
      <p>Wins: 5</p>
      <p>Goals: 12</p>
      <p>Saves: 8</p>
      <button onClick={() => setPage("dashboard")}>Back</button>
    </div>
  );
}
