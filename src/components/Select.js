import React from "react";
import "../styles/Select.css";

const Select = (props) => {
  const listItems = props.items;

  return (
    <select
      style={{ fontSize: "17px" }}
      placeholder={props.placeholder}
      className="sel txt"
    >
      {listItems.map((item, index) => {
        return (
          <option key={index} className="opt">
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
