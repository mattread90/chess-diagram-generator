import { squareId } from "../utils/board";

export function getBoard(state) {
  return state.board;
}

export function getWhiteColor(state) {
  return getBoard(state).whiteColor;
}

export function getBlackColor(state) {
  return getBoard(state).blackColor;
}

export function getSquares(state) {
  return getBoard(state).squares;
}

export function getSquare(state, row, col) {
  return getSquares(state)[squareId(row, col)];
}

export function getPiece(state, row, col) {
  return getSquare(state, row, col).piece;
}

export function getPieceColor(state, row, col) {
  return getSquare(state, row, col).color;
}
