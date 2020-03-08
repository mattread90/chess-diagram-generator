import React, { useCallback } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import { clearBoard } from "./features/board/actions/board";
import { downloadDiagram } from "./actions/downloadDiagram";
import { selectSquare, unselectSquare } from "./actions/ui";
import { Board } from "./components/Board";
import { Controls } from "./components/Controls";

import styles from "./App.module.scss";
import store from "./store";

function App() {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.ui.selected);

  const handleDownloadClick = useCallback(async () => {
    dispatch(unselectSquare());
    await downloadDiagram();
    dispatch(selectSquare(selected.row, selected.col));
  }, [selected, dispatch]);

  const handleClearClick = useCallback(() => dispatch(clearBoard()), [
    dispatch
  ]);

  return (
    <div className={styles.App}>
      <section className={styles.board}>
        <Board rows={8} cols={8} />
      </section>
      <section className={styles.buttons}>
        <Controls
          row={selected ? selected.row : null}
          col={selected ? selected.col : null}
        />
      </section>
      <footer className={styles.footer}>
        <button className={styles.button} onClick={handleDownloadClick}>
          Download
        </button>
        <button className={styles.button} onClick={handleClearClick}>
          Clear
        </button>
      </footer>
    </div>
  );
}

export function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWithStore;
