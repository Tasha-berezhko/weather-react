import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!</h1>
        <Weather city="Kyiv" />
        <a
          href="https://www.shecodes.io/learn/workshops/1209/units/74/lessons/293"
          target="blank"
          rel="noreferrer"
        >
          SheCodes
        </a>
      </header>
    </div>
  );
}

export default App;
