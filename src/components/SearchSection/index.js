import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import InputBlock from "../InputBlock";
import SearchedPlayer from "../SearchedPlayer";
import API from "../../apis/localAPI";

function SearchSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [players, setPlayers] = useState([]);
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounced(searchTerm);
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [searchTerm]);

  useEffect(() => {
    async function getPlayers() {
      const { data } = await API.get(`/players/search/${searchTerm}`);
      setPlayers(data.api.players);
      console.log(data);
    }
    if (debounced) {
      getPlayers();
    }
  }, [debounced]);

  function renderSearched() {
    return players.map((player) => (
      <SearchedPlayer player={player} key={player.player_id} />
    ));
  }

  return (
    <>
      <InputBlock
        label="Search Players"
        htmlFor="search"
        name="search"
        placeholder="Insert player name"
        pattern="[A-Za-z]{4,}"
        title="Only letter, minimum 4 characters"
        value={searchTerm}
        onChange={setSearchTerm}
      />
      <div
        className={styles["search-results"]}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          let data = e.dataTransfer.getData("Text");
          e.target.appendChild(document.getElementById(data));
          e.preventDefault();
          //setPlayerName(acro);
        }}
      >
        {renderSearched()}
      </div>
    </>
  );
}

export default SearchSection;
