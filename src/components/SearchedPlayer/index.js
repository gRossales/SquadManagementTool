import React, { useState, useContext } from "react";
import styles from "./styles.module.css";
import PlayerProperty from "../PlayerProperty";
import { PlayerContext } from "../../context/PlayerContext";

function SearchedPlayer({ player }) {
  const { setSelectedPlayer } = useContext(PlayerContext);
  const [beingDragged, setBeingDragged] = useState(false);

  function onDragStart(e) {
    setBeingDragged(true);
    e.dataTransfer.setData("Text", e.target.id);
    setSelectedPlayer(player);
  }
  function onDragEnd(e) {
    setBeingDragged(false);
  }

  return (
    <div
      id={player.player_id}
      className={`${styles.container} ${beingDragged ? styles.dragged : ""}`}
      draggable
      onDragStart={(e) => onDragStart(e)}
      onDragEnd={(e) => onDragEnd(e)}
    >
      <PlayerProperty propertyName="Name:" propertyValue={player.player_name} />
      <PlayerProperty propertyName="Age:" propertyValue={player.age} right />
      <PlayerProperty
        propertyName="Nacionality:"
        propertyValue={player.nationality}
      />
    </div>
  );
}

export default SearchedPlayer;
