import React, { useReducer, useCallback } from "react";
import styles from "./App.module.scss";

import { uiReducer } from "./reducers/ui";
import { downloadDiagram } from "./actions/downloadDiagram";
import { Board } from "./components/Board";
import { Controls } from "./components/Controls";
import { selectSquare, unselectSquare } from "./actions/ui";
import { boardReducer, init } from "./reducers/board";
import { setPiece } from "./actions/board";
import { getBoard } from "./selectors/board";

function App() {
  const [ui, dispatchUi] = useReducer(uiReducer, { selected: null });
  const handleSquareClick = useCallback(
    (row, col) => dispatchUi(selectSquare(row, col)),
    []
  );
  const [boardState, dispatchBoard] = useReducer(boardReducer, undefined, init);
  const handlePieceButtonClick = useCallback(
    (piece, color) => {
      if (ui.selected) {
        dispatchBoard(setPiece(ui.selected.row, ui.selected.col, piece, color));
      }
    },
    [ui.selected]
  );
  const board = getBoard(boardState);

  const handleDownloadClick = useCallback(async () => {
    dispatchUi(unselectSquare());
    await downloadDiagram();
    dispatchUi(selectSquare(ui.selected.row, ui.selected.col));
  }, [ui.selected]);

  return (
    <div className={styles.App}>
      <section className={styles.board}>
        <Board
          board={board}
          selectedSquare={ui.selected}
          onSquareClick={handleSquareClick}
        />
      </section>
      <section className={styles.buttons}>
        <Controls onPieceButtonClick={handlePieceButtonClick} />
      </section>
      <footer className={styles.footer}>
        <button className={styles.downloadButton} onClick={handleDownloadClick}>
          Download
        </button>
      </footer>
    </div>
  );
}

export default App;
