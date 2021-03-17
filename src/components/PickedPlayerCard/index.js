import styles from "./styles.module.css";

function PickedPlayerCard() {
  return (
    <div className={`card ${styles["colored"]} `}>
      <div className={styles["center-circle"]}> </div>
      <div className={styles["most-picked"]}>
        <h2>Most picked player</h2>
        <div className={styles["pick-percentage"]}>
          <h2>75%</h2>
        </div>
        <div className={styles["avatar"]}>
          {" "}
          <div></div>{" "}
        </div>
      </div>
      <div className={styles["less-picked"]}>
        <h2>Less picked player</h2>
        <div className={styles["pick-percentage"]}>
          <h2>25%</h2>
        </div>
        <div className={styles["avatar"]}></div>
      </div>
    </div>
  );
}

export default PickedPlayerCard;
