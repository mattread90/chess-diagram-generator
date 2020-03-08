export function getUiState(state) {
  return state.ui;
}

export function isSquareSelected(state, row, col) {
  const selectedState = getUiState(state).selected;
  return (
    selectedState && selectedState.row === row && selectedState.col === col
  );
}
