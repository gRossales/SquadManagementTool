import { useState, createContext } from "react";

export const TeamContext = createContext(null);

export default function TeamProvider({ children }) {
  const [teamName, setTeamName] = useState("");
  const [teamDesc, setTeamDesc] = useState("");
  const [teamWebsite, setTeamWebsite] = useState("");
  const [teamType, setTeamType] = useState("");
  const [teamTags, setTeamTags] = useState([]);
  const [teamFormation, setTeamFormation] = useState("");
  const [teamPlayers, setTeamPlayers] = useState([]);

  return (
    <TeamContext.Provider
      value={{
        teamName,
        setTeamName,
        teamDesc,
        setTeamDesc,
        teamWebsite,
        setTeamWebsite,
        teamType,
        setTeamType,
        teamTags,
        setTeamTags,
        teamFormation,
        setTeamFormation,
        teamPlayers,
        setTeamPlayers,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
}
