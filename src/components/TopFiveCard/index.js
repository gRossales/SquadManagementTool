import React from "react";
import styles from "./styles.module.css";
import Card from "../Card";

const highest = [
  { name: "Inter Milan", age: 31.9 },
  { name: "APOEL Nicosa", age: 31.7 },
  { name: "AC Milan", age: 31.6 },
  { name: "Besiktas JK", age: 31.4 },
  { name: "Olympiacos Piraeus", age: 31.3 },
];

const lowest = [
  { name: "Zalgiris Vilnius", age: 21.1 },
  { name: "Arsenal FC", age: 21.6 },
  { name: "Ajax Amsterdam", age: 22.0 },
  { name: "FC Nantes", age: 22.1 },
  { name: "CSKA Moscow", age: 22.5 },
];

function TopFiveCard() {
  function renderList(arr) {
    return arr.map((item) => (
      <div className={styles["card-row"]} key={item.name}>
        <p>{item.name}</p>
        <p>{item.age}</p>
      </div>
    ));
  }

  return (
    <Card title="Top 5">
      <div className={styles["card-body"]}>
        <div>
          <div className={styles["card-row-title"]}>
            <strong>Highest avg age</strong>
          </div>
          <div className={styles["rows-wrapper"]}>{renderList(highest)}</div>
        </div>
        <div>
          <div className={styles["card-row-title"]}>
            <strong>Lowest avg age</strong>
          </div>
          <div className={styles["rows-wrapper"]}>{renderList(lowest)}</div>
        </div>
      </div>
    </Card>
  );
}

export default TopFiveCard;
