import React, { useCallback } from "react";
import cn from "classnames";

import { Piece } from "./Piece";
import styles from "./Square.module.scss";
import { useSquare } from "../features/board";

const Square = ({ color, selected, row, col, onClick }) => {
  const piece = useSquare(row, col);
  const handleClick = useCallback(() => onClick(row, col), [row, col, onClick]);
  return (
    <div
      className={cn(styles.square, styles[color], {
        [styles.selected]: selected
      })}
      onClick={handleClick}
    >
      {piece && <Piece piece={piece} />}
    </div>
  );
};

export { Square };
