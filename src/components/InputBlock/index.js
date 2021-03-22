import React from "react";
import styles from "./styles.module.css";

function InputBlock({
  label,
  htmlFor,
  type = "text",
  name,
  placeholder = "",
  pattern,
  errorMessage,
  textarea,
  required = false,
  value,
  onChange,
}) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className={styles.container}>
      <label htmlFor={htmlFor}>{label}</label>
      {textarea ? (
        <textarea
          type={type}
          id={htmlFor}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          id={htmlFor}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          pattern={pattern ? pattern : undefined}
          title={errorMessage ? errorMessage : undefined}
        />
      )}
    </div>
  );
}

export default InputBlock;
