import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { Piece } from "./Piece";
import styles from "./Square.module.scss";
import { selectSquare } from "../actions/ui";
import { getSquare } from "../features/board/selectors/board";
import { isSquareSelected } from "../selectors/ui";

const Square = ({ color, row, col }) => {
  const dispatch = useDispatch();
  const piece = useSelector(s => getSquare(s, row, col));
  const selected = useSelector(s => isSquareSelected(s, row, col));
  const handleClick = useCallback(() => dispatch(selectSquare(row, col)), [
    row,
    col,
    dispatch
  ]);
  return (
    <div
      className={cn(styles.square, {
        [styles.selected]: selected
      })}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {piece && <Piece piece={piece} />}
    </div>
  );
};

export { Square };
