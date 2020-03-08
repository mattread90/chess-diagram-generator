import React from "react";

import { Square } from "./Square";
import { RowCoords, ColCoords } from "./Coord";
import styles from "./Board.module.scss";
import {
  getWhiteColor,
  getBlackColor
} from "../features/board/selectors/board";
import { useSelector } from "react-redux";

const Board = ({ rows, cols }) => {
  const borderColor = useSelector(getBlackColor);
  return (
    <div id="diagram" className={styles.wrapper}>
      <div className={styles.yCoords}>
        <RowCoords />
      </div>
      <div className={styles.board} style={{ borderColor }}>
        <Rows rows={rows} cols={cols} />
      </div>
      <div className={styles.xCoords}>
        <ColCoords />
      </div>
    </div>
  );
};

const Rows = ({ rows, cols }) =>
  Array(rows)
    .fill()
    .map((_, i) => <Row key={`row-${i}`} cols={cols} row={i} />);

const Row = ({ row, cols }) => {
  const whiteColor = useSelector(getWhiteColor);
  const blackColor = useSelector(getBlackColor);
  return (
    <div className={styles.row}>
      {Array(cols)
        .fill()
        .map((_, col) => (
          <Square
            key={`square-${row}-${col}`}
            row={row}
            col={col}
            color={getColor(row, col) === "white" ? whiteColor : blackColor}
          />
        ))}
    </div>
  );
};

const getColor = (rowIndex, columnIndex) =>
  rowIndex % 2
    ? getColorForOddRow(columnIndex)
    : getColorForEvenRow(columnIndex);

const getColorForEvenRow = columnIndex => (columnIndex % 2 ? "black" : "white");
const getColorForOddRow = columnIndex => (columnIndex % 2 ? "white" : "black");

export { Board };
