import { squareId } from "../utils/board";

export function boardReducer(board, action) {
  if (
    typeof action.payload.row === "number" &&
    typeof action.payload.col === "number"
  ) {
    const id = squareId(action.payload.row, action.payload.col);
    return {
      ...board,
      [id]: square(board[id], action)
    };
  }
}

function square(square, action) {
  switch (action.type) {
    case "setPiece":
      return {
        ...square,
        piece: action.payload.piece,
        color: action.payload.color
      };
    default:
      return square;
  }
}
