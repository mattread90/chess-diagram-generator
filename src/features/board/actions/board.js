export function setPiece(row, col, piece, color) {
  return {
    type: "setPiece",
    payload: { row, col, piece, color }
  };
}
