import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Stats from "./pages/Stats";
import Match from "./pages/Match";
import Leaderboard from "./pages/Leaderboard";

function App() {
  const [page, setPage] = useState("login");
  const [gamerName, setGamerName] = useState("");

  switch (page) {
  case "login":
    return <Login setPage={setPage} gamerName={gamerName} setGamerName={setGamerName} />;
    break;
  case "dashboard":
    return <Dashboard setPage={setPage} gamerName={gamerName} />;
    break;
  case "stats":
    return <Stats setPage={setPage} />;
    break;
  case "match":
    return <Match setPage={setPage} />;
    break;
  case "leaderboard":
    return <Leaderboard setPage={setPage} gamerName={gamerName} />;
    break;
  default:
    return null;
}
}

export default App;