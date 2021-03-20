import React, { useState, createRef } from "react";
import styles from "./styles.module.css";

function TagInput() {
  const textInput = createRef();
  const [tags, setTags] = useState([]);
  const [tagName, setTagName] = useState("");

  function handleChange(e) {
    setTagName(e.target.value.replace(/;/g, ""));
  }

  function deleteTag(key) {
    setTags(tags.filter((tag) => tag !== key));
  }

  function keyPress(e) {
    if (
      (e.key === "Enter" || e.key === ";") &&
      tagName &&
      !tags.some((name) => name === tagName)
    ) {
      console.log("if keypress");
      setTags([...tags, tagName]);
      setTagName("");
    }
  }

  return (
    <div className={styles.container}>
      <label htmlFor="tags">Tags</label>
      <div className={styles.wrapper} onClick={() => textInput.current.focus()}>
        {tags.map((val) => (
          <span className={styles.tag} key={val}>
            {val}
            <span onClick={() => deleteTag(val)} className="material-icons">
              close
            </span>
          </span>
        ))}
        <input
          ref={textInput}
          id="tags"
          name="tags"
          value={tagName}
          onKeyDown={keyPress}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default TagInput;
