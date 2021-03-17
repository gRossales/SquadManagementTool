import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Card from "../Card";

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

  function renderRows() {
    let newteams = teams;
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
            <span className="material-icons">delete</span>
            <span className="material-icons">share</span>
            <span className="material-icons">edit</span>
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
          <Link to="/create">+</Link>
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
