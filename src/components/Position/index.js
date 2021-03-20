import React, { useState } from "react";
import styles from "./styles.module.css";

function Position({ spanSize = 1 }) {
  const [playerName, setPlayerName] = useState("");

  function onDragEnter(e) {
    let name = e.dataTransfer.getData("name").match(/\b(\w)/g);
    let acro = name.join("");
    setPlayerName(acro);
  }

  function onDragLeave(e) {
    setPlayerName("");
  }

  function onDrop(e, cat) {
    let name = e.dataTransfer.getData("name").match(/\b(\w)/g);
    let acro = name.join("");
    setPlayerName(acro);
  }

  return (
    <div
      className={styles.container}
      style={{ gridColumn: `span ${spanSize}` }}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {playerName ? playerName : "+"}
    </div>
  );
}

export default Position;
