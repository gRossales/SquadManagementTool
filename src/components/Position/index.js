import React, { useState, useEffect, useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import styles from "./styles.module.css";

function Position({ spanSize = 1, children }) {
  const { selectedPlayer } = useContext(PlayerContext);
  const [player, setPlayer] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [initials, setInitials] = useState("");

  useEffect(() => {
    if (player) {
      setName(player.player_name);
      setAge(player.age);
      setNationality(player.nationality);
      let initialsArray = player.player_name
        .split(" ")
        .map((word) => word.charAt(0));
      setInitials(initialsArray.join(""));
    } else {
      setName("");
      setAge("");
      setNationality("");
      setInitials("");
    }
  }, [player]);

  function onDragEnter(e) {
    setPlayer(selectedPlayer);
    e.preventDefault();
  }

  function onDragLeave(e) {
    setPlayer(null);
  }

  function onDrop(e) {
    let data = e.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(data));
    setPlayer(selectedPlayer);
    e.preventDefault();
  }

  return (
    <div
      className={styles.container}
      style={{ gridColumn: `span ${spanSize}` }}
      onDragOver={(e) => {
        e.dataTransfer.dropEffect = "move";
        e.preventDefault();
      }}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {initials ? initials : "+"}
      {children}
    </div>
  );
}

export default Position;
