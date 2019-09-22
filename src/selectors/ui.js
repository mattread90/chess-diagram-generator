export function isSquareSelected(selectedState, row, col) {
  return (
    selectedState && selectedState.row === row && selectedState.col === col
  );
}
