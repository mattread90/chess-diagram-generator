import React from "react";

import { Square } from "./Square";

import { isSquareSelected } from "../selectors/ui";
import { RowCoords, ColCoords } from "./Coord";
import styles from "./Board.module.scss";

const Board = ({ board, onSquareClick, selectedSquare }) => {
  return (
    <div id="diagram" className={styles.wrapper}>
      <div className={styles.yCoords}>
        <RowCoords />
      </div>
      <div className={styles.board}>
        {board.map((row, i) => (
          <Row
            key={`row-${i}`}
            row={row}
            rowIndex={i}
            onSquareClick={onSquareClick}
            selectedSquare={selectedSquare}
          />
        ))}
      </div>
      <div className={styles.xCoords}>
        <ColCoords />
      </div>
    </div>
  );
};

const Row = ({ row, rowIndex, onSquareClick, selectedSquare }) => {
  return (
    <div className={styles.row}>
      {row.map((square, columnIndex) => (
        <Square
          key={`square-${rowIndex}-${columnIndex}`}
          row={rowIndex}
          col={columnIndex}
          color={getColor(rowIndex, columnIndex)}
          onClick={onSquareClick}
          selected={isSquareSelected(selectedSquare, rowIndex, columnIndex)}
          piece={square}
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
