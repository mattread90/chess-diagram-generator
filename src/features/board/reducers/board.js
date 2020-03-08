import { squareId } from "../utils/board";

const initialState = {
  whiteColor: "#ffffff",
  blackColor: "#000000",
  squares: {}
};

export function boardReducer(board = initialState, action) {
  if (action.type === "clearBoard") {
    return { ...board, squares: {} };
  }
  if (action.type === "setWhiteColor") {
    return {
      ...board,
      whiteColor: action.payload
    };
  }
  if (action.type === "setBlackColor") {
    return {
      ...board,
      blackColor: action.payload
    };
  }
  if (
    action.payload &&
    typeof action.payload.row === "number" &&
    typeof action.payload.col === "number"
  ) {
    return {
      ...board,
      squares: squaresReducer(board.squares, action)
    };
  }
  return board;
}

function squaresReducer(squares, action) {
  if (
    typeof action.payload.row === "number" &&
    typeof action.payload.col === "number"
  ) {
    const id = squareId(action.payload.row, action.payload.col);
    return {
      ...squares,
      [id]: squareReducer(squares[id], action)
    };
  }
  return squares;
}

function squareReducer(square, action) {
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
