export const getAdjacentCells = (
  row: number,
  col: number,
): Array<{ row: number; col: number }> => {
  const adjacentCells: Array<{ row: number; col: number }> = [];
  for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
    for (let colOffset = -1; colOffset <= 1; colOffset++) {
      if (rowOffset === 0 && colOffset === 0) {
        continue;
      }
      adjacentCells.push({ row: row + rowOffset, col: col + colOffset });
    }
  }

  return adjacentCells;
};
