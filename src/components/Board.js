import React from "react";

import { Square } from "./Square";

import styles from "./Board.module.scss";

const Board = ({ board }) => {
  return (
    <div id="diagram" className={styles.board}>
      {board.map((row, i) => (
        <Row key={`row-${i}`} row={row} rowIndex={i} />
      ))}
    </div>
  );
};

const Row = ({ row, rowIndex }) => {
  return (
    <div className={styles.row}>
      {row.map((square, columnIndex) => (
        <Square
          key={`square-${rowIndex}-${columnIndex}`}
          color={getColor(rowIndex, columnIndex)}
          {...square}
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
