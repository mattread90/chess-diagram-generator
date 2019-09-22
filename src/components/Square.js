import React, { useCallback } from "react";
import cn from "classnames";

import { Piece } from "./Piece";
import styles from "./Square.module.scss";

const Square = ({ color, piece, selected, row, col, onClick }) => {
  const handleClick = useCallback(() => onClick(row, col), [row, col, onClick]);
  return (
    <div
      className={cn(styles.square, styles[color], {
        [styles.selected]: selected
      })}
      onClick={handleClick}
    >
      <Piece piece={piece} />
    </div>
  );
};

export { Square };
