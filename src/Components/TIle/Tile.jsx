import React, { useContext, useEffect, useState } from "react";
import "./Tile.css";
import { Gamestore } from "../../Store/GameStore";

export default function Tile(props) {
  const gamestore = useContext(Gamestore);
  const setUserselect = gamestore.userselect.setUserselect;
  useEffect(() => {
    const selecttile = document.getElementById(gamestore.userselect.userselect);
    if (selecttile !== null) {
      selecttile.animate(
        [
          {
            top: "25%",
            left: "30%",
            transform: "translate(-50%,-50%) scale(2.0)",
          },
        ],
        {
          duration: 1000,
          fill: "forwards",
        }
      );
    }
  }, [gamestore.userselect.userselect]);
  return (
    <div
      onClick={() => {
        setUserselect(props.id);
        gamestore.gamestate.setGamestate("housepick");
      }}
      id={props.id}
      className="tile-container tilepos"
      style={{
        backgroundImage: props.border,
        top: `${
          props.orpos.y +
          2 *
            180 *
            Math.sin((Math.PI / 5) * props.index) *
            Math.sin((Math.PI / 5) * props.index) -
          180
        }px`,
        left: `${
          props.orpos.x +
          2 *
            180 *
            Math.sin((Math.PI / 5) * props.index) *
            Math.cos((Math.PI / 5) * props.index)
        }px`,
        visibility:
          gamestore.userselect.userselect === props.id ||
          gamestore.userselect.userselect === null
            ? "visible"
            : "hidden",
      }}
    >
      <div className="tile-inner-container">
        <img
          draggable="false"
          className="tile-image"
          src={new URL(props.imgurl, import.meta.url).href}
          alt={props.id}
        ></img>
      </div>
    </div>
  );
}
