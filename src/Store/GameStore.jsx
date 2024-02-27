import React, { createContext, useState } from "react";

export const Gamestore = createContext(null);

export default function GameStore({ children }) {
  const [score, setScore] = useState(0);
  const [userselect, setUserselect] = useState(null);
  const [houseselect, setHouseselect] = useState("rock");
  const [gamestate, setGamestate] = useState("housepick");
  return (
    <Gamestore.Provider
      value={{
        score: { score, setScore },
        userselect: { userselect, setUserselect },
        gamestate: { gamestate, setGamestate },
      }}
    >
      {children}
    </Gamestore.Provider>
  );
}
