import React, { useEffect, useState } from "react";

import "./Main.css";
import Tile from "../TIle/Tile";

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

  return (
    <div id="main" className="main-container">
      {/* <div className="tile-holder"></div> */}
      {tiledata.map((data, i) => (
        <Tile key={data.id} orpos={orpos} index={i} {...data} />
      ))}
    </div>
  );
}
