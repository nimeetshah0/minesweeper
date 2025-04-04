import { CellState, ClickType } from "../util/types";
import { EmptyTile } from "./empty-tile";
import { Flag } from "./flag";
import { Mine } from "./mine";
import { Tile } from "./tile";
import { Tile1 } from "./tile-1";
import { Tile2 } from "./tile-2";
import { Tile3 } from "./tile-3";
import { Tile4 } from "./tile-4";
import { Tile5 } from "./tile-5";
import { Tile6 } from "./tile-6";
import { Tile7 } from "./tile-7";
import { Tile8 } from "./tile-8";

interface CellProps {
  maxRows: number;
  maxCols: number;
  state?: CellState;
  onClick: (row: number, col: number, clickType: ClickType) => void;
}

export const Cell = (props: CellProps) => {
  const { state, onClick, maxCols } = props;
  if (!state) {
    return null;
  }

  const { row, col, hasMine, isRevealed, value, isFlagged } = state;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    // Cast is fine because it's guaranteed to be a valid ClickType.
    onClick(row, col, event.type as ClickType);
  };

  const getTileForValue = (value: number) => {
    switch (value) {
      case 1:
        return <Tile1 />;
      case 2:
        return <Tile2 />;
      case 3:
        return <Tile3 />;
      case 4:
        return <Tile4 />;
      case 5:
        return <Tile5 />;
      case 6:
        return <Tile6 />;
      case 7:
        return <Tile7 />;
      case 8:
        return <Tile8 />;
    }
  };

  const getCellContent = () => {
    if (isRevealed && hasMine) {
      return <Mine />;
    }

    if (isFlagged) {
      return <Flag />;
    }
    if (isRevealed && !isFlagged) {
      return value === 0 ? <EmptyTile /> : getTileForValue(value);
    }
    return <Tile />;
  };

  const renderBorders = () => {
    const borderStyle = "1px solid gray";
    const borderTop = row !== 0 ? "none" : borderStyle;
    const borderRight = col !== maxCols - 1 ? "none" : borderStyle;
    const borderBottom = borderStyle;
    const borderLeft = borderStyle;
    return { borderTop, borderRight, borderBottom, borderLeft };
  };

  return (
    <div
      onClick={handleClick}
      onContextMenu={handleClick}
      style={{
        ...renderBorders(),
        background: isRevealed
          ? hasMine
            ? "blue"
            : "lightyellow"
          : "linear-gradient(0deg, rgba(40,171,224,1) 0%, rgba(34,193,195,1) 50%, rgba(40,171,224,1) 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {getCellContent()}
    </div>
  );
};
