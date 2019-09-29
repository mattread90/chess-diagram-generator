import { useContext, useCallback } from "react";

import { BoardContext } from "../context";
import { getSquare } from "../selectors/board";
import { setPiece } from "../actions/board";

export const useBoardState = () => {
  const [state, dispatch] = useContext(BoardContext);
  return state;
};

const useBoardDispatch = () => {
  const [state, dispatch] = useContext(BoardContext);
  return dispatch;
};

// selectors

export const useSquare = (row, col) => {
  const state = useBoardState();
  return getSquare(state, row, col);
};

// actions

export const useSetPiece = (row, col, piece, color) => {
  const dispatch = useBoardDispatch();
  return useCallback(() => dispatch(setPiece(row, col, piece, color)), [
    dispatch,
    row,
    col,
    piece,
    color
  ]);
};
