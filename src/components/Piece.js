import React from "react";
import cn from "classnames";

import styles from "./Piece.module.scss";

const sourceMap = {
  white: {
    p: { emoji: "♟" },
    R: { emoji: "♜" },
    N: { emoji: "♞" },
    B: { emoji: "♝" },
    Q: { emoji: "♛" },
    K: { emoji: "♚" }
  },
  black: {
    p: { emoji: "♟" },
    R: { emoji: "♜" },
    N: { emoji: "♞" },
    B: { emoji: "♝" },
    Q: { emoji: "♛" },
    K: { emoji: "♚" }
  }
};

export const Piece = ({ piece: { piece, color } }) => {
  if (!piece) return null;
  const { SVG, image, emoji } = sourceMap[color][piece];
  if (SVG) {
    return <SVG />;
  } else if (image) {
    return (
      <img className={styles.image} src={image} alt={`${color} ${piece}`} />
    );
  } else if (emoji) {
    return <span className={cn(styles.emoji, styles[color])}>{emoji}</span>;
  } else {
    return piece;
  }
};
