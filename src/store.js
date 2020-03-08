import { createStore, combineReducers } from "redux";
import { boardReducer } from "./features/board/reducers/board";
import { uiReducer } from "./reducers/ui";

const reducer = combineReducers({
  board: boardReducer,
  ui: uiReducer
});

const store = createStore(reducer);

export default store;
