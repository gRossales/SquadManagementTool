import styles from "./styles.module.css";

function PlayerProperty({ propertyName, propertyValue }) {
  return (
    <div className={styles.container}>
      <h4>{propertyName}</h4>
      <p>{propertyValue}</p>
    </div>
  );
}

export default PlayerProperty;
