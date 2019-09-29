import React from "react";
import cn from "classnames";

import { useSetPiece } from "../features/board";

import styles from "./PieceButton.module.scss";

const PieceButton = ({ row, col, piece, color, disabled }) => {
  const handleClick = useSetPiece(row, col, piece, color);
  return (
    <button
      className={cn(styles.button, styles[color])}
      onClick={handleClick}
      disabled={disabled}
    >
      {piece}
    </button>
  );
};

export { PieceButton };
