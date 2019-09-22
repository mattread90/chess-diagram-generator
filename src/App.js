import React from "react";
import styles from "./App.module.scss";

import { downloadDiagram } from "./actions/downloadDiagram";
import { Board } from "./components/Board";
import { Controls } from "./components/Controls";

const board = [
  [{ piece: "R" }, {}, {}, { piece: "Q" }, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}]
];

function App() {
  return (
    <div className={styles.App}>
      <section className={styles.board}>
        <Board board={board} />
      </section>
      <section className={styles.buttons}>
        <Controls />
      </section>
      <footer className={styles.footer}>
        <button className={styles.downloadButton} onClick={downloadDiagram}>
          Download
        </button>
      </footer>
    </div>
  );
}

export default App;
