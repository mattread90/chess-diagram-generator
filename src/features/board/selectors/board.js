import { squareId } from "../utils/board";

export function getSquare(board, row, col) {
  return board[squareId(row, col)];
}

export function getPiece(board, row, col) {
  return getSquare(board, row, col).piece;
}

export function getPieceColor(board, row, col) {
  return getSquare(board, row, col).color;
}
