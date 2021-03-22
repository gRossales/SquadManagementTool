import styles from "./styles.module.css";

function PlayerProperty({ propertyName, propertyValue, right }) {
  return (
    <div className={`${styles.container} ${right ? styles.right : null}`}>
      <h4>{propertyName}</h4>
      <p>{propertyValue}</p>
    </div>
  );
}

export default PlayerProperty;
