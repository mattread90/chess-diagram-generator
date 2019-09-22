import React, { useCallback } from "react";
import cn from "classnames";

import styles from "./PieceButton.module.scss";

const PieceButton = ({ piece, color, disabled, onClick }) => {
  const handleClick = useCallback(() => onClick(piece, color), [
    piece,
    color,
    onClick
  ]);
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
