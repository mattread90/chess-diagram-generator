import React from "react";
import cn from "classnames";

import styles from "./Controls.module.scss";
import { PieceButton } from "./PieceButton";

const PIECES = ["R", "N", "B", "Q", "K", "p"];

const Controls = ({ active }) => {
  return (
    <div className={styles.controls}>
      <div className={styles.column}>
        {PIECES.map(piece => (
          <PieceButton piece={piece} color="white" />
        ))}
      </div>
      <div className={styles.column}>
        {PIECES.map(piece => (
          <PieceButton piece={piece} color="black" />
        ))}
      </div>
    </div>
  );
};

export { Controls };
