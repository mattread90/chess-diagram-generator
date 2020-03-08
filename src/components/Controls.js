import React, { useCallback } from "react";
import { SketchPicker as ColorPicker } from "react-color";

import styles from "./Controls.module.scss";
import { PieceButton } from "./PieceButton";
import {
  getWhiteColor,
  getBlackColor
} from "../features/board/selectors/board";
import { useSelector, useDispatch } from "react-redux";
import { setWhiteColor, setBlackColor } from "../features/board/actions/board";

const PIECES = ["R", "N", "B", "Q", "K", "p"];

const Controls = ({ active, row, col }) => {
  const whiteColor = useSelector(getWhiteColor);
  const blackColor = useSelector(getBlackColor);
  const dispatch = useDispatch();
  const handleWhiteColorPick = useCallback(
    ({ hex }) => dispatch(setWhiteColor(hex)),
    [dispatch]
  );
  const handleBlackColorPick = useCallback(
    ({ hex }) => dispatch(setBlackColor(hex)),
    [dispatch]
  );

  return (
    <div className={styles.controls}>
      <div className={styles.column}>
        {PIECES.map(piece => (
          <PieceButton
            key={`white-${piece}`}
            piece={piece}
            color="white"
            row={row}
            col={col}
          />
        ))}
      </div>
      <div className={styles.column}>
        {PIECES.map(piece => (
          <PieceButton
            key={`black-${piece}`}
            piece={piece}
            color="black"
            row={row}
            col={col}
          />
        ))}
      </div>
      <div className={styles.column}>
        <ColorPicker color={whiteColor} onChange={handleWhiteColorPick} />
        <ColorPicker color={blackColor} onChange={handleBlackColorPick} />
      </div>
    </div>
  );
};

export { Controls };
