import React from "react";
import styles from "./styles.module.css";

function SelectInput({
  label,
  htmlFor,
  options = [],
  required,
  value,
  onChange,
}) {
  function handleChange(e) {
    onChange(e.target.value);
  }
  return (
    <div className={`${styles["container"]}  ${styles["inline"]}`}>
      <label htmlFor={htmlFor}>{label}</label>
      <select
        name={htmlFor}
        id={htmlFor}
        required={required}
        onChange={handleChange}
        value={value}
      >
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
