import React from "react";
import Logo from "../../assets/logo-new.svg";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo-wrapper">
          <img src={Logo} alt="Logo" />
          <h3>Squad Management Tool</h3>
        </div>
        <div className="user-wrapper">
          <p>John Doe</p>
          <span className="material-icons">circle</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
