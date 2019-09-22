import { squareId } from "../utils/board";

function getSquare(board, row, col) {
  return board[squareId(row, col)];
}

export function getBoard(boardState) {
  return Array(8 * 8)
    .fill(null)
    .reduce((board, _, index) => {
      const row = Math.floor(index / 8);
      const col = index % 8;
      if (!board[row]) {
        board[row] = [];
      }
      board[row][col] = getSquare(boardState, row, col);
      return board;
    }, []);
}
