import React, { createContext, useState } from "react";

export const Gamestore = createContext(null);

export default function GameStore({ children }) {
  const [score, setScore] = useState(0);
  const [userselect, setUserselect] = useState(null);
  return (
    <Gamestore.Provider
      value={{
        score: { score, setScore },
        userselect: { userselect, setUserselect },
      }}
    >
      {children}
    </Gamestore.Provider>
  );
}
