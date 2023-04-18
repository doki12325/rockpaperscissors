import React, { useState } from "react";
import "./Tile.css";

export default function Tile(props) {
  console.log(
    2 *
      200 *
      Math.sin((Math.PI / 5) * props.index) *
      Math.sin((Math.PI / 5) * props.index),
    props.index * 36
  );
  return (
    <div
      id={props.id}
      className="tile-container tilepos"
      style={{
        backgroundImage: props.border,
        top: `${
          props.orpos.y +
          2 *
            200 *
            Math.sin((Math.PI / 5) * props.index) *
            Math.sin((Math.PI / 5) * props.index) -
          200
        }px`,
        left: `${
          props.orpos.x +
          2 *
            200 *
            Math.sin((Math.PI / 5) * props.index) *
            Math.cos((Math.PI / 5) * props.index)
        }px`,
      }}
    >
      <div className="tile-inner-container">
        <img
          src={new URL(props.imgurl, import.meta.url).href}
          alt={props.id}
        ></img>
      </div>
    </div>
  );
}
