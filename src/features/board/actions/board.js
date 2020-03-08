export function clearBoard() {
  return {
    type: "clearBoard"
  };
}

export function setPiece(row, col, piece, color) {
  return {
    type: "setPiece",
    payload: { row, col, piece, color }
  };
}

export function setWhiteColor(color) {
  return {
    type: "setWhiteColor",
    payload: color
  };
}

export function setBlackColor(color) {
  return {
    type: "setBlackColor",
    payload: color
  };
}
