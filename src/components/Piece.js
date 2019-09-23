import React from "react";
import cn from "classnames";

import pawnWhite from "../assets/images/pawn-white.png";
import rookWhite from "../assets/images/rook-white.png";
import knightWhite from "../assets/images/knight-white.png";
import bishopWhite from "../assets/images/bishop-white.png";
import queenWhite from "../assets/images/queen-white.png";
import kingWhite from "../assets/images/king-white.png";
import pawnBlack from "../assets/images/pawn-black.png";
import rookBlack from "../assets/images/rook-black.png";
import knightBlack from "../assets/images/knight-black.png";
import bishopBlack from "../assets/images/bishop-black.png";
import queenBlack from "../assets/images/queen-black.png";
import kingBlack from "../assets/images/king-black.png";

import styles from "./Piece.module.scss";

const sourceMap = {
  white: {
    p: { image: pawnWhite, emoji: "♟" },
    R: { image: rookWhite, emoji: "♜" },
    N: { image: knightWhite, emoji: "♞" },
    B: { image: bishopWhite, emoji: "♝" },
    Q: { image: queenWhite, emoji: "♛" },
    K: { image: kingWhite, emoji: "♚" }
  },
  black: {
    p: { image: pawnBlack, emoji: "♟" },
    R: { image: rookBlack, emoji: "♜" },
    N: { image: knightBlack, emoji: "♞" },
    B: { image: bishopBlack, emoji: "♝" },
    Q: { image: queenBlack, emoji: "♛" },
    K: { image: kingBlack, emoji: "♚" }
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
