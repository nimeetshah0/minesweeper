import { useCallback, useEffect, useState } from "react";
import { getAdjacentCells } from "../util/get-adjacent-cells";
import { ClickType, Click, CellState } from "../util/types";
import { Cell } from "./cell";

interface BoardProps {
  row: number;
  col: number;
  mines: number;
}

export const Board = (props: BoardProps) => {
  const [mines, setMines] = useState<{ row: number; col: number }[]>([]);
  const [cellStates, setCellStates] = useState<CellState[]>([]);

  const getCellState = (row: number, col: number): CellState | undefined => {
    return cellStates.find((state) => state.row === row && state.col === col);
  };

  const updateCellState = (row: number, col: number, newState: CellState) => {
    const index = cellStates.findIndex(
      (state) => state.row === row && state.col === col,
    );
    if (index !== -1) {
      const newCellStates = [...cellStates];
      newCellStates[index] = newState;
      setCellStates(newCellStates);
    }
  };

  const scatterMines = useCallback(() => {
    const mines = Array.from({ length: props.mines }, () => ({
      row: Math.floor(Math.random() * props.row),
      col: Math.floor(Math.random() * props.col),
    }));
    setMines(mines);
  }, [props.row, props.col, props.mines]);

  const revealCellsAround = (row: number, col: number) => {
    const state = getCellState(row, col);
    if (!state || state.isRevealed || state.hasMine || state.isFlagged) {
      return;
    }

    state.isRevealed = true;
    updateCellState(row, col, state);

    if (state.value !== 0) {
      return;
    }

    const adjacentCells = getAdjacentCells(row, col);
    for (const cell of adjacentCells) {
      revealCellsAround(cell.row, cell.col);
    }
  };

  const handleCellClick = (row: number, col: number, clickType: ClickType) => {
    const state = getCellState(row, col);
    if (!state || state.isRevealed) {
      return;
    }

    if (clickType === Click.LEFT) {
      revealCellsAround(row, col);
      return;
    }

    if (clickType === Click.RIGHT) {
      state.isFlagged = !state.isFlagged;
      updateCellState(row, col, state);
    }
  };

  useEffect(() => {
    scatterMines();
  }, [scatterMines]);

  useEffect(() => {
    if (mines.length === 0) {
      return;
    }

    // Figure out the cell value for each row and col. The value of a cell is
    // the number of mines in the 8 adjacent cells.
    const states = Array.from({ length: props.row }, (_, rowIndex) =>
      Array.from({ length: props.col }, (_, colIndex) => {
        const adjacentMines = getAdjacentCells(rowIndex, colIndex).filter(
          (mine) => mines.some((m) => m.row === mine.row && m.col === mine.col),
        ).length;
        return {
          row: rowIndex,
          col: colIndex,
          value: adjacentMines,
          isRevealed: false,
          isFlagged: false,
          hasMine: mines.some((m) => m.row === rowIndex && m.col === colIndex),
        };
      }),
    );
    setCellStates(states.flat());
  }, [mines, props.row, props.col]);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: `${props.col * 30}px`,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {Array.from({ length: props.row }, (_, colIndex) => (
          <div key={colIndex} style={{ width: 30, height: 30 }}>
            {Array.from({ length: props.col }, (_, rowIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                state={cellStates.find(
                  (cell) => cell.row === rowIndex && cell.col === colIndex,
                )}
                onClick={handleCellClick}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
