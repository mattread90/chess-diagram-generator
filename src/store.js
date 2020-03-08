import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { boardReducer } from "./features/board/reducers/board";
import { uiReducer } from "./reducers/ui";

const reducer = combineReducers({
  board: boardReducer,
  ui: uiReducer
});

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default store;
