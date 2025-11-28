import React from "react";

export default function Login({ setPage, gamerName, setGamerName }) {
  return (
    <div style={{ padding: 500 }}>
      <h1>Login</h1>
      <input
        placeholder="Gamer Name"
        value={gamerName}
        onChange={(e) => setGamerName(e.target.value)}
      />
      <button onClick={() => gamerName && setPage("dashboard")}>Login</button>
    </div>
  );
}
