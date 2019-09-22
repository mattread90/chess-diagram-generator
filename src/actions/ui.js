export function selectSquare(row, col) {
  return {
    type: "selectSquare",
    payload: { row, col }
  };
}

export function unselectSquare() {
  return {
    type: "unselectSquare"
  };
}
