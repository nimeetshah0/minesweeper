import React from "react";
import "./App.css";
import { Board } from "./components/board";

function App() {
  return (
    <div className="App">
      <Board row={8} col={8} mines={10} />
    </div>
  );
}

export default App;
