export enum Click {
  LEFT = "click",
  RIGHT = "contextmenu",
}

export type ClickType = Click.LEFT | Click.RIGHT;

export type CellState = {
  isRevealed: boolean;
  isFlagged: boolean;
  hasMine: boolean;
  value: number;
  row: number;
  col: number;
};

export type SvgProps = {
  width?: number;
  height?: number;
};
