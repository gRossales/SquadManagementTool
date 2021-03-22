import { useState, useEffect, useContext } from "react";
import { TeamContext } from "../context/TeamContext";

const useTeam = () => {
  const {
    setTeamName,
    setTeamDesc,
    setTeamWebsite,
    setTeamType,
    setTeamTags,
    setTeamFormation,
    setTeamPlayers,
  } = useContext(TeamContext);

  const [team, setTeam] = useState({});

  function selectTeam(team) {
    setTeam(team);
  }

  useEffect(() => {
    if (team) {
      setTeamName(team.name);
      setTeamDesc(team.description);
      setTeamWebsite(team.website);
      setTeamType(team.type);
      setTeamTags(team.tags);
      setTeamFormation(team.formation);
      setTeamPlayers(team.players);
    }
  }, [team]);

  return selectTeam;
};

export default useTeam;
