import React, { useState, createContext } from "react";

export const PlayerContext = createContext(null);

export default function PlayerProvider({ children }) {
  const [selectedPlayer, setSelectedPlayer] = useState({});

  return (
    <PlayerContext.Provider value={{ selectedPlayer, setSelectedPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
}
