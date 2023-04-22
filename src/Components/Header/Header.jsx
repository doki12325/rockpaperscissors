import React, { useContext } from "react";

import "./Header.css";
import { Gamestore } from "../../Store/GameStore";

export default function Header() {
  const score = useContext(Gamestore);
  return (
    <div className="header-container">
      <div className="header-text-container">
        <p className="header-text">ROCK</p>
        <p className="header-text">PAPER</p>
        <p className="header-text">SCISSORS</p>
        <p className="header-text">LIZARD</p>
        <p className="header-text">SPOCK</p>
      </div>
      <div className="score-container">
        <p className="score-text score-head">SCORE</p>
        <h1 className="score-text score-main">{score.score.score}</h1>
      </div>
    </div>
  );
}
