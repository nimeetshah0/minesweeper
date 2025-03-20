import { CellState, ClickType } from "../util/types";

interface CellProps {
  state?: CellState;
  onClick: (row: number, col: number, clickType: ClickType) => void;
}

export const Cell = (props: CellProps) => {
  const { state, onClick } = props;
  if (!state) {
    return null;
  }

  const { row, col, hasMine, isRevealed, value, isFlagged } = state;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    // Cast is fine because it's guaranteed to be a valid ClickType.
    onClick(row, col, event.type as ClickType);
  };

  const getCellContent = () => {
    if (isFlagged) {
      return "F";
    }
    if (isRevealed && !isFlagged) {
      return value === 0 ? " " : value.toString();
    }
    return "?";
  };

  return (
    <div
      onClick={handleClick}
      onContextMenu={handleClick}
      style={{
        backgroundColor: isRevealed ? "lightgray" : "darkgray",
        border: "1px solid black",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="cell"
    >
      {getCellContent()}
    </div>
  );
};
