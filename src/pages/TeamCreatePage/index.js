import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import styles from "./styles.module.css";
import { TeamContext } from "../../context/TeamContext";
import { MyTeamsContext } from "../../context/MyTeamsContext";
import Card from "../../components/Card";
import TagInput from "../../components/TagInput";
import SoccerField from "../../components/SoccerField";
import SearchSection from "../../components/SearchSection";
import InputBlock from "../../components/InputBlock";
import SelectInput from "../../components/SelectInput";
import RadioInput from "../../components/RadioInput";

function TeamCreatePage() {
  let thisLocation = useLocation();
  let history = useHistory();
  const options = [
    "3-2-2-3",
    "3-2-3-1", // Value has wrong number of players
    "3-4-3",
    "3-5-2",
    "4-2-3-1",
    "4-3-1-1", // Value has wrong number of players
    "4-3-2", // Value has wrong number of players
    "4-4-2",
    "4-5-1",
    "5-4-1",
  ];
  const [mode, setMode] = useState("");
  useEffect(() => {
    setMode(thisLocation.state);
  }, [thisLocation]);

  const {
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
  } = useContext(TeamContext);

  const { state: teams, dispatch } = useContext(MyTeamsContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      teams &&
      mode === "create" &&
      teams.some((team) => team.name === teamName)
    ) {
      return;
    }
    dispatch({
      type: mode,
      payload: {
        name: teamName,
        description: teamDesc,
        website: teamWebsite,
        type: teamType,
        tags: teamTags,
        formation: teamFormation,
        players: teamPlayers,
      },
    });
    history.push("/");
  }

  return (
    <div className={styles.container}>
      <Card
        title="Create your team"
        headerButtons={
          <Link to="/">
            <span className={`material-icons ${styles["card-header-btn"]}`}>
              close
            </span>
          </Link>
        }
      >
        <form onSubmit={handleSubmit}>
          <fieldset className={styles["team-info"]}>
            <legend className={styles["team-info-title"]}>Team Info</legend>
            <div className={styles["input-section"]}>
              <div className={styles["input-group"]}>
                <InputBlock
                  label="Team name"
                  htmlFor="name"
                  name="name"
                  placeholder="Insert team name"
                  required
                  value={teamName}
                  onChange={setTeamName}
                />
                <InputBlock
                  label="Description"
                  htmlFor="desc"
                  name="desc"
                  textarea
                  value={teamDesc}
                  onChange={setTeamDesc}
                />
              </div>
              <div className={styles["input-group"]}>
                <InputBlock
                  label="Team website"
                  htmlFor="website"
                  name="website"
                  type="url"
                  placeholder="http://myteam.com"
                  required
                  value={teamWebsite}
                  onChange={setTeamWebsite}
                />
                <RadioInput
                  title="Team type"
                  values={["real", "fantasy"]}
                  name="teamType"
                  value={teamType}
                  onChange={setTeamType}
                />
                <TagInput tags={teamTags} onChange={setTeamTags} />
              </div>
            </div>
          </fieldset>
          <fieldset className={styles["team-info"]}>
            <legend className={styles["team-info-title"]}>
              Configure Squad
            </legend>
            <div className={`${styles["input-section"]} ${styles.reversed}`}>
              <div className={styles["input-group"]}>
                <SearchSection />
              </div>
              <div className={styles["input-group"]}>
                <SelectInput
                  label="Formation"
                  htmlFor="formation"
                  options={options}
                  value={teamFormation}
                  onChange={setTeamFormation}
                />
                <SoccerField formation={teamFormation} />
                <button type="submit">Save</button>
              </div>
            </div>
          </fieldset>
        </form>
      </Card>
    </div>
  );
}

export default TeamCreatePage;
