import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Maingame/Main";
import GameStore from "./Store/GameStore";

function App() {
  return (
    <GameStore>
      <div className="App">
        <Header />
        <Main />
      </div>
    </GameStore>
  );
}

export default App;
