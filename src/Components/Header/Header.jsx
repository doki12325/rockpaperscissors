import React from "react";

import "./Header.css";

export default function Header() {
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
        <h1 className="score-text score-main">12</h1>
      </div>
    </div>
  );
}
