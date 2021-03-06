export function uiReducer(state = { selected: null }, action) {
  switch (action.type) {
    case "selectSquare":
      return { ...state, selected: action.payload };
    case "unselectSquare":
      return { ...state, selected: null };
    default:
      return state;
  }
}
