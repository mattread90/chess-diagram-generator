import React, { useReducer, useCallback } from "react";
import styles from "./App.module.scss";

import { uiReducer } from "./reducers/ui";
import { downloadDiagram } from "./actions/downloadDiagram";
import { Board } from "./components/Board";
import { Controls } from "./components/Controls";
import { selectSquare, unselectSquare } from "./actions/ui";
import { withBoard } from "./features/board";

function App() {
  const [ui, dispatchUi] = useReducer(uiReducer, { selected: null });
  const handleSquareClick = useCallback(
    (row, col) => dispatchUi(selectSquare(row, col)),
    []
  );

  const handleDownloadClick = useCallback(async () => {
    dispatchUi(unselectSquare());
    await downloadDiagram();
    dispatchUi(selectSquare(ui.selected.row, ui.selected.col));
  }, [ui.selected]);

  return (
    <div className={styles.App}>
      <section className={styles.board}>
        <Board
          rows={8}
          cols={8}
          selectedSquare={ui.selected}
          onSquareClick={handleSquareClick}
        />
      </section>
      <section className={styles.buttons}>
        <Controls
          row={ui.selected ? ui.selected.row : null}
          col={ui.selected ? ui.selected.col : null}
        />
      </section>
      <footer className={styles.footer}>
        <button className={styles.downloadButton} onClick={handleDownloadClick}>
          Download
        </button>
      </footer>
    </div>
  );
}

const AppWithBoardState = withBoard(App);

export default AppWithBoardState;
