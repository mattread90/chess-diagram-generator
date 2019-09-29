import React, { useReducer } from "react";

import { BoardContext } from "../context";
import { boardReducer } from "../reducers/board";

export const withBoard = Component => props => (
  <BoardContext.Provider value={useReducer(boardReducer, {})}>
    <Component {...props} />
  </BoardContext.Provider>
);
