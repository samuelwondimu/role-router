import { CssBaseline } from "@material-ui/core";
import React from "react";
import Routes from "./routes/index";

function App() {
  // localStorage.setItem("roles", JSON.stringify("ADMIN"));
  return (
    <div>
      <CssBaseline />
      <Routes />
    </div>
  );
}

export default App;
