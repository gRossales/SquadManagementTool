import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import Card from "../Card";
import { MyTeamsContext } from "../../context/MyTeamsContext";
import useTeam from "../../hooks/useTeam";

const teams = [
  { name: "Barcelona", description: "Barcelona Squad" },
  { name: "Real Madrid", description: "Real Madrid Squad" },
  { name: "Milan", description: "Milan Squad" },
  { name: "Liverpool", description: "Liverpool Squad" },
  { name: "Bayern Munich", description: "Bayern Munich Squad" },
  { name: "Lazio", description: "Lazio Squad" },
];

function MyTeamsCard() {
  const [sortingBy, setSortingBy] = useState("");
  const [ascending, setAscending] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState("");
  const { state, dispatch } = useContext(MyTeamsContext);
  const selectTeam = useTeam();
  const history = useHistory();

  function deleteTeam(team) {
    dispatch({ type: "delete", payload: team });
  }

  function editTeam(team) {
    selectTeam(team);
    setTimeout(() => history.push("/create", { mode: "update" }), 150);
  }

  function renderRows() {
    let newteams = state ? [...state] : teams; //[...teams, ...state.state];
    if (sortingBy !== "") {
      newteams.sort((teamA, teamB) => {
        if (teamA[sortingBy] > teamB[sortingBy]) {
          return ascending ? 1 : -1;
        }
        if (teamA[sortingBy] < teamB[sortingBy]) {
          return ascending ? -1 : 1;
        }
        return 0;
      });
    }
    return newteams.map((team) => (
      <div
        className={`${styles["card-row"]} ${
          selectedTeam === team.name ? styles["active"] : null
        }`}
        key={team.name}
        onClick={() => setSelectedTeam(team.name)}
      >
        <div>
          <p>{team.name}</p>
        </div>
        <div>
          <p>{team.description}</p>
          <div
            className={styles["card-row-buttons"]}
            style={{ display: selectedTeam !== team.name ? "none" : "flex" }}
          >
            <span className="material-icons" onClick={() => deleteTeam(team)}>
              delete
            </span>
            <span className="material-icons">share</span>
            <span className="material-icons" onClick={() => editTeam(team)}>
              edit
            </span>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <Card
      title="My teams"
      headerButtons={
        <button className={styles["card-header-btn"]}>
          {" "}
          <Link to={{ pathname: "/create", state: { mode: "create" } }}>+</Link>
        </button>
      }
    >
      <div className={styles["card-body"]}>
        <div className={styles["card-row-title"]}>
          <div
            onClick={() => {
              if (sortingBy === "name") {
                setAscending(!ascending);
              }
              setSortingBy("name");
            }}
          >
            <p>Name</p>
            <span className="material-icons">swap_vert</span>
          </div>
          <div
            onClick={() => {
              if (sortingBy === "description") {
                setAscending(!ascending);
              }
              setSortingBy("description");
            }}
          >
            <p>Description</p>
            <span className="material-icons">swap_vert</span>
          </div>
        </div>
        {renderRows()}
      </div>
    </Card>
  );
}

export default MyTeamsCard;
