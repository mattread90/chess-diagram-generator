import React from "react";
import cn from "classnames";

import whitePawn from "../assets/images/pieces/white-pawn.png";
import whiteRook from "../assets/images/pieces/white-rook.png";
import whiteKnight from "../assets/images/pieces/white-knight.png";
import whiteBishop from "../assets/images/pieces/white-bishop.png";
import whiteQueen from "../assets/images/pieces/white-queen.png";
import whiteKing from "../assets/images/pieces/white-king.png";
import blackPawn from "../assets/images/pieces/black-pawn.png";
import blackRook from "../assets/images/pieces/black-rook.png";
import blackKnight from "../assets/images/pieces/black-knight.png";
import blackBishop from "../assets/images/pieces/black-bishop.png";
import blackQueen from "../assets/images/pieces/black-queen.png";
import blackKing from "../assets/images/pieces/black-king.png";

import styles from "./Piece.module.scss";

const sourceMap = {
  white: {
    p: { emoji: "♟", image: whitePawn },
    R: { emoji: "♜", image: whiteRook },
    N: { emoji: "♞", image: whiteKnight },
    B: { emoji: "♝", image: whiteBishop },
    Q: { emoji: "♛", image: whiteQueen },
    K: { emoji: "♚", image: whiteKing }
  },
  black: {
    p: { emoji: "♟", image: blackPawn },
    R: { emoji: "♜", image: blackRook },
    N: { emoji: "♞", image: blackKnight },
    B: { emoji: "♝", image: blackBishop },
    Q: { emoji: "♛", image: blackQueen },
    K: { emoji: "♚", image: blackKing }
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
