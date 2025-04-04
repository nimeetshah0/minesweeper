import React from "react";
import "./App.css";
import { Board } from "./components/board";
import { Scoreboard } from "./components/scoreboard";

function App() {
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [flagsPlanted, setFlagsPlanted] = React.useState(0);

  const handleFlagUpdated = (newFlagsPlanted: number) => {
    setFlagsPlanted(newFlagsPlanted);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Scoreboard flagsPlanted={flagsPlanted} isGameOver={isGameOver} />
      <Board
        row={8}
        col={8}
        mines={10}
        onGameOver={() => setIsGameOver(true)}
        onFlagUpdated={handleFlagUpdated}
      />
    </div>
  );
}

export default App;
