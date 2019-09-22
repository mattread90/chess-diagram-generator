import React from "react";
import "./App.css";

import { Board } from "./components/Board";

const board = [
  [{}, {}, {}, {}, {}, {}, {}, {}],
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
    <div className="App">
      <header className="App-header">
        <Board board={board} />
      </header>
    </div>
  );
}

export default App;
