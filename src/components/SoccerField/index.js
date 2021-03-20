import styles from "./styles.module.css";
import Position from "../Position";

const formation = "3-4-3";
function SoccerField() {
  function generateFormation() {
    formation.split("-");
  }

  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <Position />
        <Position />
        <Position />
        <Position spanSize={3} />
        <Position />
        <Position />
        <Position />
        <Position />
        <Position />
        <Position />
        <Position spanSize={3} />
      </div>
    </div>
  );
}

export default SoccerField;
