import styles from "./styles.module.css";
import PlayerProperty from "../PlayerProperty";

function SearchedPlayer() {
  function onDragStart(e, name) {
    e.dataTransfer.setData("name", name);
  }

  return (
    <div
      className={styles.container}
      draggable
      onDragStart={(e) => onDragStart(e, "Cristiano Ronaldo")}
    >
      <PlayerProperty propertyName="Name:" propertyValue="Cristiano Ronaldo" />
      <PlayerProperty propertyName="Age:" propertyValue={32} />
      <PlayerProperty propertyName="Nacionality:" propertyValue="Portugal" />
    </div>
  );
}

export default SearchedPlayer;
