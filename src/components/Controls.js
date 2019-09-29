import React from "react";

import styles from "./Controls.module.scss";
import { PieceButton } from "./PieceButton";

const PIECES = ["R", "N", "B", "Q", "K", "p"];

const Controls = ({ active, row, col }) => {
  return (
    <div className={styles.controls}>
      <div className={styles.column}>
        {PIECES.map(piece => (
          <PieceButton
            key={`white-${piece}`}
            piece={piece}
            color="white"
            row={row}
            col={col}
          />
        ))}
      </div>
      <div className={styles.column}>
        {PIECES.map(piece => (
          <PieceButton
            key={`black-${piece}`}
            piece={piece}
            color="black"
            row={row}
            col={col}
          />
        ))}
      </div>
    </div>
  );
};

export { Controls };
