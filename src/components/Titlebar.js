import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// Css

const Titlebar = (props) => {
  const titlebarStyles = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  };

  const titleStyles = {
    width: "100%",
    textAlign: "center",
    fontSize: "40px",
  };
  const iconType = faBars;

  const hamburgerStyles = {
    position: "fixed",
    padding: 0,
    margin: "10px",
    width: "50px",
    padding: "5px",
    backgroundColor: "#900c3f29",
    transitionProperty: "all",
    transitionDuration: "0.2s",
    cursor: "pointer",
    textShadow: "none",
  };

  return (
    <div className="titlebar" style={titlebarStyles}>
      <h1 className="title txt" style={titleStyles}>
        {props.title}
      </h1>
      <FontAwesomeIcon
        icon={iconType}
        size="2x"
        style={hamburgerStyles}
        className="hamburger-btn"
      />
    </div>
  );
};

export default Titlebar;
