import React from "react";
import styles from "./styles.module.css";

function RadioInput({ title, values, name, value, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className={styles["container"]}>
      <p>{title}</p>
      {values.map((option) => (
        <label key={option}>
          <input
            type="radio"
            id={option}
            value={option}
            name={name}
            required
            onChange={handleChange}
            checked={value === option}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
}

export default RadioInput;
