import React, { useCallback } from "react";
import cn from "classnames";

import styles from "./PieceButton.module.scss";
import { useDispatch } from "react-redux";
import { setPiece } from "../features/board/actions/board";
import { Piece } from "./Piece";

const PieceButton = ({ row, col, piece, color, disabled }) => {
  const dispatch = useDispatch();
  const handleClick = useCallback(
    () => dispatch(setPiece(row, col, piece, color)),
    [dispatch, row, col, piece, color]
  );
  return (
    <button
      className={cn(styles.button, styles[color])}
      onClick={handleClick}
      disabled={disabled}
    >
      <Piece piece={{ piece, color }} />
    </button>
  );
};

export { PieceButton };
