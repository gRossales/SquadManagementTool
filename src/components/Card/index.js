import React from "react";
import "./styles.css";

function Card({ title, headerButtons, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        {headerButtons}
      </div>
      <div className="card-body-container">{children}</div>
    </div>
  );
}

export default Card;
