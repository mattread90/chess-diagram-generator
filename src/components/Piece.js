import React from "react";
import cn from "classnames";

import styles from "./Piece.module.scss";

const sourceMap = {
  white: {
    R: { emoji: "♜" },
    N: { emoji: "♞" },
    B: { emoji: "♝" },
    Q: { emoji: "♛" },
    K: { emoji: "♚" },
    p: { emoji: "♟" }
  },
  black: {
    R: { emoji: "♜" },
    N: { emoji: "♞" },
    B: { emoji: "♝" },
    Q: { emoji: "♛" },
    K: { emoji: "♚" },
    p: { emoji: "♟" }
  }
};

export const Piece = ({ piece: { piece, color } }) => {
  if (!piece) return null;
  const { image, emoji } = sourceMap[color][piece];
  if (image) {
    return (
      <img className={styles.image} src={image} alt={`${color} ${piece}`} />
    );
  } else if (emoji) {
    return <span className={cn(styles.emoji, styles[color])}>{emoji}</span>;
  } else {
    return piece;
  }
};
