import React, { useContext, useEffect, useState } from "react";

import "./Main.css";
import Tile from "../TIle/Tile";
import { Gamestore } from "../../Store/GameStore";

export default function Main() {
  const tiledata = [
    {
      id: "rock",
      imgurl: "../../assets/images/icon-rock.svg",
      border: "linear-gradient(hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)",
    },
    {
      id: "paper",
      imgurl: "../../assets/images/icon-paper.svg",
      border: "linear-gradient(hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)",
    },
    {
      id: "scissors",
      imgurl: "../../assets/images/icon-scissors.svg",
      border: "linear-gradient(hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)",
    },
    {
      id: "lizard",
      imgurl: "../../assets/images/icon-lizard.svg",
      border: "linear-gradient(hsl(261, 73%, 60%) 0%, hsl(261, 72%, 63%) 100%)",
    },
    {
      id: "spock",
      imgurl: "../../assets/images/icon-spock.svg",
      border: "linear-gradient(hsl(189, 59%, 53%) 0%, hsl(189, 58%, 57%) 100%)",
    },
  ];

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
          left: "20%",
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
          right: "20%",
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
