import React from "react";

import { Square } from "./Square";

import { isSquareSelected } from "../selectors/ui";
import { RowCoords, ColCoords } from "./Coord";
import styles from "./Board.module.scss";

const Board = ({ rows, cols, selectedSquare, onSquareClick }) => {
  return (
    <div id="diagram" className={styles.wrapper}>
      <div className={styles.yCoords}>
        <RowCoords />
      </div>
      <div className={styles.board}>
        <Rows
          rows={rows}
          cols={cols}
          selectedSquare={selectedSquare}
          onSquareClick={onSquareClick}
        />
      </div>
      <div className={styles.xCoords}>
        <ColCoords />
      </div>
    </div>
  );
};

const Rows = ({ rows, cols, selectedSquare, onSquareClick }) =>
  Array(rows)
    .fill()
    .map((_, i) => (
      <Row
        key={`row-${i}`}
        cols={cols}
        row={i}
        selectedSquare={selectedSquare}
        onSquareClick={onSquareClick}
      />
    ));

const Row = ({ row, cols, selectedSquare, onSquareClick }) => {
  return (
    <div className={styles.row}>
      {Array(cols)
        .fill()
        .map((_, col) => (
          <Square
            key={`square-${row}-${col}`}
            row={row}
            col={col}
            color={getColor(row, col)}
            selected={isSquareSelected(selectedSquare, row, col)}
            onClick={onSquareClick}
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
