import React, { useContext, useEffect, useState } from "react";

import "./Main.css";
import Tile from "../TIle/Tile";
import { Gamestore } from "../../Store/GameStore";
import Tiledata from "../../Tiledata";

export default function Main() {
  const tiledata = Tiledata;

  const [orpos, setOrpos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mainel = document.getElementById("main");
    setOrpos({ x: mainel.clientWidth / 2, y: mainel.clientHeight / 2 });
  }, []);

  const gamestore = useContext(Gamestore);

  return (
    <div className="main-container">
      <h1
        className="pick-text"
        style={{
          visibility:
            gamestore.userselect.userselect === null ? "hidden" : "visible",
          opacity: gamestore.userselect.userselect === null ? "0" : "1",
          top: 0,
          left: gamestore.gamestate.gamestate !== "result" ? "30%" : "15%",
        }}
      >
        YOU PICKED
      </h1>
      <h1
        className="pick-text"
        style={{
          visibility:
            gamestore.userselect.userselect === null ? "hidden" : "visible",
          opacity: gamestore.userselect.userselect === null ? "0" : "1",
          top: 0,
          right: gamestore.gamestate.gamestate !== "result" ? "30%" : "15%",
        }}
      >
        THE HOUSE PICKED
      </h1>
      <div id="main" className="tile-holder">
        {tiledata.map((data, i) => (
          <Tile key={data.id} orpos={orpos} index={i} {...data} />
        ))}
      </div>
    </div>
  );
}
